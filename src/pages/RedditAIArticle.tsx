import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEO, generateArticleSchema, generateBreadcrumbSchema } from "@/components/SEO";
import { redditArticle } from "@/data/reddit-ai-article";
import communityImage from "@/assets/reddit-community.jpg";
import redditLogoLight from "@/assets/reddit-logo-light.svg";

const author = { "@type": "Person", "@id": "https://yourbestseo.com/about#chris-mefford", name: "Chris Mefford", url: "https://yourbestseo.com/about" };
const schema = [
  { ...generateArticleSchema({ title: redditArticle.title, description: redditArticle.description, datePublished: "2026-10-22", author: "Chris Mefford", url: redditArticle.path }), author },
  author,
  generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Reddit Marketing", url: "/reddit-marketing" }, { name: "Reddit and AI Search", url: redditArticle.path }]),
];

export default function RedditAIArticle() {
  return <div className="min-h-screen bg-background text-foreground">
    <SEO title={redditArticle.metaTitle} description={redditArticle.description} canonical={redditArticle.path} type="article" schema={schema} />
    <Header />
    <main>
      <section className="relative isolate overflow-hidden pt-32 pb-14 md:pt-40 md:pb-16">
        <img src={communityImage} alt="Business owner reviewing Reddit conversations" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-background/80" />
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <img src={redditLogoLight} alt="Reddit" width={250} height={81} className="h-9 w-auto mb-7" />
          <nav aria-label="Breadcrumb" className="text-sm mb-7 flex flex-wrap gap-3"><Link to="/" className="underline underline-offset-4">Home</Link><span aria-hidden="true">/</span><Link to="/reddit-marketing" className="underline underline-offset-4">Reddit Marketing</Link><span aria-hidden="true">/</span><span>Reddit and AI Search</span></nav>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">{redditArticle.title}</h1>
          <p className="mt-7 text-sm"><time dateTime="2026-10-22">October 22, 2026</time><span className="mx-3" aria-hidden="true">·</span>By <Link to="/about" className="underline underline-offset-4">Chris Mefford</Link></p>
        </div>
      </section>
      <article className="light-surface bg-background text-foreground py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="space-y-6 text-lg leading-relaxed">{redditArticle.intro.map(text => <p key={text}>{text}</p>)}</div>
          <nav aria-label="Article contents" className="my-10 border-y border-border py-7"><h2 className="font-bold text-lg mb-4">In this article</h2><ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">{redditArticle.sections.map(section => <li key={section.id}><a href={`#${section.id}`} className="underline underline-offset-4">{section.heading}</a></li>)}</ul></nav>
          {redditArticle.sections.map(section => <section key={section.id} id={section.id} className="scroll-mt-28 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight mb-6">{section.heading}</h2>
            {section.note && <p className="border-l-4 border-primary pl-5 mb-6 text-sm font-medium leading-relaxed">{section.note}</p>}
            <div className="space-y-5 text-base sm:text-lg leading-relaxed">{section.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
            {section.items && (section.ordered ? <ol className="list-decimal pl-6 mt-6 space-y-5 text-base sm:text-lg leading-relaxed">{section.items.map(text => <li key={text} className="pl-2">{text}</li>)}</ol> : <ul className="list-disc pl-6 mt-6 space-y-4 text-base sm:text-lg leading-relaxed">{section.items.map(text => <li key={text} className="pl-2">{text}</li>)}</ul>)}
          </section>)}
          <section id="faq" className="scroll-mt-28 mb-12"><h2 className="font-display text-3xl font-bold mb-7">Frequently asked questions</h2><div className="space-y-8">{redditArticle.faqs.map(faq => <div key={faq.question}><h3 className="font-bold text-xl mb-3">{faq.question}</h3><p className="leading-relaxed text-base sm:text-lg">{faq.answer}</p></div>)}</div></section>
          <section className="border-y border-border py-9 mb-10"><h2 className="font-display text-3xl font-bold mb-5">The bottom line</h2><p className="text-lg leading-relaxed">AI search didn't kill word-of-mouth. It just started reading it. Run ten prompts about your business, see what the AI says, and find out which conversations are shaping those answers.</p><p className="mt-5 leading-relaxed">Want help running an AI visibility audit for your business? Let's look at your website, search results and the conversations your customers rely on.</p><Button asChild size="lg" className="mt-7 h-auto py-4 whitespace-normal"><Link to="/book">Go over my free audit with Chris <ArrowRight className="shrink-0" aria-hidden="true" /></Link></Button></section>
          <section aria-labelledby="article-sources"><h2 id="article-sources" className="text-xl font-bold mb-5">Sources</h2><ul className="space-y-4 text-sm leading-relaxed">{redditArticle.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{source.label}</a></li>)}</ul><p className="mt-6 text-sm text-muted-foreground leading-relaxed">Studies describe their own samples and dates, not guaranteed business results or private AI ranking rules. Your Best SEO is not affiliated with Reddit or any AI platform.</p></section>
        </div>
      </article>
    </main>
    <Footer />
  </div>;
}