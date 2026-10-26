import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Copy, Printer } from "lucide-react";

/**
 * Renders inline markdown (bold, italics, links, code) while keeping all
 * other text word for word. Internal links route client-side; external
 * links open in a new tab.
 */
const INLINE_RE = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g;

export function Inline({ text }: { text: string }) {
  const parts = text.split(INLINE_RE).filter((part) => part !== "");
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          if (href.startsWith("http")) {
            return (
              <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 hover:text-primary">
                {label}
              </a>
            );
          }
          return (
            <Link key={index} to={href} className="font-medium underline underline-offset-4 hover:text-primary">
              {label}
            </Link>
          );
        }
        if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
          return (
            <code key={index} className="rounded bg-muted px-1.5 py-0.5 text-[0.9em]">
              {part.slice(1, -1)}
            </code>
          );
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

/** Clickable checklist with a progress bar; state persists in localStorage. */
export function Checklist({ slug, sectionId, items, printable }: { slug: string; sectionId: string; items: string[]; printable: boolean }) {
  const storageKey = `guide-checklist:${slug}:${sectionId}`;
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const saved = JSON.parse(raw);
        if (Array.isArray(saved) && saved.length === items.length) {
          setChecked(saved.map(Boolean));
        }
      }
    } catch {
      // Storage blocked; the checklist still works for the current visit.
    }
  }, [storageKey, items.length]);

  const toggle = (index: number) => {
    setChecked((current) => {
      const next = current.map((value, i) => (i === index ? !value : value));
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // Storage blocked; ignore.
      }
      return next;
    });
  };

  const done = checked.filter(Boolean).length;
  const percent = Math.round((done / items.length) * 100);

  return (
    <div className="my-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold">
          {done} of {items.length} done
        </p>
        {printable && (
          <Button variant="outline" size="sm" className="no-print" onClick={() => window.print()}>
            <Printer className="mr-2 h-4 w-4" aria-hidden="true" />
            Print checklist
          </Button>
        )}
      </div>
      <div className="mb-5 h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label="Checklist progress">
        <div className="h-full bg-primary transition-all" style={{ width: `${percent}%` }} />
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <label className="flex cursor-pointer items-start gap-3">
              <input type="checkbox" checked={checked[index]} onChange={() => toggle(index)} className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-primary" />
              <span className={checked[index] ? "text-muted-foreground line-through" : ""}>
                <Inline text={item} />
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** A script or template blockquote with a copy button. */
export function CopyCard({ lines }: { lines: string[] }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = lines.join("\n");
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="mb-3 flex justify-end">
        <Button variant="outline" size="sm" className="no-print" onClick={copy}>
          {copied ? <Check className="mr-2 h-4 w-4" aria-hidden="true" /> : <Copy className="mr-2 h-4 w-4" aria-hidden="true" />}
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <div className="space-y-3">
        {lines.map((line, index) =>
          line.trim() === "" ? (
            <div key={index} className="h-1" />
          ) : (
            <p key={index} className="leading-relaxed">
              <Inline text={line} />
            </p>
          ),
        )}
      </div>
    </div>
  );
}

/** "Fixes 1 and 2" style cells become links that scroll to each fix. */
function JumpLinks({ text }: { text: string }) {
  const match = text.match(/Fixes?\s+(.+)$/i);
  if (!match) return <Inline text={text} />;
  const numbers: number[] = [];
  const range = match[1].match(/(\d+)\s+through\s+(\d+)/);
  if (range) {
    for (let n = Number(range[1]); n <= Number(range[2]); n++) numbers.push(n);
  } else {
    numbers.push(...(match[1].match(/\d+/g) ?? []).map(Number));
  }
  return (
    <span className="inline-flex flex-wrap gap-x-3 gap-y-1">
      {numbers.map((n) => (
        <a key={n} href={`#fix-${n}`} className="font-medium underline underline-offset-4 hover:text-primary">
          Fix {n}
        </a>
      ))}
    </span>
  );
}

/** Tables scroll-free on desktop; stacked as cards on mobile. */
export function ResponsiveTable({ head, rows, jump = false }: { head: string[]; rows: string[][]; jump?: boolean }) {
  const renderCell = (cell: string, columnIndex: number) => (jump && head[columnIndex] === "Jump to" ? <JumpLinks text={cell} /> : <Inline text={cell} />);

  return (
    <div className="my-8">
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {head.map((cell, index) => (
                <th key={index} className="border-b-2 border-border px-3 py-2.5 text-left font-semibold">
                  {cell ? <Inline text={cell} /> : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-border">
                {row.map((cell, columnIndex) => (
                  <td key={columnIndex} className="px-3 py-3 align-top leading-relaxed">
                    {renderCell(cell, columnIndex)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-3 md:hidden">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="space-y-2 rounded-xl border border-border bg-card p-4">
            {row.map((cell, columnIndex) =>
              cell === "" ? null : (
                <p key={columnIndex} className="text-sm leading-relaxed">
                  {head[columnIndex] ? <span className="font-semibold">{head[columnIndex]}: </span> : null}
                  {renderCell(cell, columnIndex)}
                </p>
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Sticky table of contents: sidebar on desktop, collapsible on mobile. */
export function Toc({ items }: { items: { id: string; text: string }[] }) {
  return (
    <nav aria-label="On this page" className="no-print">
      <details className="mb-8 rounded-2xl border border-border bg-card p-4 lg:hidden">
        <summary className="cursor-pointer font-semibold">On this page</summary>
        <ul className="mt-3 space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </details>
      <div className="sticky top-28 hidden lg:block">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">On this page</p>
        <ul className="space-y-2.5 border-l-2 border-border pl-4">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="block text-sm leading-snug text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/** The 10 hiring questions in the scams article, as a printable card. */
export function QuestionsCard({ items }: { items: string[] }) {
  return (
    <div className="my-8 rounded-2xl border-2 border-primary bg-card p-5 sm:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Ask before you hire</p>
        <Button variant="outline" size="sm" className="no-print" onClick={() => window.print()}>
          <Printer className="mr-2 h-4 w-4" aria-hidden="true" />
          Print these questions
        </Button>
      </div>
      <ol className="list-decimal space-y-3 pl-6">
        {items.map((item, index) => (
          <li key={index} className="pl-2 leading-relaxed">
            <Inline text={item} />
          </li>
        ))}
      </ol>
    </div>
  );
}
