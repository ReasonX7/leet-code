/**
 * # Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} numsA
 * @param {number} countA
 * @param {number[]} numsB
 * @param {number} countB
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export const mergeSortedArray_Stupid = (numsA, countA, numsB, countB) => {
  for (let i = 0, j = 0; i < countB; i++) {
    const currentNum = numsB[i];

    for (j = i; j < countA + countB; j++) {
      if (j >= countA + i) {
        numsA[j] = currentNum;

        continue;
      }

      if (currentNum < numsA[j]) {
        for (let k = countA + countB - 1; k >= j + 1; k--) {
          numsA[k] = numsA[k - 1];
        }

        numsA[j] = currentNum;

        break;
      }
    }
  }
};

const getLargestNumberIndexFromA = (numsA, countA, numB) => {
  for (let index = countA - 1; index >= 0; index--) {
    if (numsA[index] >= numB) {
      return index;
    }
  }

  return -1;
};

const insertNumberIntoA = (numsA, countA, numB) => {
  for (let index = countA - 1; index >= 0; index--) {
    numsA[index + 1] = numsA[index];
    numsA[index] = numB;

    if (index > 0 && numsA[index - 1] <= numB) {
      break;
    }
  }
};

export const mergeSortedArray_Overcomplicated = (numsA, countA, numsB, countB) => {
  const countSum = countA + countB;

  for (let indexB = countB - 1, insertedCount = 0; indexB >= 0; indexB--) {
    const numB = numsB[indexB];
    const largestNumberIndexFromA = getLargestNumberIndexFromA(numsA, countA, numB);

    if (largestNumberIndexFromA > -1) {
      insertNumberIntoA(numsA, countA + insertedCount, numB);
      insertedCount++;
    } else {
      numsA[countSum - (countB - indexB)] = numB;
    }
  }
};

export const mergeSortedArray_TwoStep = (numsA, countA, numsB, countB) => {
  const maxA = numsA[countA - 1];

  let indexB = countB - 1;

  for (; indexB >= 0; indexB--) {
    const currentB = numsB[indexB];
    if (currentB >= maxA) {
      numsA[countA + indexB] = currentB;
    } else {
      break;
    }
  }

  for (let indexA = countA - 1; indexB >= 0; indexB--) {
    const currentB = numsB[indexB];

    for (; indexA >= 0; indexA--) {
      const currentA = numsA[indexA];

      if (currentA > currentB) {
        numsA[indexB + indexA + 1] = currentA;
      } else {
        break;
      }
    }

    numsA[indexB + indexA + 1] = currentB;
  }
};

export const mergeSortedArray_Efficient = (numsA, countA, numsB, countB) => {
  let indexA = countA - 1;
  let indexB = countB - 1;

  for (let indexG = indexA + indexB + 1; indexA >= 0 && indexB >= 0; indexG--) {
    const currentA = numsA[indexA];
    const currentB = numsB[indexB];

    if (currentA > currentB) {
      numsA[indexG] = currentA;
      indexA--;
    } else {
      numsA[indexG] = currentB;
      indexB--;
    }
  }

  for (; indexB >= 0; indexB--) {
    numsA[indexB] = numsB[indexB];
  }
};


export const mergeSortedArray_FastestLeetCodeSolution = (nums1, m, nums2, n) => {
  let mIndex = m - 1;
  let nIndex = n - 1;
  let mnIndex = n + m - 1;

  while (mIndex >= 0 && nIndex >= 0) {
    if (nums1[mIndex] > nums2[nIndex]) {
      nums1[mnIndex] = nums1[mIndex];
      mIndex--;
    } else {
      nums1[mnIndex] = nums2[nIndex];
      nIndex--;
    }
    mnIndex--;
  }

  while (nIndex >= 0) {
    nums1[nIndex] = nums2[nIndex];
    nIndex--;
  }
}

const numSortCallback = (a, b) => a - b;

export const mergeSortedArray_CheatLeetCodeSolution = (nums1, m, nums2, n) => {
  for (var i = 0; i < n; nums1[i + m] = nums2[i++]) ;
  nums1.sort(numSortCallback);
}

// export const mergeSortedArray = mergeSortedArray_Stupid;
// export const mergeSortedArray = mergeSortedArray_Overcomplicated;
// export const mergeSortedArray = mergeSortedArray_FastestLeetCodeSolution;
// export const mergeSortedArray = mergeSortedArray_TwoStep;
export const mergeSortedArray = mergeSortedArray_Efficient;
