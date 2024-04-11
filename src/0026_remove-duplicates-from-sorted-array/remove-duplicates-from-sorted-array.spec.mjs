import { describe, it, expect } from "vitest";
import { removeDuplicatesFromSortedArray } from "./remove-duplicates-from-sorted-array.mjs";

describe("#0026 - Remove Duplicates From Sorted Array", () => {
  it("Test Case #01", () => {
    const nums = [1, 1, 2];

    expect(removeDuplicatesFromSortedArray(nums)).toBe(2);
    expect(nums.slice(0, 2)).toEqual([1, 2]);
  });

  it("Test Case #02", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

    expect(removeDuplicatesFromSortedArray(nums)).toBe(5);
    expect(nums.slice(0, 5)).toEqual([0, 1, 2, 3, 4]);
  });

  it("Test Case #03", () => {
    const nums = [1, 2];

    expect(removeDuplicatesFromSortedArray(nums)).toBe(2);
    expect(nums).toEqual([1, 2]);
  });
});