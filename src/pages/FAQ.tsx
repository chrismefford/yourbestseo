import { motion } from "framer-motion";
import { ArrowRight, Search, Clock, DollarSign, Shield, BarChart3, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO, generateFAQSchema, generateBreadcrumbSchema } from "@/components/SEO";

const faqCategories = [
  {
    icon: Search,
    title: "SEO Basics",
    description: "Understanding how SEO works",
    faqs: [
      {
        question: "What is SEO and why does my business need it?",
        answer: "SEO (Search Engine Optimization) is the process of improving your website's visibility in search engine results. When potential customers search for products or services you offer, SEO helps ensure they find YOU instead of your competitors. With 93% of online experiences starting with a search engine, not investing in SEO means leaving money on the table. SEO drives sustainable, long-term growth by connecting you with customers actively searching for what you offer."
      },
      {
        question: "What's the difference between SEO and paid ads?",
        answer: "Paid ads (PPC) give you instant visibility but stop the moment you stop paying. SEO builds lasting organic traffic that continues even when you pause investment. Think of PPC as renting traffic and SEO as owning it. The best strategies often combine both, using PPC for immediate results while SEO builds long-term dominance. Over time, SEO typically provides a much higher ROI because you're building equity rather than paying per click."
      },
      {
        question: "What are keywords and why do they matter?",
        answer: "Keywords are the words and phrases people type into search engines. They matter because ranking for the right keywords means showing up when your ideal customers are actively looking for what you offer. We focus on keywords that signal buying intent—not just traffic, but traffic that converts. Effective keyword research identifies terms with the right balance of search volume, competition, and commercial intent."
      },
      {
        question: "What's local SEO vs. regular SEO?",
        answer: "Local SEO focuses on visibility for location-based searches (like 'dentist near me' or 'plumber in San Diego'). It involves optimizing your Google Business Profile, building local citations, and targeting geo-specific keywords. If you serve customers in a specific area, local SEO is essential for capturing nearby searchers. Regular SEO focuses on broader, non-geographic rankings and is ideal for businesses that serve customers regardless of location."
      },
      {
        question: "What is organic traffic and why is it valuable?",
        answer: "Organic traffic refers to visitors who find your website through unpaid search results. It's valuable because these users are actively searching for what you offer—they have intent. Unlike paid traffic, organic traffic is 'free' once you've earned the ranking, making it incredibly cost-effective over time. Studies show organic traffic typically converts at higher rates than most other traffic sources because users trust organic results more than ads."
      },
      {
        question: "What is a search engine algorithm?",
        answer: "A search engine algorithm is the complex set of rules and calculations that determines which websites appear in search results and in what order. Google's algorithm considers over 200 factors including relevance, authority, user experience, and content quality. Understanding these factors—and optimizing for them—is the core of SEO. Algorithms are constantly updated, which is why ongoing SEO work is necessary to maintain and improve rankings."
      },
    ],
  },
  {
    icon: Clock,
    title: "Timeline & Results",
    description: "What to expect and when",
    faqs: [
      {
        question: "How long does SEO take to work?",
        answer: "Honest answer: SEO is not instant. Most clients see meaningful improvements within 3-6 months, with significant results in 6-12 months. However, this varies based on your starting point, competition, and the aggressiveness of your strategy. We often see quick wins in the first 30-60 days that build momentum while we work toward lasting dominance. Local SEO typically shows results faster than competitive national keywords."
      },
      {
        question: "Can you guarantee first-page rankings?",
        answer: "No legitimate SEO agency can guarantee specific rankings—Google's algorithm considers 200+ factors, and we don't control Google. What we CAN guarantee is that we'll use proven strategies, provide complete transparency, and work relentlessly toward measurable improvements. Our track record speaks for itself. Be wary of any agency that promises guaranteed rankings—it's either a lie or they're using tactics that could get your site penalized."
      },
      {
        question: "Why do some competitors rank higher than me?",
        answer: "Usually it's a combination of factors: they've been doing SEO longer, have more backlinks, have more content, or have better technical SEO. The good news? All of these can be addressed. Our competitor analysis service identifies exactly what they're doing and how to overtake them. Often, competitors have accumulated authority over years, but with the right strategy, you can close the gap faster than you might think."
      },
      {
        question: "How do you measure SEO success?",
        answer: "We focus on metrics that matter to your business: organic traffic growth, keyword ranking improvements, leads or sales generated, and ultimately ROI. You'll receive detailed monthly reports showing exactly how your investment is performing. No vanity metrics—just real business impact. We also track engagement metrics like time on site and pages per session to ensure we're attracting qualified traffic that converts."
      },
      {
        question: "What happens after I achieve good rankings?",
        answer: "SEO is an ongoing process, not a one-time project. Once you achieve strong rankings, the focus shifts to maintaining those positions, expanding into new keyword opportunities, and staying ahead of algorithm updates and competitor moves. Your competitors are always working to outrank you, so ongoing optimization is essential to protect your investment and continue growing."
      },
      {
        question: "What if my rankings drop suddenly?",
        answer: "Ranking drops happen for various reasons: algorithm updates, technical issues, competitor gains, or content becoming outdated. We monitor rankings continuously and investigate any significant drops immediately. Most drops can be recovered by identifying and addressing the root cause. Our proactive approach means we often catch and fix issues before they significantly impact your traffic."
      },
    ],
  },
  {
    icon: DollarSign,
    title: "Pricing & Value",
    description: "Investment and ROI questions",
    faqs: [
      {
        question: "How much does SEO cost?",
        answer: "Our à la carte services are $300 each, and monthly retainers for comprehensive SEO typically range from $400-$1,900/month depending on your goals and competition level. We offer packages for every budget because we believe great SEO shouldn't be exclusive to enterprise companies. The right investment level depends on your market, competition, and growth goals."
      },
      {
        question: "Is SEO worth the investment?",
        answer: "For most businesses, absolutely. Consider: the average cost-per-click for paid ads in competitive industries is $5-50+. Organic traffic from SEO is essentially free once you're ranking. A single client from SEO could pay for months of investment. Our case studies show ROI often exceeding 1000%. Unlike paid ads that stop when you stop paying, SEO builds lasting equity in your online presence."
      },
      {
        question: "What's included in your services?",
        answer: "Every service is clearly defined with specific deliverables. You'll know exactly what you're getting before you pay. No hidden fees, no vague promises. Check individual service pages for complete details, or contact us for a custom package that fits your needs. Our packages include strategy, implementation, reporting, and ongoing optimization—everything you need for success."
      },
      {
        question: "Do you offer refunds?",
        answer: "Due to the nature of SEO work (we begin implementing immediately), we don't offer refunds on completed work. However, we do offer satisfaction guarantees on specific deliverables. If we don't deliver what we promised, we'll make it right or refund that portion. Our high client retention rate speaks to the value we consistently deliver."
      },
      {
        question: "Can I pause my SEO campaign and restart later?",
        answer: "Yes, but we recommend against it for most clients. SEO momentum is valuable—pausing means competitors gain ground while your rankings potentially decline. When you restart, you're often rebuilding rather than advancing. If budget is a concern, we can discuss scaling down temporarily rather than stopping completely to maintain core progress."
      },
      {
        question: "What if I don't see results—can I cancel?",
        answer: "We don't lock clients into long-term contracts. After the initial 6-month period (recommended to see meaningful results), you can cancel with 30 days notice. That said, our client retention rate is over 90% because we deliver real value. If you're not seeing results, we'll work with you to understand why and adjust the strategy accordingly."
      },
    ],
  },
  {
    icon: Shield,
    title: "Safety & Trust",
    description: "Protecting your website",
    faqs: [
      {
        question: "Is your SEO safe? Will I get penalized?",
        answer: "100% safe. We use only white-hat, Google-approved techniques. No black-hat tactics, no PBNs, no spammy link schemes. We've never had a client penalized. Your website's reputation and long-term success are always our top priority. Every strategy we implement is designed to build sustainable authority that withstands algorithm updates."
      },
      {
        question: "Do you need access to my website?",
        answer: "For most services, yes—we'll need some level of access to implement optimizations. We treat your website with the same care we'd treat our own. All access credentials are secured, and we can work with any NDA or security requirements you have. We use industry-standard security practices and can provide documentation of our protocols upon request."
      },
      {
        question: "What if something goes wrong?",
        answer: "We maintain detailed records of every change we make, so anything can be reversed if needed. That said, in 15+ years, we've never had a situation where our work harmed a client's site. We're careful, methodical, and always prioritize your site's health. Before making significant changes, we create backups and test in staging environments when possible."
      },
      {
        question: "How do I know you're legitimate?",
        answer: "Check our case studies—real clients, real websites, verified results. Read our reviews. We're transparent about our methods and happy to explain anything we do. If an agency is evasive about their techniques, that's a red flag. We're an open book. We can also provide references from current clients in similar industries upon request."
      },
      {
        question: "What data do you collect and how is it protected?",
        answer: "We collect only the data necessary to perform our services effectively—analytics, ranking data, competitor research, and website access credentials. All data is stored securely with encryption, access is limited to team members working on your account, and we never share or sell your information. We comply with GDPR and CCPA regulations."
      },
    ],
  },
  {
    icon: BarChart3,
    title: "Working Together",
    description: "How the partnership works",
    faqs: [
      {
        question: "How much of my time is required?",
        answer: "Minimal. After an initial discovery call (30-60 minutes), most clients spend 1-2 hours per month reviewing reports and providing feedback. We handle the heavy lifting—that's what you're paying us for. We'll reach out when we need input, but we won't waste your time. The more responsive you can be when we do need input, the faster we can move."
      },
      {
        question: "Do I need to sign a long-term contract?",
        answer: "For one-time services, no contract beyond the project scope. For monthly retainers, we typically recommend a 6-month minimum to see real results, but we offer flexible terms. We'd rather earn your business month after month than lock you into something that doesn't work. After the initial period, you can continue month-to-month."
      },
      {
        question: "Who will I be working with?",
        answer: "You'll have a dedicated strategist who knows your business and is your direct point of contact. No call centers, no getting passed around. Your strategist is supported by our full team of specialists (technical SEO, content, link building) but you always have one person who owns your success and is accountable for results."
      },
      {
        question: "How often will we communicate?",
        answer: "As often as you'd like. Monthly reports and check-ins are standard. Many clients prefer weekly updates, especially in the early months. We're responsive via email, available for calls, and use project management tools so you always know what's happening. We adapt our communication style to your preferences."
      },
      {
        question: "What do you need from me to get started?",
        answer: "Getting started is simple: website access credentials (CMS, Google Analytics, Search Console), basic business information, and your goals. We'll guide you through everything during onboarding. Most clients can provide what we need within a day. The faster we get access, the faster we can start driving results."
      },
      {
        question: "Can you work with my existing marketing team?",
        answer: "Absolutely. We integrate seamlessly with in-house teams, other agencies, and freelancers. Clear communication and defined roles ensure everyone works efficiently toward the same goals. We're collaborative, not territorial. Many of our best results come from partnerships where we bring SEO expertise while your team handles content creation or development."
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const FAQ = () => {
  // Collect all FAQs for schema
  const allFaqs = faqCategories.flatMap(category => category.faqs);
  const faqSchema = generateFAQSchema(allFaqs);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Frequently Asked Questions"
        description="Everything you need to know about SEO and working with Your Best SEO. Learn about our process, pricing, timeline, and what to expect."
        canonical="/faq"
        schema={[faqSchema, breadcrumbSchema]}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="badge-outline mb-6 inline-block">Got Questions?</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about SEO and working with us. 
              Can't find what you're looking for? Just ask.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-8 border-y border-border/50 sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category, index) => (
              <a
                key={index}
                href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary text-sm transition-colors"
              >
                <category.icon className="w-4 h-4 text-primary" />
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                id={category.title.toLowerCase().replace(/\s+/g, '-')}
                className="scroll-mt-40"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold">{category.title}</h2>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border/50 rounded-xl px-6 data-[state=open]:bg-secondary/20"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're here to help. Get in touch and we'll get back to you within 24 hours 
              with a personalized answer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-audit" className="gap-2">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:chris@yourbestseo.com">Email Us Directly</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;