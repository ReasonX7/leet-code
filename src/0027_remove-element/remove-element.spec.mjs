import { describe, expect, it } from "vitest";
import { removeElement } from "./remove-element.mjs";

describe("#0027 - Remove Element", () => {
  it("Test Case #01", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;

    const k = removeElement(nums, val);

    expect(k).toBe(2);
    expect(nums).toStrictEqual([2, 2, undefined, undefined]);
  });

  it("Test Case #02", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;

    const k = removeElement(nums, val);

    expect(k).toBe(5);
    expect(nums).toStrictEqual([0, 1, 3, 0, 4, undefined, undefined, undefined]);
  });
});
