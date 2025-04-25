import { describe, bench } from "vitest";
import {
  findTheDuplicateNumber_KindaFloydButReallyNot,
  findTheDuplicateNumber_HashMap,
  findTheDuplicateNumber_LeetCodeFastestSolution,
  findTheDuplicateNumber_Floyd,
  findTheDuplicateNumber_Unknown,
} from "./find-the-duplicate-number.mjs";

describe.skip("#0287 - Find The Duplicate Number", () => {
  describe("Test Case #01", () => {
    const nums = [1, 3, 4, 2, 2];

    bench("#findTheDuplicateNumber_HashMap", () => {
      findTheDuplicateNumber_HashMap(nums);
    });

    bench("#findTheDuplicateNumber_LeetCodeFastestSolution", () => {
      findTheDuplicateNumber_LeetCodeFastestSolution(nums);
    });

    bench("#findTheDuplicateNumber_KindaFloydButReallyNot", () => {
      findTheDuplicateNumber_KindaFloydButReallyNot(nums);
    });

    bench("#findTheDuplicateNumber_Floyd", () => {
      findTheDuplicateNumber_Floyd(nums);
    });

    bench("#findTheDuplicateNumber_Unknown", () => {
      findTheDuplicateNumber_Unknown(nums);
    });
  });

  describe("Test Case #02", () => {
    const nums = [3, 1, 3, 4, 2];

    bench("#findTheDuplicateNumber_HashMap", () => {
      findTheDuplicateNumber_HashMap(nums);
    });

    bench("#findTheDuplicateNumber_LeetCodeFastestSolution", () => {
      findTheDuplicateNumber_LeetCodeFastestSolution(nums);
    });

    // bench("#findTheDuplicateNumber_KindaFloydButReallyNot", () => {
    //   findTheDuplicateNumber_KindaFloydButReallyNot(nums);
    // });

    bench("#findTheDuplicateNumber_Floyd", () => {
      findTheDuplicateNumber_Floyd(nums);
    });

    bench("#findTheDuplicateNumber_Unknown", () => {
      findTheDuplicateNumber_Unknown(nums);
    });
  });

  describe("Test Case #03", () => {
    const nums = [3, 3, 3, 3, 3];

    bench("#findTheDuplicateNumber_HashMap", () => {
      findTheDuplicateNumber_HashMap(nums);
    });

    bench("#findTheDuplicateNumber_LeetCodeFastestSolution", () => {
      findTheDuplicateNumber_LeetCodeFastestSolution(nums);
    });

    bench("#findTheDuplicateNumber_KindaFloydButReallyNot", () => {
      findTheDuplicateNumber_KindaFloydButReallyNot(nums);
    });

    bench("#findTheDuplicateNumber_Floyd", () => {
      findTheDuplicateNumber_Floyd(nums);
    });

    bench("#findTheDuplicateNumber_Unknown", () => {
      findTheDuplicateNumber_Unknown(nums);
    });
  });

  describe("Test Case #07", () => {
    const nums = [2, 5, 9, 6, 9, 3, 8, 9, 7, 1];

    bench("#findTheDuplicateNumber_HashMap", () => {
      findTheDuplicateNumber_HashMap(nums);
    });

    bench("#findTheDuplicateNumber_LeetCodeFastestSolution", () => {
      findTheDuplicateNumber_LeetCodeFastestSolution(nums);
    });

    bench("#findTheDuplicateNumber_KindaFloydButReallyNot", () => {
      findTheDuplicateNumber_KindaFloydButReallyNot(nums);
    });

    bench("#findTheDuplicateNumber_Floyd", () => {
      findTheDuplicateNumber_Floyd(nums);
    });

    bench("#findTheDuplicateNumber_Unknown", () => {
      findTheDuplicateNumber_Unknown(nums);
    });
  });
});