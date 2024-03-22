/**
 * # Remove Element
 *
 * Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums`
 * [in-place](https://en.wikipedia.org/wiki/In-place_algorithm).
 * The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.
 *
 * Consider the number of elements in nums which are not equal to `val` be `k`,
 * to get accepted, you need to do the following things:
 *   - Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
 *     The remaining elements of `nums` are not important as well as the size of `nums`.
 *   - Return `k`.
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export const removeElement_Mine = (nums, val) => {
  let d = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = undefined;
      d++;
    } else if (d > 0) {
      nums[i - d] = nums[i];
      nums[i] = undefined;
    }
  }

  return nums.length - d;
};

export const removeElement_FastestLeetCodeSolution = (nums, val) => {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

export const removeElement = removeElement_Mine;
// export const removeElement = removeElement_FastestLeetCodeSolution;
