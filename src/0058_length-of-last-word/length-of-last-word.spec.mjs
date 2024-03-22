import { describe, expect, it } from "vitest";
import { lengthOfLastWord } from "./length-of-last-word.mjs";

describe("#0058 - Length Of Last Word", () => {
  it("Test Case #01", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });

  it("Test Case #02", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  });

  it("Test Case #03", () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  });
});
