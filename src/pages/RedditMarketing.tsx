import { ArrowRight, Check, MessageCircle, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEO, generateBreadcrumbSchema, generateWebPageSchema } from "@/components/SEO";
import { redditDescription, redditFAQs, redditServices, redditSources } from "@/data/reddit-marketing";
import communityImage from "@/assets/reddit-community.jpg";

const pageSchema = [
  generateWebPageSchema({ name: "Reddit Marketing & Community Management", description: redditDescription, url: "/reddit-marketing" }),
  generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Reddit Marketing", url: "/reddit-marketing" }]),
  { "@type": "Service", "@id": "https://yourbestseo.com/reddit-marketing/#service", name: "Reddit Marketing & Community Management", serviceType: "Reddit marketing and community management for local businesses", description: redditDescription, url: "https://yourbestseo.com/reddit-marketing", provider: { "@id": "https://yourbestseo.com/#organization" }, areaServed: { "@type": "Country", name: "United States" } },
];

export default function RedditMarketing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="Reddit Marketing & Management for AI Visibility" description={redditDescription} canonical="/reddit-marketing" schema={pageSchema} />
      <Header />
      <main>
        <section className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20" aria-labelledby="reddit-page-heading">
          <img src={communityImage} alt="Local business owner reviewing conversations at his laptop" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-right" />
          <div className="absolute inset-0 -z-10 bg-background/65 lg:bg-background/45" />
          <div className="container mx-auto px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm"><Link to="/" className="underline underline-offset-4">Home</Link><span className="mx-3" aria-hidden="true">/</span><span>Reddit Marketing</span></nav>
            <p className="text-sm font-semibold mb-5 flex items-center gap-2"><MessageCircle className="h-5 w-5" aria-hidden="true" />COMMUNITY. TRUST. DISCOVERY.</p>
            <h1 id="reddit-page-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl">Reddit Marketing<br />& Community Management</h1>
            <p className="mt-6 text-lg leading-relaxed max-w-xl">Get closer to the questions your customers really ask. Build a credible Reddit presence that supports local discovery, Google search and AI visibility.</p>
            <Button asChild size="lg" className="light-surface mt-8 h-auto min-h-12 py-4 whitespace-normal text-center"><Link to="/book">Talk to Chris about Reddit <ArrowRight className="shrink-0" aria-hidden="true" /></Link></Button>
          </div>
        </section>

        <div className="light-surface bg-background text-foreground">
          <section className="py-16 lg:py-20" aria-labelledby="reddit-opportunity-heading">
            <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-20">
              <div><p className="text-sm font-semibold mb-4">THE OPPORTUNITY</p><h2 id="reddit-opportunity-heading" className="text-3xl sm:text-4xl font-bold leading-tight">Be useful where people are deciding who to trust.</h2></div>
              <div className="space-y-5 text-muted-foreground leading-relaxed"><p>Someone choosing a dentist, replacing an air conditioner or planning a remodel may want more than a polished business website. Reddit gives people a place to compare experiences and ask follow-up questions. A relevant, honest answer can help a reader understand their options—even if they never click a link.</p><p>Reddit management for businesses starts with listening. Which communities discuss your work? What concerns keep coming up? Are professional replies welcome? We help you build a presence around your actual expertise, not a stream of disguised advertisements.</p></div>
            </div>
          </section>

          <section className="bg-muted border-y border-border py-16 lg:py-20" aria-labelledby="reddit-ai-heading">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
              <p className="text-sm font-semibold mb-4">REDDIT SEO · AEO · AI SEARCH</p><h2 id="reddit-ai-heading" className="text-3xl sm:text-4xl font-bold leading-tight">Why Reddit belongs in the AI search conversation.</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">Google and OpenAI have announced partnerships with Reddit that provide access to Reddit content. That makes public community conversations relevant to a broader search strategy. It does not mean a post will get your company into ChatGPT, Claude, Perplexity or Google's AI answers.</p>
              <div className="grid md:grid-cols-2 gap-8 mt-10"><div className="border-t-2 border-foreground pt-5"><h3 className="text-xl font-bold mb-3">A useful source beyond your website</h3><p className="text-muted-foreground leading-relaxed">Reddit SEO is about discoverable, relevant discussions—not a guaranteed backlink formula. We look for questions connected to your services and use those insights alongside your <Link to="/authority/local-seo-services" className="underline underline-offset-4">Google Maps and local SEO strategy</Link>.</p></div><div className="border-t-2 border-foreground pt-5"><h3 className="text-xl font-bold mb-3">Evidence, not promises</h3><p className="text-muted-foreground leading-relaxed"><Link to="/authority/ai-search-seo" className="underline underline-offset-4">Answer engine optimization and LLM visibility</Link> depend on more than one channel. We distinguish visible mentions and cited sources from assumptions about how AI works. Training-data access is not the same as a live recommendation.</p></div></div>
            </div>
          </section>

          <section className="py-16 lg:py-20" aria-labelledby="reddit-services-heading">
            <div className="container mx-auto px-4 sm:px-6"><p className="text-sm font-semibold mb-4">A PRACTICAL REDDIT CONTENT STRATEGY</p><h2 id="reddit-services-heading" className="text-3xl sm:text-4xl font-bold mb-10">What Reddit management can cover.</h2><div className="divide-y divide-border">{redditServices.map(({ title, text }, index) => <div key={title} className="grid md:grid-cols-[0.8fr_1.2fr] gap-5 md:gap-12 py-7"><h3 className="text-xl sm:text-2xl font-bold flex gap-4"><span className="text-muted-foreground text-base pt-1">0{index + 1}</span>{title}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></div>)}</div></div>
          </section>

          <section className="bg-primary text-primary-foreground py-16 lg:py-20" aria-labelledby="reddit-local-heading"><div className="container mx-auto px-4 sm:px-6"><h2 id="reddit-local-heading" className="text-3xl sm:text-4xl font-bold max-w-3xl">Local expertise is worth sharing.</h2><div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-10">{[
            ["Dentists", "Explain what a first visit involves, how to compare treatment options with a clinician, or what questions to ask a practice. Keep patient information private and avoid individual diagnoses."],
            ["HVAC companies", "Clarify repair-versus-replacement considerations and everyday maintenance questions. Keep safety-sensitive work in the hands of qualified technicians, not anonymous troubleshooting threads."],
            ["Contractors & home services", "Help homeowners understand project planning, estimates and service-area limits. Share practical experience without inventing prices, timelines or customer endorsements."],
          ].map(([title, text]) => <div key={title} className="border-t border-primary-foreground/30 pt-5"><h3 className="text-2xl font-bold mb-4">{title}</h3><p className="leading-relaxed">{text}</p></div>)}</div></div></section>

          <section className="py-16 lg:py-20" aria-labelledby="reddit-chris-heading"><div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-20"><div><p className="text-sm font-semibold mb-4">YOUR STRATEGY, WITH CHRIS MEFFORD</p><h2 id="reddit-chris-heading" className="text-3xl sm:text-4xl font-bold leading-tight">Connect attention to real business growth.</h2><p className="mt-6 text-muted-foreground leading-relaxed">Chris brings 20 years in marketing, is a best-selling author and ran one of the world's largest websites, with 1.2 billion pages. His focus is helping businesses get found and turning discovery into calls, appointments and inquiries.</p><p className="mt-4 text-muted-foreground leading-relaxed">Start with a conversation about your business, customers and current visibility. Together, we'll look at whether Reddit has a useful role alongside your website, Google Business Profile and AI search strategy. There is no reason to invest in a channel that does not fit.</p><Button asChild size="lg" className="mt-7 h-auto min-h-12 py-4 whitespace-normal"><Link to="/book">Plan my Reddit strategy <ArrowRight aria-hidden="true" /></Link></Button><p className="mt-4"><Link to="/about" className="underline underline-offset-4">More about Chris Mefford</Link></p></div><div className="border-t-2 border-foreground pt-6"><h3 className="text-2xl font-bold mb-6">Useful participation. Clear boundaries.</h3><ul className="space-y-5">{["Respect each subreddit's rules and moderator decisions.", "Disclose business affiliation and get facts approved.", "No fake customers, purchased votes or manufactured endorsements.", "Protect customer privacy and avoid personal medical or unsafe repair advice.", "Report what we can observe; never guarantee rankings or AI recommendations."].map(text => <li key={text} className="flex gap-3 leading-relaxed"><Check className="w-5 h-5 shrink-0 mt-1" aria-hidden="true" />{text}</li>)}</ul></div></div></section>

          <section className="bg-muted border-y border-border py-16 lg:py-20" aria-labelledby="reddit-faq-heading"><div className="container mx-auto px-4 sm:px-6 max-w-5xl"><h2 id="reddit-faq-heading" className="text-3xl sm:text-4xl font-bold mb-8">Reddit marketing questions, answered.</h2><div className="divide-y divide-border">{redditFAQs.map(({ question, answer }) => <details key={question} className="group py-6"><summary className="cursor-pointer flex items-start justify-between gap-5 list-none font-bold text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">{question}<Plus className="h-5 w-5 shrink-0 mt-1 group-open:rotate-45 transition-transform motion-reduce:transition-none" aria-hidden="true" /></summary><p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">{answer}</p></details>)}</div></div></section>

          <section className="py-12" aria-label="Reddit research sources"><div className="container mx-auto px-4 sm:px-6"><details><summary className="cursor-pointer font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">Sources behind this approach</summary><ul className="mt-5 space-y-3 text-sm text-muted-foreground">{redditSources.map(({ label, url }) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{label}</a></li>)}</ul><p className="text-sm text-muted-foreground mt-5 leading-relaxed">These sources document platform relationships and rules—not promised results for any business. Your Best SEO is not affiliated with Reddit, Google or OpenAI.</p></details></div></section>
        </div>
      </main>
      <Footer />
    </div>
  );
}