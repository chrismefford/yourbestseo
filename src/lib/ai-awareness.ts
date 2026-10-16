export const awarenessQuestions = [
  { id: "recommendations", title: "Do you know how to get your business found on ChatGPT?", tip: "Start with clear service and location pages, consistent business details, and credible reviews. No one can guarantee an AI recommendation." },
  { id: "prompts", title: "Do you know what a prompt is?", tip: "A prompt is the question or instruction you give an AI tool. Try: ‘Which [service] businesses in [city] should I consider, and why?’" },
  { id: "topics", title: "Do you know which topics customers search for about your business?", tip: "Start with questions about cost, comparisons, local availability, and choosing a provider. Validate demand with customer conversations and search data—not guesses from AI." },
  { id: "visibility", title: "Have you checked what ChatGPT, Perplexity, or Claude says about your business?", tip: "Try several realistic customer questions across AI tools. Note the date, recommendations, and cited sources. Answers can change between searches." },
  { id: "content", title: "Does your website answer the questions customers ask before they call?", tip: "Give direct, useful answers about your services, area, process, and common concerns. Keep information accurate and up to date." },
] as const;

// 0 = Not yet, 1 = Somewhat, 2 = Yes, 3 = Not sure (scores the same as Not yet)
export type AwarenessAnswer = 0 | 1 | 2 | 3;

export function getAwarenessResult(answers: AwarenessAnswer[]) {
  const complete = answers.length === awarenessQuestions.length;
  const score = complete ? Math.round(answers.reduce<number>((sum, value) => sum + (value === 3 ? 0 : value), 0) / (awarenessQuestions.length * 2) * 100) : null;
  return { complete, score, label: score === null ? "Incomplete" : score >= 80 ? "A strong starting point" : score >= 40 ? "You're building awareness" : "Your next opportunity starts here" };
}

export interface ReviewDetails { name: string; email: string; website: string; phone?: string }

export function buildReviewMessage(details: ReviewDetails, answers: AwarenessAnswer[]) {
  const result = getAwarenessResult(answers);
  if (!result.complete) throw new Error("Complete the quiz before requesting a review.");
  const labels = ["Not yet", "Somewhat", "Yes", "Not sure"];
  // The contact email renders HTML; encode user content before handing it off.
  const safe = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  return ["AI AWARENESS CHECKER — PERSONALIZED BUSINESS REVIEW REQUEST", `Name: ${safe(details.name)}`, `Email: ${safe(details.email)}`, `Phone: ${safe(details.phone ?? "") || "Not provided"}`, `Website: ${safe(details.website) || "Not provided"}`, `Self-reported awareness score: ${result.score}/100 (not a measured AI visibility score)`, "", ...awarenessQuestions.map((question, index) => `${question.title} ${labels[answers[index]]}`), "", "The visitor requested an email follow-up about their business's AI visibility, customer prompts, and topic opportunities."].join("\n");
}