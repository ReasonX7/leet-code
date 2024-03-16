const reverse = (arr, start, end) => {
  arr.splice(start, end, ...arr.slice(start, end).reverse());
}

/**
 * # Rotate Array
 *
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 *
 * Constraints:
 *   - `1 <= length <= 10^5`
 *   - `-231 <= nums[i] <= 231 - 1`
 *   - `0 <= k <= 10^5`
 *
 * Links:
 *   - [LeetCode Challenge](https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150).
 *
 * @param nums {number[]}
 * @param k {number}
 * @returns {void}
 */
export const rotatePushSplice = (nums, k) => {
  // Split the nums array into two. The nums array will mutate,
  // leaving the numbers that should be at the start.
  // The numbers that should be moved to the end of the array
  // will be reapplied using the push method.
  nums.push(...nums.splice(0, nums.length - k % nums.length));
};

export const rotateUsingReversalAlgorithm = (nums, k) => {
  const length = nums.length;

  while (k > length) {
    k -= length;
  }

  reverse(nums, 0, length - k);
  reverse(nums, length - k, length);
  reverse(nums, 0, length);
};

export const rotateUnshiftPop = (nums, k) => {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
}

export const rotate = rotatePushSplice;
// export const rotate = rotateUnshiftPop;
// export const rotate = rotateUsingReversalAlgorithm;
