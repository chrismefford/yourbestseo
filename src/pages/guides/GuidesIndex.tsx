import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, generateBreadcrumbSchema, generateWebPageSchema } from "@/components/SEO";
import { guideGroups, getGuide, HUB } from "@/data/guides";

const PATH = "/guides";

export default function GuidesIndex() {
  const schema = [
    generateWebPageSchema({
      name: "Small Business SEO Guides",
      description:
        "Plain-English SEO guides for small business owners: why you are not showing up on Google, how to get found by AI search, what SEO costs, and how to spot scams.",
      url: PATH,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Guides", url: PATH },
    ]),
  ];

  return (
    <div className="guides-light min-h-screen bg-background text-foreground">
      <SEO
        title="Small Business SEO Guides"
        description="Free, plain-English SEO guides for small business owners. Fix what is broken, learn how AI search picks businesses, and decide whether to hire help."
        canonical={PATH}
        schema={schema}
      />
      <Header />
      <main>
        <section className="border-b border-border pb-12 pt-32 md:pt-40">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm">
              <Link to="/" className="underline underline-offset-4">Home</Link>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span aria-current="page">Guides</span>
            </nav>
            <p className="mb-5 text-sm font-semibold text-primary">SMALL BUSINESS GUIDES</p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-normal sm:text-5xl">
              Plain-English guides for owners who do their own marketing
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              No jargon, no 40-slide decks. Each guide walks you through one problem and what to do about it, written for small business owners, not marketers.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            {/* Hub card */}
            <Link to={HUB.path} className="group grid gap-6 rounded-3xl border-2 border-primary bg-card p-7 transition-colors hover:bg-muted/40 sm:p-8 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Start here</p>
                <h2 className="mb-3 font-display text-2xl font-bold leading-tight tracking-normal group-hover:text-primary sm:text-3xl">{HUB.title}</h2>
                <p className="mb-5 max-w-2xl leading-relaxed text-muted-foreground">{HUB.metaDescription}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-primary">
                  Work through the checklist <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
              {HUB.image && (
                <img
                  src={HUB.image}
                  alt=""
                  width={1536}
                  height={1024}
                  className="order-first aspect-[16/10] w-full rounded-2xl border border-border object-cover md:order-none"
                />
              )}
            </Link>

            {guideGroups.map((group) => (
              <div key={group.heading} className="mt-14">
                <h2 className="mb-6 font-display text-2xl font-bold tracking-normal">{group.heading}</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {group.slugs.map((slug) => {
                    const guide = getGuide(slug);
                    if (!guide) return null;
                    return (
                      <Link key={slug} to={guide.path} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary">
                        {guide.image && (
                          <img
                            src={guide.image}
                            alt=""
                            loading="lazy"
                            width={1536}
                            height={1024}
                            className="aspect-[16/10] w-full border-b border-border object-cover"
                          />
                        )}
                        <div className="flex flex-1 flex-col p-6">
                        <h3 className="mb-3 font-bold leading-snug group-hover:text-primary">{guide.title}</h3>
                        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{guide.metaDescription}</p>
                        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          Read the guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
