import { describe, bench } from "vitest";
import {
  removeDuplicatesFromSortedArrayII_Mine,
  removeDuplicatesFromSortedArrayII_FastestLeetCodeSolution,
} from "./remove-duplicates-from-sorted-array-ii.mjs";

describe.skip("#0080 - Remove Duplicates from Sorted Array II", () => {
  describe("Test Case #01", () => {
    const nums = [1, 1, 1, 2, 2, 3];

    bench("#removeDuplicatesFromSortedArrayII_Mine", () => {
      removeDuplicatesFromSortedArrayII_Mine(nums);
    });

    bench("#removeDuplicatesFromSortedArrayII_FastestLeetCodeSolution", () => {
      removeDuplicatesFromSortedArrayII_FastestLeetCodeSolution(nums);
    });
  });
});