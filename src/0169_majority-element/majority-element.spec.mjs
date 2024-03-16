import { describe, expect, it } from "vitest";
import { majorityElement } from "./majority-element.mjs";

describe("majority element", () => {
  it("Test Case #01", () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  it("Test Case #02", () => {
    expect(majorityElement([1])).toBe(1);
  });
});
