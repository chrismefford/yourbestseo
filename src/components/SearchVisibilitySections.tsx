import { ArrowRight, Check, MapPin, MessageCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import localBusinesses from "@/assets/local-business-search.jpg";

const aiPriorities = [
  ["Answer the questions that lead to a call.", "Explain what you do, who you help, where you work and what happens next. Build useful answers around real customer concerns—not pages stuffed with keywords."],
  ["Give AI a business it can understand.", "Make your services, service area, experience and contact details clear and consistent across your website and public business profiles. Check whether search tools can actually read your pages."],
  ["Build evidence beyond your own website.", "Strengthen genuine reviews, relevant local listings and credible mentions. Compare answers for selected customer questions over time, keeping the question, location and source so a single answer isn't mistaken for a ranking."],
];

const googlePriorities = [
  { icon: MapPin, title: "Google Maps & Business Profile", text: "Your Google Business Profile—formerly Google My Business—is your storefront in Maps. Accurate categories, services, hours, contact details and genuine reviews help customers understand and choose your business. We work toward stronger local map positions, including the top spot where achievable.", note: "Google says local results depend mainly on relevance, distance and prominence. Nobody can control how far away a searcher is." },
  { icon: Search, title: "Google search & your website", text: "Help the right service pages show up when someone searches for what you offer. We focus on useful service and location content, readable pages, clear internal links and a website Google can find and understand—not hundreds of near-identical city pages.", note: "Then make the visit count: visible phone numbers, a clear reason to choose you and an easy appointment or estimate request." },
];

const industries = [
  { title: "Local dentists", question: "“Which dentist near me helps nervous patients?”", text: "Explain the care you actually offer, your location and what a first appointment involves. Make it easy for a patient to call." },
  { title: "HVAC businesses", question: "“Who repairs air conditioners in my area?”", text: "Show your real repair services, service area and availability. Help a homeowner go from a search to a service request." },
  { title: "Construction & home services", question: "“How do I choose a local remodeling contractor?”", text: "Show relevant projects, your process and verified credentials. Give someone a clear path to request an estimate." },
];

export default function SearchVisibilitySections() {
  return (
    <div className="light-surface bg-background text-foreground">
      <section id="ai-search" aria-labelledby="ai-search-heading" className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 text-sm font-semibold mb-5">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span>01 / AI SEARCH · AEO · LLMs</span>
          </div>
          <h2 id="ai-search-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">Be the business people discover when they ask AI.</h2>
          <p className="text-lg leading-relaxed max-w-3xl mt-6 text-muted-foreground">Your next customer may ask ChatGPT or Claude for help choosing a dentist, finding an HVAC company or comparing local contractors. We help make your business easier to find, understand and consider when those tools search the web.</p>
          <div className="grid lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-20 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">What is answer engine optimization?</h3>
              <p className="leading-relaxed text-muted-foreground">Answer engine optimization (AEO) means making your expertise and business information useful to tools that give answers, not just lists of links. Large language models (LLMs) power tools such as ChatGPT and Claude; their web-search features can draw on public pages and cite sources.</p>
              <p className="leading-relaxed text-muted-foreground mt-4">This is not a replacement for SEO. It connects clear website content, local credibility and search accessibility with the questions customers ask before they buy.</p>
              <p className="mt-6 border-l-4 border-primary pl-5 font-medium leading-relaxed">The goal isn't just an AI mention. It's a qualified customer who understands why to choose you—and knows how to reach you.</p>
            </div>
            <div className="divide-y divide-border">
              {aiPriorities.map(([title, text]) => (
                <div key={title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <Check className="h-6 w-6 shrink-0 text-foreground mt-1" aria-hidden="true" />
                  <div><h3 className="text-xl font-bold mb-2">{title}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mt-10 max-w-4xl">No one can guarantee a ChatGPT or Claude recommendation. Answers vary by question, location and whether web search is used. A search-ready website is not proof that an AI tool currently recommends your business.</p>
        </div>
      </section>

      <section id="google-search" aria-labelledby="google-search-heading" className="py-20 lg:py-24 bg-muted border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold mb-5">02 / GOOGLE SEARCH & GOOGLE MAPS</p>
          <h2 id="google-search-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">Show up where local customers are ready to act.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mt-6">A search for “dentist near me” or “AC repair” is different from a casual website visit. We help you compete for those high-intent searches across Google Maps and Google's regular search results, then turn discovery into calls, appointments and estimate requests.</p>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mt-12">
            {googlePriorities.map(({ icon: Icon, title, text, note }) => (
              <div key={title} className="border-t-2 border-foreground pt-6">
                <Icon className="h-7 w-7 mb-5" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
                <p className="mt-4 leading-relaxed font-medium">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mt-10">Google's guidance says the same SEO foundations apply to AI Overviews and AI Mode. There is no special AI markup or secret submission that guarantees inclusion—or a number-one ranking.</p>
        </div>
      </section>

      <section aria-labelledby="local-business-heading" className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold mb-5">LOCAL BUSINESS. REAL CUSTOMER QUESTIONS.</p>
          <h2 id="local-business-heading" className="text-3xl sm:text-4xl font-bold max-w-3xl leading-tight">Built for the businesses people need close to home.</h2>
          <img src={localBusinesses} alt="A dentist, an HVAC technician and a construction contractor at work" width={1536} height={640} loading="lazy" className="w-full aspect-[12/5] object-cover mt-10 rounded-lg" />
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {industries.map(({ title, question, text }) => (
              <div key={title} className="border-t border-border pt-6">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="font-medium mt-3 leading-relaxed">{question}</p>
                <p className="text-muted-foreground mt-3 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-5">Illustrative customer questions—not measured search volumes or client results.</p>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center border-t border-border mt-12 pt-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why work with Chris Mefford?</h3>
              <p className="text-muted-foreground leading-relaxed">Chris brings 20 years in marketing, is a best-selling author and ran one of the world's largest websites, with 1.2 billion pages. His focus is getting businesses found and turning that attention into action.</p>
              <p className="text-muted-foreground leading-relaxed mt-4">Get a practical plan that joins Google Maps, Google search, AI discovery and website conversions. Current research and AI-assisted analysis support the work; clear priorities and real business outcomes guide it. No jargon-heavy report left for you to figure out alone.</p>
            </div>
            <div className="lg:justify-self-end">
              <Button asChild size="lg" className="h-auto min-h-12 py-4 whitespace-normal text-center w-full sm:w-auto"><Link to="/book">Go over my free audit results <ArrowRight aria-hidden="true" /></Link></Button>
              <Button asChild variant="link" className="mt-3 block h-auto text-center"><Link to="/about">Meet Chris Mefford</Link></Button>
            </div>
          </div>
          <details className="mt-12 border-t border-border pt-5 text-sm text-muted-foreground">
            <summary className="cursor-pointer font-medium text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">Research behind this approach</summary>
            <ul className="mt-4 space-y-3 leading-relaxed">
              <li><a className="underline underline-offset-4" href="https://support.google.com/business/answer/7091" target="_blank" rel="noopener noreferrer">Google: how local ranking works</a> — relevance, distance and prominence.</li>
              <li><a className="underline underline-offset-4" href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">Google Search Central: AI features and your website</a> — established SEO practices, not special AI markup.</li>
              <li><a className="underline underline-offset-4" href="https://platform.openai.com/docs/bots" target="_blank" rel="noopener noreferrer">OpenAI: search crawlers</a> — search access and model-training access are different controls.</li>
              <li><a className="underline underline-offset-4" href="https://www.anthropic.com/news/web-search" target="_blank" rel="noopener noreferrer">Anthropic: Claude web search</a> — web answers can include source citations.</li>
            </ul>
          </details>
        </div>
      </section>
    </div>
  );
}