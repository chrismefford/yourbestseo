import { ArrowRight, ChevronRight } from "lucide-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEO, generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/components/SEO";
import { aiSignalStack as article } from "@/data/ai-signal-stack";
import { redditArticle } from "@/data/reddit-ai-article";
import searchImage from "@/assets/local-business-search.jpg";
import communityImage from "@/assets/signal-community.jpg";
import videoImage from "@/assets/signal-video.jpg";
import trustInfographic from "@/assets/signal-four-infographic.png.asset.json";
import clip from "@/assets/videos/signal-stack-monitor-fixed.mp4.asset.json";
import webmClip from "@/assets/videos/signal-stack-monitor-fixed.webm.asset.json";
import clipPoster from "@/assets/videos/signal-stack-monitor-fixed-poster.jpg.asset.json";

const sectionImages: Record<string, { src: string; alt: string; caption: string }> = {
  "signal-1-reddit-the-word-of-mouth-layer": { src: communityImage, alt: "HVAC professional explaining a customer's question at a laptop", caption: "Community conversations start with useful answers, not a sales pitch." },
  "signal-2-youtube-the-one-most-small-businesses-are-sleeping-on": { src: videoImage, alt: "Dentist recording an educational video with a smartphone and dental model", caption: "A clear answer to a real customer question is a strong starting point for video." },
  "signal-4-reviews-and-directories-the-local-trust-layer": { src: trustInfographic.url, alt: "Reviews and directories infographic: Google Business Profile, Yelp, industry directories and genuine reviews surround your business, with consistent name, contact details and service area.", caption: "Real customer experiences and accurate business information add context." },
};

const author = { "@type": "Person", "@id": "https://yourbestseo.com/about#chris-mefford", name: "Chris Mefford", url: "https://yourbestseo.com/about" };
const schema = [
  { ...generateArticleSchema({ title: article.title, description: article.description, datePublished: article.datePublished, author: "Chris Mefford", url: article.path }), author, articleSection: "AI search visibility", keywords: "how to get recommended by ChatGPT, LLM visibility, AI search signals, Reddit AI visibility, GEO for small business" },
  author,
  generateBreadcrumbSchema(article.breadcrumbs),
  generateFAQSchema(article.faqs),
];

export default function AISignalStack() {
  return <div className="min-h-screen bg-background text-foreground">
    <SEO title={article.metaTitle} description={article.description} canonical={article.path} type="article" schema={schema} />
    <Header />
    <main>
      <section className="relative isolate overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <img src={searchImage} alt="Local business owner reviewing search visibility" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-background/85" />
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-3 text-sm mb-8">
            {article.breadcrumbs.map((crumb, index) => <Fragment key={crumb.url}>
              {index > 0 && <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />}
              {index === article.breadcrumbs.length - 1 ? <span aria-current="page">{crumb.name}</span> : <Link to={crumb.url} className="underline underline-offset-4">{crumb.name}</Link>}
            </Fragment>)}
          </nav>
          <p className="text-primary text-sm font-semibold mb-5">LOCAL BUSINESS · AI SEARCH · LLM VISIBILITY</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-normal max-w-4xl">{article.title}</h1>
          <p className="mt-7 text-sm"><time dateTime={article.datePublished}>October 23, 2026</time><span aria-hidden="true" className="mx-3">·</span>By <Link to="/about" className="underline underline-offset-4">Chris Mefford</Link></p>
        </div>
      </section>
      <article className="light-surface bg-background text-foreground py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <section aria-labelledby="signal-video-heading" className="mb-12 border-b border-border pb-10">
            <h2 id="signal-video-heading" className="font-display text-2xl sm:text-3xl font-bold tracking-normal mb-6">More than your website</h2>
            <video aria-label="AI signal stack video" controls playsInline preload="none" poster={clipPoster.url} className="w-full aspect-video rounded-lg bg-muted">
              <source src={webmClip.url} type="video/webm" />
              <source src={clip.url} type="video/mp4" />
              <track kind="captions" src="/ai-signal-stack.vtt" srcLang="en" label="English" />
              Your browser does not support video. <a href={clip.url}>Watch the video</a>.
            </video>
          </section>
          {article.sections.map((section, index) => <Fragment key={section.id}>
            {index === 2 && <section aria-labelledby="signal-stack-overview" className="my-12 border-y border-border py-8">
              <h2 id="signal-stack-overview" className="font-display text-2xl sm:text-3xl font-bold tracking-normal mb-6">The AI signal stack at a glance</h2>
              <p className="mb-6 leading-relaxed">Five places I look for useful, accurate information about a business—not a guaranteed ranking formula.</p>
              <ol className="divide-y divide-border">{article.signals.map((signal, i) => <li key={signal.id} className="grid grid-cols-[2rem_1fr] gap-3 py-5"><span className="text-muted-foreground text-sm pt-1">0{i + 1}</span><div><a href={`#${signal.id}`} className="text-lg font-bold underline underline-offset-4">{signal.name}</a><p className="text-sm font-medium mt-2">{signal.context}</p><p className="text-muted-foreground leading-relaxed mt-2">{signal.action}</p></div></li>)}</ol>
            </section>}
            <section id={section.id} className="scroll-mt-28 mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-normal leading-tight mb-6">{section.heading}</h2>
              {sectionImages[section.id] && <figure className="mb-7"><img src={sectionImages[section.id].src} alt={sectionImages[section.id].alt} width={1536} height={1024} loading="lazy" className="w-full aspect-[3/2] object-cover rounded-lg" /><figcaption className="text-sm text-muted-foreground leading-relaxed mt-3">{sectionImages[section.id].caption}</figcaption></figure>}
              <div className="space-y-5 text-base sm:text-lg leading-relaxed">{section.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
              {section.items.length > 0 && (section.ordered ? <ol className="list-decimal pl-6 mt-6 space-y-4 text-base sm:text-lg leading-relaxed">{section.items.map(text => <li key={text} className="pl-2">{text}</li>)}</ol> : <ul className="list-disc pl-6 mt-6 space-y-4 text-base sm:text-lg leading-relaxed">{section.items.map(text => <li key={text} className="pl-2">{text}</li>)}</ul>)}
              {section.id === "signal-1-reddit-the-word-of-mouth-layer" && <div className="mt-7 border-l-4 border-primary pl-5 space-y-4"><p><Link to={redditArticle.path} className="font-semibold underline underline-offset-4">How I Discovered Reddit Was the Back Door to ChatGPT</Link></p><p><Link to="/reddit-marketing" className="underline underline-offset-4">Reddit marketing & community management for local businesses</Link></p></div>}
            </section>
          </Fragment>)}
          <section id="faq" className="scroll-mt-28 mb-12"><h2 className="font-display text-3xl font-bold tracking-normal mb-8">Frequently asked questions</h2><div className="space-y-8">{article.faqs.map(faq => <div key={faq.question}><h3 className="text-xl font-bold tracking-normal mb-3">{faq.question}</h3><p className="text-base sm:text-lg leading-relaxed">{faq.answer}</p></div>)}</div></section>
          <section className="border-y border-border py-9 mb-10"><h2 className="font-display text-3xl font-bold tracking-normal mb-5">Want to know what AI says about your business?</h2><p className="text-lg leading-relaxed">Let’s look at who gets recommended, which sources appear and where your business information is missing. Chris brings 20 years in marketing and experience running one of the world’s largest websites, with 1.2 billion pages.</p><p className="mt-5 leading-relaxed">Start with a free audit conversation. No jargon, no 40-slide deck—just a practical plan for getting found and turning attention into inquiries.</p><Button asChild size="lg" className="mt-7 h-auto py-4 whitespace-normal"><Link to="/book">Go over my free audit with Chris <ArrowRight className="shrink-0" aria-hidden="true" /></Link></Button></section>
          <section aria-labelledby="signal-sources"><h2 id="signal-sources" className="text-xl font-bold tracking-normal mb-5">Sources</h2><ul className="space-y-4 text-sm leading-relaxed">{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{source.label}</a></li>)}</ul><p className="mt-6 text-sm text-muted-foreground leading-relaxed">Studies describe their own samples and dates. Citation frequency and correlation do not establish private ranking rules or guaranteed recommendations. Each platform’s answers can vary by question, location and date.</p></section>
        </div>
      </article>
    </main>
    <Footer />
  </div>;
}
