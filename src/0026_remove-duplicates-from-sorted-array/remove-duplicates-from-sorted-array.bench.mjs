import { describe, bench } from "vitest";
import {
  removeDuplicatesFromSortedArray,
  removeDuplicatesFromSortedArray_FastestLeetCodeSolution
} from "./remove-duplicates-from-sorted-array.mjs";

describe.skip("#0026 - Remove Duplicates From Sorted Array", () => {
  describe("Test Case #01", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

    bench("#removeDuplicatesFromSortedArray", () => {
      removeDuplicatesFromSortedArray(nums);
    });

    bench("#removeDuplicatesFromSortedArray_FastestLeetCodeSolution", () => {
      removeDuplicatesFromSortedArray_FastestLeetCodeSolution(nums);
    });
  });
});