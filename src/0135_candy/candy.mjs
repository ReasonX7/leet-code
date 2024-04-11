// /**
//  * # Candy
//  *
//  * There are `n` children standing in a line.
//  * Each child is assigned a rating value given in the integer array `ratings`.
//  *
//  * You are giving candies to these children subjected to the following requirements:
//  *   - Each child must have at least one candy.
//  *   - If a child has a higher rating than their left neighbor, then they need (at least one) more candy than that neighbor.
//  *   - If a child has a higher rating than their right neighbor, then they need (at least one) more candy than that neighbor.
//  *   - If a child is not beating neighbours (matching is not enough) then they get one candy.
//  *
//  * Return the minimum number of candies you need to have to distribute the candies to the children.
//  *
//  * Links:
//  *   - [LeetCode Challenge](https://leetcode.com/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150).
//  */
export const candy_DoubleCycle = (ratings) => {
  const candies = Array.from({ length: ratings.length }).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    candies[i] = ratings[i] > ratings[i - 1] ? candies[i - 1] + 1 : candies[i];
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    candies[i] = ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1] ? candies[i + 1] + 1 : candies[i];
  }

  return candies.reduce((sum, value) => sum + value);
};

export const candy_SingleCycleUnoptimized = (ratings) => {
  const candies = new Array(ratings.length).fill(1);

  for (let index = 0, direction = 1; index < ratings.length; index += direction) {
    const leftRating = ratings[index - 1] || 0;
    const rightRating = ratings[index + 1] || 0;
    const currentRating = ratings[index];

    const leftCandiesCount = candies[index - 1] || 0;
    const rightCandiesCount = candies[index + 1] || 0;
    const currentCandiesCount = candies[index];

    if (currentRating > leftRating && leftCandiesCount >= candies[index]) {
      candies[index] = leftCandiesCount + (leftCandiesCount >= currentCandiesCount);
    }

    if (currentRating > rightRating && rightCandiesCount >= candies[index]) {
      candies[index] = rightCandiesCount + (rightCandiesCount >= currentCandiesCount);
    }

    if (currentCandiesCount !== candies[index] && leftRating > currentRating) {
      direction = -1;
    } else {
      direction = 1;
    }
  }

  return candies.reduce((sum, value) => sum + value);
};

export const candy_ImmediateCount = (ratings) => {
  let count = 1;
  let koef = 1;
  let ascendKoef = 0;

  for (let i = 1; i < ratings.length - 1; i++) {
    const prev = ratings[i - 1];
    const next = ratings[i + 1];
    const current = ratings[i];

    // if ()

    count += koef + ascendKoef;
    console.log(`${i} |`, current, "|", "koef:", koef, "ascendKoef", ascendKoef, "count:", count);
  }

  const last = ratings.at(-1);
  const lastPrev = ratings.at(-2);

  koef = lastPrev < last ? koef + 1 : 1;

  console.log("final |", "koef:", koef, "ascendKoef:", ascendKoef);

  return count + koef;
};

export const candy_FastestLeetCodeSolution = (ratings) => {
  const n = ratings.length;
  let result = 1;
  let candies = 1;
  let left = 0;
  let leftCandies = candies;
  for (let i = 1; i < n; i++) {
    if (ratings[i] === ratings[i - 1]) {
      left = i;
      candies = 1;
      leftCandies = candies;
      result += candies;
    } else if (ratings[i] > ratings[i - 1]) {
      candies++;
      left = i;
      leftCandies = candies;
      result += candies;
    } else {
      if (leftCandies > i - left) {
        result += i - left;
      } else {
        result += i - left + 1;
        leftCandies++;
      }
      candies = 1;
    }
  }
  return result;
};

// export const candy = candy_DoubleCycle;
// export const candy = candy_SingleCycleUnoptimized;
export const candy = candy_ImmediateCount;
// export const candy = candy_FastestLeetCodeSolution;
