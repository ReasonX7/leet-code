import { describe, it, expect } from "vitest";
import { findTheDuplicateNumber } from "./find-the-duplicate-number.mjs";

describe("#0287 - Find The Duplicate Number", () => {
  it("Test Case #01", () => {
    expect(findTheDuplicateNumber([1, 3, 4, 2, 2])).toBe(2);
  });

  it("Test Case #02", () => {
    expect(findTheDuplicateNumber([3, 1, 3, 4, 2])).toBe(3);
  });

  it("Test Case #03", () => {
    expect(findTheDuplicateNumber([3, 3, 3, 3, 3])).toBe(3);
  });

  it("Test Case #04", () => {
    expect(findTheDuplicateNumber([1, 1])).toBe(1);
  });

  it("Test Case #05", () => {
    expect(findTheDuplicateNumber([4, 3, 1, 4, 2])).toBe(4);
  });

  it("Test Case #06", () => {
    expect(findTheDuplicateNumber([1, 3, 4, 2, 1])).toBe(1);
  });

  it("Test Case #07", () => {
    expect(findTheDuplicateNumber([2, 5, 9, 6, 9, 3, 8, 9, 7, 1])).toBe(9);
  });
});