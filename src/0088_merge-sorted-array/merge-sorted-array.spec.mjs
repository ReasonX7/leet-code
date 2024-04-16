import { describe, it, expect } from "vitest";
import { mergeSortedArray } from "./merge-sorted-array.mjs";

describe("#0088 - Merge Sorted Array", () => {
  it("Test Case #01", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;

    mergeSortedArray(nums1, m, nums2, n);

    expect(nums1).toHaveLength(m + n);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("Test Case #02", () => {
    const nums1 = [2, 0];
    const m = 1;
    const nums2 = [1];
    const n = 1;

    mergeSortedArray(nums1, m, nums2, n);

    expect(nums1).toHaveLength(m + n);
    expect(nums1).toEqual([1, 2]);
  });

  it("Test Case #03", () => {
    const nums1 = [4, 5, 6, 0, 0, 0];
    const m = 3;
    const nums2 = [1, 2, 3];
    const n = 3;

    mergeSortedArray(nums1, m, nums2, n);

    expect(nums1).toHaveLength(m + n);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("Test Case #04", () => {
    const nums1 = [0, 0, 3, 0, 0, 0, 0, 0, 0];
    const m = 3;
    const nums2 = [-1, 1, 1, 1, 2, 3];
    const n = 6;

    mergeSortedArray(nums1, m, nums2, n);

    expect(nums1).toHaveLength(m + n);
    expect(nums1).toEqual([-1, 0, 0, 1, 1, 1, 2, 3, 3]);
  });
});