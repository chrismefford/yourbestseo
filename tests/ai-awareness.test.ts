import { describe, expect, test } from "bun:test";
import { awarenessQuestions, buildReviewMessage, getAwarenessResult } from "../src/lib/ai-awareness";

describe("AI awareness quiz", () => {
  test("covers discovery, prompts, and customer topics", () => {
    expect(awarenessQuestions.slice(0, 3).map(q => q.id)).toEqual(["recommendations", "prompts", "topics"]);
  });
  test("requires every answer before scoring or requesting a review", () => {
    expect(getAwarenessResult([2, 2]).score).toBeNull();
    expect(() => buildReviewMessage({name:"Test",email:"test@example.com",website:"x.com"}, [2])).toThrow();
  });
  test("scores all not-yet answers as zero and all yes answers as 100", () => {
    expect(getAwarenessResult([0, 0, 0, 0, 0]).score).toBe(0);
    expect(getAwarenessResult([2, 2, 2, 2, 2]).score).toBe(100);
    expect(getAwarenessResult([2, 1, 0, 2, 1]).score).toBe(60);
  });
  test("scores Not sure the same as Not yet", () => {
    expect(getAwarenessResult([3, 3, 3, 3, 3]).score).toBe(0);
    expect(getAwarenessResult([2, 3, 3, 3, 3]).score).toBe(20);
  });
  test("includes business and quiz details in the review request", () => {
    const message = buildReviewMessage({name:"Test",email:"test@example.com",website:"https://example.com"}, [2,1,0,2,1]);
    expect(message).toContain("Website: https://example.com");
    expect(message).toContain("60/100 (not a measured AI visibility score)");
  });
});