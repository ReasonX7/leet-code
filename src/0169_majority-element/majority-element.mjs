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
export const majorityElement_Mine = (nums) => {
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

export const majorityElement_FastestLeetCodeSolution = (nums) => {
  let count = 0, leader;
  for (let i = 0; i < nums.length; i++) {
    if (count < 1) leader = nums[i]
    if (nums[i] == leader) count++;
    else count--;
  }
  return leader;
};

export const majorityElement = majorityElement_Mine;
// export const majorityElement = majorityElement_FastestLeetCodeSolution;
