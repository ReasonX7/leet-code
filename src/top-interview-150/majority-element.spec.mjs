import { describe, expect, it } from "vitest";
import { majorityElement } from "./majority-element.mjs";

describe("majority element", () => {
  it("test case 01", () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  it("test case 02", () => {
    expect(majorityElement([1])).toBe(1);
  });
});
