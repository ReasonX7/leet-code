import { describe, bench } from "vitest";
import {
  mergeSortedArray_Efficient,
  mergeSortedArray_FastestLeetCodeSolution,
  mergeSortedArray_Stupid,
  mergeSortedArray_Overcomplicated,
} from "./merge-sorted-array.mjs";

describe("#0088 - Merge Sorted Array", () => {
  describe("Test Case #01", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;

    bench("mergeSortedArray_Stupid", () => {
      mergeSortedArray_Stupid(nums1, m, nums2, n);
    });

    bench("mergeSortedArray_Overcomplicated", () => {
      mergeSortedArray_Stupid(nums1, m, nums2, n);
    });

    bench("mergeSortedArray_Efficient", () => {
      mergeSortedArray_Efficient(nums1, m, nums2, n);
    });

    bench("mergeSortedArray_FastestLeetCodeSolution", () => {
      mergeSortedArray_FastestLeetCodeSolution(nums1, m, nums2, n);
    });
  });

  describe("Test Case #03", () => {
    const nums1 = [4, 5, 6, 0, 0, 0];
    const m = 3;
    const nums2 = [1, 2, 3];
    const n = 3;

    bench("mergeSortedArray_Stupid", () => {
      mergeSortedArray_Stupid(nums1, m, nums2, n);
    });

    bench("mergeSortedArray_Overcomplicated", () => {
      mergeSortedArray_Stupid(nums1, m, nums2, n);
    });

    bench("mergeSortedArray_Efficient", () => {
      mergeSortedArray_Efficient(nums1, m, nums2, n);
    });

    bench("mergeSortedArray_FastestLeetCodeSolution", () => {
      mergeSortedArray_FastestLeetCodeSolution(nums1, m, nums2, n);
    });
  });

  describe("Test Case #04", () => {
    const nums1 = [0, 0, 3, 0, 0, 0, 0, 0, 0];
    const m = 3;
    const nums2 = [-1, 1, 1, 1, 2, 3];
    const n = 6;

    bench("mergeSortedArray_Stupid", () => {
      mergeSortedArray_Stupid(nums1, m, nums2, n);
    });

    bench("mergeSortedArray_Overcomplicated", () => {
      mergeSortedArray_Stupid(nums1, m, nums2, n);
    });

    bench("mergeSortedArray_Efficient", () => {
      mergeSortedArray_Efficient(nums1, m, nums2, n);
    });

    bench("mergeSortedArray_FastestLeetCodeSolution", () => {
      mergeSortedArray_FastestLeetCodeSolution(nums1, m, nums2, n);
    });
  });
});