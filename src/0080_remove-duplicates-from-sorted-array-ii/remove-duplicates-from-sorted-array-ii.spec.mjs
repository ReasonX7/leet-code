import { describe, it, expect } from "vitest";
import { removeDuplicatesFromSortedArrayII } from "./remove-duplicates-from-sorted-array-ii.mjs";

describe("#0080 - Remove Duplicates From Sorted Array II", () => {
  it("Test Case #01", () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = removeDuplicatesFromSortedArrayII(nums);

    expect(nums.slice(0, 5)).toEqual([1, 1, 2, 2, 3])
    expect(k).toBe(5);
  });
});