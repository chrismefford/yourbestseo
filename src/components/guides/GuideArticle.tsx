import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";
import { SEO, generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/components/SEO";
import { getGuide, keepReadingFor, type Guide } from "@/data/guides";
import { stripMarkdown } from "@/lib/guides-parser";
import { Checklist, CopyCard, Inline, QuestionsCard, ResponsiveTable, Toc } from "@/components/guides/GuideParts";

const SITE_URL = "https://yourbestseo.com";

const authorSchema = {
  "@type": "Person",
  "@id": `${SITE_URL}/about#chris-mefford`,
  name: "Chris Mefford",
  url: `${SITE_URL}/about`,
};

function generateHowToSchema(guide: Guide) {
  const steps = guide.blocks
    .filter((block): block is Extract<typeof block, { kind: "checklist" }> => block.kind === "checklist")
    .flatMap((block) => block.items);
  return {
    "@type": "HowTo",
    name: guide.title,
    description: guide.metaDescription,
    step: steps.map((step) => ({ "@type": "HowToStep", text: stripMarkdown(step) })),
  };
}

export default function GuideArticle({ slug }: { slug: string }) {
  const guide = getGuide(slug);
  if (!guide) return <NotFound />;

  const schema: object[] = [
    {
      ...generateArticleSchema({
        title: guide.metaTitle,
        description: guide.metaDescription,
        datePublished: guide.dateISO,
        author: "Chris Mefford",
        url: guide.path,
      }),
      author: authorSchema,
      articleSection: "Small Business Guides",
    },
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Guides", url: "/guides" },
      { name: guide.title, url: guide.path },
    ]),
    generateFAQSchema(guide.faqs),
    ...(guide.howTo ? [generateHowToSchema(guide)] : []),
  ];

  const tocItems = guide.blocks
    .filter((block): block is Extract<typeof block, { kind: "h2" }> => block.kind === "h2")
    .map((block) => ({ id: block.id, text: block.text }));

  const keepReading = keepReadingFor(guide);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title={guide.metaTitle} description={guide.metaDescription} canonical={guide.path} type="article" schema={schema} />
      <Header />
      <main>
        <section className="border-b border-border pb-10 pt-32 md:pb-12 md:pt-40">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-3 text-sm">
              <Link to="/" className="underline underline-offset-4">Home</Link>
              <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              <Link to="/guides" className="underline underline-offset-4">Guides</Link>
              <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span aria-current="page">{guide.title}</span>
            </nav>
            <h1 className="max-w-4xl font-display text-3xl font-bold leading-tight tracking-normal sm:text-4xl lg:text-5xl">{guide.title}</h1>
            <p className="mt-6 text-sm text-muted-foreground">
              By <Link to="/about" className="underline underline-offset-4">Chris Mefford</Link>
              <span aria-hidden="true" className="mx-2">·</span>
              <time dateTime={guide.dateISO}>{guide.dateLabel}</time>
            </p>
          </div>
        </section>

        <article className="bg-background py-12 text-foreground md:py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className={guide.toc ? "lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12" : ""}>
              {guide.toc && (
                <aside className="lg:pt-1">
                  <Toc items={tocItems} />
                </aside>
              )}
              <div className="max-w-[700px]">
                {guide.blocks.map((block, index) => (
                  <Fragment key={index}>
                    {block.kind === "h2" && (
                      <h2 id={block.id} className="mb-5 mt-12 scroll-mt-28 font-display text-2xl font-bold tracking-normal sm:text-3xl">
                        {block.text}
                      </h2>
                    )}
                    {block.kind === "h3" && (
                      <h3 id={block.id} className="mb-4 mt-9 scroll-mt-28 font-display text-xl font-bold tracking-normal sm:text-2xl">
                        {block.text}
                      </h3>
                    )}
                    {block.kind === "p" && (
                      <p className="mb-5 text-base leading-relaxed sm:text-lg">
                        <Inline text={block.text} />
                      </p>
                    )}
                    {block.kind === "ul" && (
                      <ul className="mb-6 list-disc space-y-2.5 pl-6 text-base leading-relaxed sm:text-lg">
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="pl-1">
                            <Inline text={item} />
                          </li>
                        ))}
                      </ul>
                    )}
                    {block.kind === "ol" &&
                      (guide.slug === "seo-scams" && block.items.length === 10 ? (
                        <QuestionsCard items={block.items} />
                      ) : (
                        <ol className="mb-6 list-decimal space-y-2.5 pl-6 text-base leading-relaxed sm:text-lg">
                          {block.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="pl-1">
                              <Inline text={item} />
                            </li>
                          ))}
                        </ol>
                      ))}
                    {block.kind === "checklist" && (
                      <Checklist slug={guide.slug} sectionId={block.id ?? `checklist-${index}`} items={block.items} printable={guide.printChecklist} />
                    )}
                    {block.kind === "table" && (
                      <ResponsiveTable head={block.head} rows={block.rows} jump={guide.slug === "business-not-showing-on-google" && block.head.includes("Jump to")} />
                    )}
                    {block.kind === "quote" && <CopyCard lines={block.lines} />}
                  </Fragment>
                ))}

                <section aria-labelledby="guide-faq" className="mt-12">
                  <h2 id="guide-faq" className="mb-8 scroll-mt-28 font-display text-2xl font-bold tracking-normal sm:text-3xl">
                    FAQ
                  </h2>
                  <div className="space-y-8">
                    {guide.faqs.map((faq) => (
                      <div key={faq.question}>
                        <h3 className="mb-3 text-lg font-bold tracking-normal sm:text-xl">{faq.question}</h3>
                        <p className="text-base leading-relaxed sm:text-lg">
                          <Inline text={faq.answer} />
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="no-print mt-14 rounded-3xl border-2 border-primary bg-card p-7 sm:p-10">
                  <h2 className="mb-4 font-display text-2xl font-bold tracking-normal sm:text-3xl">{guide.cta.heading}</h2>
                  {guide.cta.paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      <Inline text={paragraph} />
                    </p>
                  ))}
                  <Button asChild size="lg" variant="hero" className="mt-3 gap-2">
                    <Link to={guide.cta.buttonHref}>
                      {guide.cta.buttonLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </section>

                <section className="no-print mt-14 border-t border-border pt-10">
                  <h2 className="mb-6 font-display text-2xl font-bold tracking-normal">Keep reading</h2>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {keepReading.map((item) => (
                      <Link key={item.slug} to={item.path} className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary">
                        <p className="mb-2 font-bold leading-snug group-hover:text-primary">{item.title}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          Read the guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
