/**
 * Per-guide readiness scorecards — the conversion funnel on every guide page.
 *
 * Each guide gets three quick self-check questions tailored to its topic.
 * Answers score 0–2; the total (0–6) maps to one of four result tiers.
 * The result is framed as a diagnosis from the visitor's own answers and
 * always bridges into the free audit call. Never claim measured data.
 */

export interface ScorecardOption {
  label: string;
  score: 0 | 1 | 2;
}

export interface ScorecardQuestion {
  question: string;
  options: ScorecardOption[];
}

export interface GuideScorecard {
  /** Three questions, three options each. */
  questions: ScorecardQuestion[];
  /** Result line per tier: 0–1, 2–3, 4–5, 6. */
  results: [string, string, string, string];
}

export const SCORECARD_TIERS = ["At the starting line", "Getting there", "Nearly ready", "In good shape"] as const;

export const tierForScore = (score: number): number => Math.min(3, Math.floor(score / 2));

export const GUIDE_SCORECARDS: Record<string, GuideScorecard> = {
  "business-not-showing-on-google": {
    questions: [
      {
        question: "When you search your business name on Google, what do you see?",
        options: [
          { label: "My website, as the first result", score: 2 },
          { label: "My site, but far down or hard to find", score: 1 },
          { label: "Someone else's site, or nothing about me", score: 0 },
        ],
      },
      {
        question: "How complete is your Google Business Profile?",
        options: [
          { label: "Verified, fully filled out, with photos and recent reviews", score: 2 },
          { label: "Claimed, but mostly empty", score: 1 },
          { label: "Not sure I even have one", score: 0 },
        ],
      },
      {
        question: "When did you last change something on your site to help it rank?",
        options: [
          { label: "In the last month, as part of a plan", score: 2 },
          { label: "A while ago, just here and there", score: 1 },
          { label: "Never — I don't know what to change", score: 0 },
        ],
      },
    ],
    results: [
      "Right now Google can barely see your business — and that's the most fixable problem there is.",
      "You're partway there. The foundation exists, but Google is finding gaps that push you down the page.",
      "Most of the pieces are in place. What's left is finding the handful of things actually holding you back.",
      "You've done the fundamentals. At this point, real progress comes from a fresh set of eyes on the details.",
    ],
  },

  "get-customers-without-google-ads": {
    questions: [
      {
        question: "How do most of your new customers find you today?",
        options: [
          { label: "Search results or referrals — a steady flow", score: 2 },
          { label: "Word of mouth, but it's slowing down", score: 1 },
          { label: "Paid ads, and I want off the treadmill", score: 0 },
        ],
      },
      {
        question: "If your ad budget went to zero tomorrow, what happens?",
        options: [
          { label: "The phone still rings — we'd be fine", score: 2 },
          { label: "Some drop-off, but we'd survive", score: 1 },
          { label: "Customers dry up within a few weeks", score: 0 },
        ],
      },
      {
        question: "Do you know which pages on your website bring in calls?",
        options: [
          { label: "Yes, I track it", score: 2 },
          { label: "Roughly", score: 1 },
          { label: "No idea", score: 0 },
        ],
      },
    ],
    results: [
      "Your business leans on ads more than it should — the month you pause, the phone goes quiet.",
      "You've got some organic pull, but not enough to get off the ad treadmill yet.",
      "Customers already find you without ads — now it's about making that flow bigger and steadier.",
      "You've built the durable channel most businesses wish they had. Next is scaling it deliberately.",
    ],
  },

  "get-business-recommended-by-chatgpt": {
    questions: [
      {
        question: "Have you ever asked ChatGPT or an AI assistant about your industry in your city?",
        options: [
          { label: "Yes, and we came up in the answer", score: 2 },
          { label: "Yes, and we didn't come up", score: 1 },
          { label: "Never tried", score: 0 },
        ],
      },
      {
        question: "How consistent is your business information across Google, Yelp, and directories?",
        options: [
          { label: "Identical everywhere — name, hours, phone", score: 2 },
          { label: "Close, but some details drift", score: 1 },
          { label: "Not sure it matches at all", score: 0 },
        ],
      },
      {
        question: "Does your website clearly answer the questions customers actually ask?",
        options: [
          { label: "Yes, in plain language", score: 2 },
          { label: "Partly — it's more of a brochure", score: 1 },
          { label: "No, it mostly just lists services", score: 0 },
        ],
      },
    ],
    results: [
      "AI assistants are answering questions about your industry right now — and your name isn't in the answer.",
      "AI tools can find you, but thin answers and drifting details give them reasons to recommend someone else.",
      "You're close to being a source AI assistants trust — a few content gaps are keeping you out of the top picks.",
      "You're well positioned for AI search. Now the game is staying the most-cited answer in your market.",
    ],
  },

  "google-business-profile-checklist": {
    questions: [
      {
        question: "Is your Google Business Profile verified and fully filled out?",
        options: [
          { label: "Verified, complete, and looking sharp", score: 2 },
          { label: "Verified, but half empty", score: 1 },
          { label: "Not claimed, or I'm not sure", score: 0 },
        ],
      },
      {
        question: "How many new reviews did you get in the last 30 days?",
        options: [
          { label: "Five or more", score: 2 },
          { label: "One or two", score: 1 },
          { label: "None", score: 0 },
        ],
      },
      {
        question: "Do you post updates, photos, or answer questions on your profile?",
        options: [
          { label: "Regularly", score: 2 },
          { label: "Occasionally", score: 1 },
          { label: "Never", score: 0 },
        ],
      },
    ],
    results: [
      "Your Google Business Profile is your storefront on Maps — and right now it's mostly shut.",
      "The profile exists, but half-empty and quiet profiles lose to complete, active ones every time.",
      "Your profile is solid. The last few items on the checklist are where the rankings actually move.",
      "Your profile is doing its job. Time to point it at more of the right searches.",
    ],
  },

  "how-much-does-seo-cost": {
    questions: [
      {
        question: "What's your current monthly marketing spend?",
        options: [
          { label: "Under $500", score: 2 },
          { label: "$500 to $2,000", score: 1 },
          { label: "$2,000 or more", score: 0 },
        ],
      },
      {
        question: "What's one new customer worth to you over a year?",
        options: [
          { label: "$2,000 or more", score: 2 },
          { label: "$500 to $2,000", score: 1 },
          { label: "Under $500", score: 0 },
        ],
      },
      {
        question: "Could you tell me your cost per new customer today?",
        options: [
          { label: "Yes, I know the number", score: 2 },
          { label: "Roughly", score: 1 },
          { label: "No", score: 0 },
        ],
      },
    ],
    results: [
      "At your customer value, cheap SEO is the expensive option — the math only works with the right strategy.",
      "The budget is in a workable range, but without knowing your cost per customer, it's still a guess.",
      "You can afford to do this properly — the real question is whether you're buying the right work.",
      "You have the budget and the economics to win. Now it's about spending it where it compounds.",
    ],
  },

  "seo-vs-google-ads": {
    questions: [
      {
        question: "How much of your new business comes from ads right now?",
        options: [
          { label: "Almost none", score: 2 },
          { label: "About half", score: 1 },
          { label: "Almost all of it", score: 0 },
        ],
      },
      {
        question: "What's your monthly ad budget?",
        options: [
          { label: "Under $1,000", score: 2 },
          { label: "$1,000 to $3,000", score: 1 },
          { label: "$3,000 or more", score: 0 },
        ],
      },
      {
        question: "How long do you plan to run this business?",
        options: [
          { label: "10+ years", score: 2 },
          { label: "5 to 10 years", score: 1 },
          { label: "Not sure", score: 0 },
        ],
      },
    ],
    results: [
      "Almost everything rides on ads right now. The day you stop paying is the day the leads stop.",
      "You're splitting between ads and organic, but neither channel is carrying the load yet.",
      "You've got organic working — now it's about balancing the two channels instead of guessing.",
      "You've built the mix most businesses want: steady organic with ads on top. Next is tuning the split.",
    ],
  },

  "how-to-get-more-google-reviews": {
    questions: [
      {
        question: "Do you ask every happy customer for a review?",
        options: [
          { label: "Yes, every time", score: 2 },
          { label: "Sometimes", score: 1 },
          { label: "Never", score: 0 },
        ],
      },
      {
        question: "Do you have a system for getting reviews, or is it random?",
        options: [
          { label: "A repeatable system", score: 2 },
          { label: "Informal — we wing it", score: 1 },
          { label: "None at all", score: 0 },
        ],
      },
      {
        question: "Do you respond to your reviews?",
        options: [
          { label: "All of them", score: 2 },
          { label: "Just the bad ones", score: 1 },
          { label: "No", score: 0 },
        ],
      },
    ],
    results: [
      "Reviews are the cheapest customers you'll ever get — and right now you're leaving nearly all of them on the table.",
      "You get some reviews, but without a system you're collecting a fraction of what happy customers would gladly give.",
      "Your review engine works. The next win is volume and velocity — more reviews, and more recent ones.",
      "Your review game is strong. Now it's about converting that trust into rankings and phone calls.",
    ],
  },

  "how-long-does-seo-take": {
    questions: [
      {
        question: "When did your website last get a real update?",
        options: [
          { label: "In the last three months", score: 2 },
          { label: "Sometime this year", score: 1 },
          { label: "Over a year ago, or never", score: 0 },
        ],
      },
      {
        question: "Do you know your current Google ranking for your main service?",
        options: [
          { label: "Yes, I check it", score: 2 },
          { label: "Roughly", score: 1 },
          { label: "No", score: 0 },
        ],
      },
      {
        question: "Are you willing to commit to steady monthly work for 6 to 12 months?",
        options: [
          { label: "Yes", score: 2 },
          { label: "Maybe", score: 1 },
          { label: "I need results faster than that", score: 0 },
        ],
      },
    ],
    results: [
      "Your site hasn't moved in a long time — which means low-hanging fruit, but also a real gap to close.",
      "You're active, but without tracking you can't tell what's working or how fast it's working.",
      "You've got the ingredients for momentum. What you need is a realistic timeline and someone watching the numbers.",
      "You're set up to see movement fast. The conversation now is about months 3 through 12.",
    ],
  },

  "seo-scams": {
    questions: [
      {
        question: "Has an agency ever promised you a page-one or #1 ranking?",
        options: [
          { label: "Yes, more than once", score: 0 },
          { label: "Once", score: 1 },
          { label: "Never", score: 2 },
        ],
      },
      {
        question: "Do you know exactly what your current provider does each month?",
        options: [
          { label: "Yes, I can see the work", score: 2 },
          { label: "Vaguely", score: 1 },
          { label: "No — I just pay the invoice", score: 0 },
        ],
      },
      {
        question: "How long are the contracts you've been offered?",
        options: [
          { label: "Month to month", score: 2 },
          { label: "Three to six months", score: 1 },
          { label: "Twelve months or more", score: 0 },
        ],
      },
    ],
    results: [
      "You've been burned, or you're in a contract you don't fully understand — exactly why you shouldn't have to trust anyone blindly.",
      "You've got doubts about what you're paying for, and those doubts are usually right.",
      "You're asking the right questions. The next step is getting straight answers about your actual site.",
      "You know how to spot the games. Now spend that judgment on a strategy that actually works.",
    ],
  },

  "local-seo-checklist": {
    questions: [
      {
        question: "When someone searches for your service \"near me,\" do you appear?",
        options: [
          { label: "In the top results", score: 2 },
          { label: "Somewhere, but deep down", score: 1 },
          { label: "No", score: 0 },
        ],
      },
      {
        question: "Are the three foundations done — Google profile, reviews, and service pages?",
        options: [
          { label: "All three", score: 2 },
          { label: "One or two of them", score: 1 },
          { label: "None of them", score: 0 },
        ],
      },
      {
        question: "Do you check how you look in Google and AI results each month?",
        options: [
          { label: "Monthly, and I keep notes", score: 2 },
          { label: "Occasionally", score: 1 },
          { label: "Never", score: 0 },
        ],
      },
    ],
    results: [
      "The three foundations aren't in place yet — which is honestly good news, because that's where the fastest wins are.",
      "You've got part of the foundation. The rest is knowable and fixable, usually faster than people expect.",
      "You're close to a complete local presence. The gaps left are specific — and worth finding before your competitors do.",
      "You've checked every box on the list. The next level is strategy, not tasks.",
    ],
  },
};
