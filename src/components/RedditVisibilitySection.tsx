import { ArrowRight, MessageCircle, Search, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import redditLogo from "@/assets/reddit-logo.svg";

export default function RedditVisibilitySection() {
  return (
    <section id="reddit-marketing" aria-labelledby="reddit-heading" className="light-surface bg-muted text-foreground border-y border-border py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-6 inline-flex items-center rounded-full border border-border bg-background px-5 py-2.5">
          <img src={redditLogo} alt="Reddit" width={250} height={81} loading="lazy" decoding="async" className="h-6 w-auto" />
        </div>
        <p className="text-sm font-semibold mb-5 flex items-center gap-3"><MessageCircle className="h-5 w-5" aria-hidden="true" />03 / REDDIT & COMMUNITY DISCOVERY</p>
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-20">
          <div>
            <h2 id="reddit-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">AI answers don't stop<br />at your website.<br /><span className="bg-primary text-primary-foreground px-1">Neither should you.</span></h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">Reddit is where people compare businesses, ask follow-up questions and share experiences. Those conversations can become sources for AI answers—not just another social feed.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">If relevant conversations never include your business or expertise, you're missing a place customers—and AI search tools—could discover you. We help dentists, HVAC companies and contractors find those openings and contribute something worth reading.</p>
            <Button asChild size="lg" className="mt-8 h-auto min-h-12 py-4 whitespace-normal text-center"><Link to="/reddit-marketing">Explore Reddit management for your business <ArrowRight className="shrink-0" aria-hidden="true" /></Link></Button>
          </div>
          <div className="divide-y divide-border">
            {[
              { icon: Search, title: "Find the conversations you're missing", text: "Look for service questions, local recommendations and competitor mentions in relevant communities." },
              { icon: MessageCircle, title: "Make your expertise part of the answer", text: "Contribute useful, openly affiliated answers where professional participation is welcome." },
              { icon: ShieldCheck, title: "Connect visibility to real inquiries", text: "Track Reddit referrals and observed AI citations separately. No fake customers, purchased votes or manufactured popularity." },
            ].map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4 py-6 first:pt-0"><Icon className="h-6 w-6 shrink-0 mt-1" aria-hidden="true" /><div><h3 className="text-xl font-bold mb-3">{title}</h3><p className="leading-relaxed text-muted-foreground">{text}</p></div></div>)}
          </div>
        </div>
        <p className="mt-10 text-sm text-muted-foreground max-w-3xl leading-relaxed">Reddit is a potential discovery channel, not a shortcut to a guaranteed Google ranking or ChatGPT recommendation.</p>
      </div>
    </section>
  );
}