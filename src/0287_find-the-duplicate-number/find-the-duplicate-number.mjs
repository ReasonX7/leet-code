/**
 * # Find The Duplicate Number
 *
 * Given an array of integers nums containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.
 *
 * There is only one repeated number in `nums`, return this repeated number.
 *
 * You must solve the problem without modifying the array `nums` and uses only constant extra space.
 *
 * > **Note:** The solution implies usage of [**pigeonhole principle**](https://www.youtube.com/watch?v=2-mxYrCNX60).
 *
 * @param {number[]} nums
 * @return {number}
 */
export const findTheDuplicateNumber_HashMap = (nums) => {
  const hashMap = {};

  for (const num of nums) {
    if (hashMap[num]) {
      return num;
    } else {
      hashMap[num] = true;
    }
  }
};

export const findTheDuplicateNumber_LeetCodeFastestSolution = (nums) => {
  let slow = 0;
  let fast = 0;

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast)

  slow = 0;

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

export const findTheDuplicateNumber_KindaFloydButReallyNot = (nums) => {
  const length = nums.length;

  let slow = 0;
  let fast = 2 % length;

  while (nums[slow] !== nums[fast]) {
    slow = (slow + 1) % length;
    fast = (fast + 2) % length;
  }

  return nums[slow];
};

export const findTheDuplicateNumber_Floyd = (nums) => {
  let slow = 0;
  let fast = 0;

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  let secondSlow = 0;

  while (nums[slow] !== nums[secondSlow]) {
    slow = nums[slow];
    secondSlow = nums[secondSlow];
  }

  return nums[slow];
};

export const findTheDuplicateNumber_Unknown = (nums) => {
  let out = null;

  for (let i = 0; i < nums.length; i++) {
    let val = Math.abs(nums[i]) - 1;

    if (nums[val] < 0) {
      out = val + 1;
      return out;
    } else {
      nums[val] *= -1;
    }
  }

  return out;
}

// export const findTheDuplicateNumber = findTheDuplicateNumber_HashMap;
// export const findTheDuplicateNumber = findTheDuplicateNumber_LeetCodeFastestSolution;
// export const findTheDuplicateNumber = findTheDuplicateNumber_KindaFloydButReallyNot;
// export const findTheDuplicateNumber = findTheDuplicateNumber_Floyd;
export const findTheDuplicateNumber = findTheDuplicateNumber_Unknown;
