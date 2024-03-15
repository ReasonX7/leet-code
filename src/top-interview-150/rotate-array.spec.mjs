import { describe, it, expect } from "vitest";
import { rotate, rotateUnshiftPop } from "./rotate-array.mjs";

describe("rotate array", () => {
  it("test case 01", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;

    rotate(nums, k);
    expect(nums).toStrictEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("test case 02", () => {
    const nums = [-1, -100, 3, 99];
    const k = 2;

    rotate(nums, k);
    expect(nums).toStrictEqual([3, 99, -1, -100]);
  });

  it("test case 03", () => {
    const nums = [1];
    const k = 1;

    rotate(nums, k);
    expect(nums).toStrictEqual([1]);
  });

  it("test case 04", () => {
    const nums = [1, 2];
    const k = 3;

    rotate(nums, k);
    expect(nums).toStrictEqual([2, 1]);
  });

  it("test case 05", () => {
    const nums = [1, 2, 3];
    const k = 2;

    rotate(nums, k);
    expect(nums).toStrictEqual([2, 3, 1]);
  });

  it("test case 05", () => {
    const nums = [1, 2, 3];
    const k = 2;

    rotate(nums, k);
    expect(nums).toStrictEqual([2, 3, 1]);
  });

  it("test case 06", () => {
    const nums = [1, 2];
    const k = 5;

    rotate(nums, k);
    expect(nums).toStrictEqual([2, 1]);
  });
});
