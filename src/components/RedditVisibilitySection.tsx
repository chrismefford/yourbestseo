import { ArrowRight, MessageCircle, Search, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function RedditVisibilitySection() {
  return (
    <section id="reddit-marketing" aria-labelledby="reddit-heading" className="light-surface bg-muted text-foreground border-y border-border py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-sm font-semibold mb-5 flex items-center gap-3"><MessageCircle className="h-5 w-5" aria-hidden="true" />03 / REDDIT & COMMUNITY DISCOVERY</p>
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-20">
          <div>
            <h2 id="reddit-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Your customers are talking.<br /><span className="bg-primary text-primary-foreground px-1">Don't miss Reddit.</span></h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">People use Reddit to compare local businesses, ask honest questions and decide who to trust. Helpful conversations can also become sources that Google and AI search tools discover.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">Our Reddit marketing approach connects community listening, transparent participation and better website answers. For dentists, HVAC companies and contractors, it starts with finding out where you can genuinely help.</p>
            <Button asChild size="lg" className="mt-8 h-auto min-h-12 py-4 whitespace-normal text-center"><Link to="/reddit-marketing">Explore Reddit management for your business <ArrowRight className="shrink-0" aria-hidden="true" /></Link></Button>
          </div>
          <div className="divide-y divide-border">
            {[
              { icon: Search, title: "Listen before you post", text: "Find relevant communities, real customer questions and mentions of your business." },
              { icon: MessageCircle, title: "Bring expertise, not a sales pitch", text: "Contribute useful answers with clear business affiliation and respect for community rules." },
              { icon: ShieldCheck, title: "Build trust you can stand behind", text: "No fake customers or purchased votes. Track conversations, referral visits and inquiries—not manufactured popularity." },
            ].map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4 py-6 first:pt-0"><Icon className="h-6 w-6 shrink-0 mt-1" aria-hidden="true" /><div><h3 className="text-xl font-bold mb-3">{title}</h3><p className="leading-relaxed text-muted-foreground">{text}</p></div></div>)}
          </div>
        </div>
        <p className="mt-10 text-sm text-muted-foreground max-w-3xl leading-relaxed">Reddit is a potential discovery channel, not a shortcut to a guaranteed Google ranking or ChatGPT recommendation.</p>
      </div>
    </section>
  );
}