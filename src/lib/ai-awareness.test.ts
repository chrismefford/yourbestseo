import { describe, expect, test } from "bun:test";
import { awarenessQuestions, buildReviewMessage, getAwarenessResult } from "./ai-awareness";

describe("AI awareness quiz", () => {
  test("covers discovery, prompts, and customer topics", () => {
    expect(awarenessQuestions.slice(0, 3).map(q => q.id)).toEqual(["recommendations", "prompts", "topics"]);
  });
  test("requires every answer before scoring or requesting a review", () => {
    expect(getAwarenessResult([2, 2]).score).toBeNull();
    expect(() => buildReviewMessage({name:"Test",email:"test@example.com",business:"Test",location:"San Diego",website:"",service:"Plumbing"}, [2])).toThrow();
  });
  test("scores all not-yet answers as zero and all yes answers as 100", () => {
    expect(getAwarenessResult([0, 0, 0, 0, 0]).score).toBe(0);
    expect(getAwarenessResult([2, 2, 2, 2, 2]).score).toBe(100);
    expect(getAwarenessResult([2, 1, 0, 2, 1]).score).toBe(60);
  });
  test("includes business and quiz details in the review request", () => {
    const message = buildReviewMessage({name:"Test",email:"test@example.com",business:"Coast Plumbing",location:"San Diego",website:"https://example.com",service:"Leak repair"}, [2,1,0,2,1]);
    expect(message).toContain("Business: Coast Plumbing");
    expect(message).toContain("Main service: Leak repair");
    expect(message).toContain("60/100 (not a measured AI visibility score)");
  });
});