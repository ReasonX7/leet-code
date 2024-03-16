/**
 * # Majority Element
 *
 * Given an array `nums` of size `n`, return the majority element.
 *
 * The majority element is the element that appears more than `⌊n / 2⌋` times.
 * You may assume that the majority element always exists in the array.
 *
 * Constraints:
 *   - `n == nums.length`
 *   - `1 <= n <= 5 * 10^4`
 *   - `-10^9 <= nums[i] <= 10^9`
 *
 * Links:
 *   - [LeetCode Challenge](https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150).
 *
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = (nums) => {
  let lead = nums[0];
  let count = 1;
  let n = nums.length / 2;

  for (let i = 1; i < nums.length && count < n; i++) {
    if (count === 0) {
      lead = nums[i];
    }
    if (lead === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return lead;
}
