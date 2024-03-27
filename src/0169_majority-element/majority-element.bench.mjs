import { bench, describe } from "vitest";
import { majorityElement_Mine, majorityElement_FastestLeetCodeSolution } from "./majority-element.mjs";

describe.skip("#0189 - Rotate Array", () => {
  describe("Test Case #01", () => {
    const nums = [3, 2, 3];

    bench("#majorityElement_Mine", () => {
      majorityElement_Mine(nums);
    });

    bench("#majorityElement_FastestLeetCodeSolution", () => {
      majorityElement_FastestLeetCodeSolution(nums);
    });
  });
});
