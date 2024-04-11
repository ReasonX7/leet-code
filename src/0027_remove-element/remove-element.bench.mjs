import { bench, describe } from "vitest";
import { removeElement_Mine, removeElement_FastestLeetCodeSolution } from "./remove-element.mjs";

describe.skip("#0027 - Remove Element", () => {
  describe("Test Case #02", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;

    bench("#removeElement_FastestLeetCodeSolution", () => {
      removeElement_FastestLeetCodeSolution(nums, val);
    });

    bench("#removeElement_Mine", () => {
      removeElement_Mine(nums, val);
    });
  });
})