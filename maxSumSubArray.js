function maxSumSubArray(arr, len) {
  // make a sliding window of size len
  // maxVal initialize to initial sum, slide the window and update maxVal and maxIndices

  let left = 0,
    right = len - 1;

  let sum = 0;

  for (let i = 0; i <= right; i++) {
    sum += arr[i];
  }
  let prevSum = sum,
    leftIndex = left;
  rightIndex = right;
  for (let j = right; j < arr.length; j++) {
    let tempSum = prevSum - arr[left] + arr[right];

    if (tempSum > sum) {
      sum = tempSum;
      leftIndex = left + 1;
      rightIndex = right + 1;
    }

    left++;
    right++;
  }

  return arr.slice(leftIndex, rightIndex + 1);
}

console.log(maxSumSubArray([1, 2, 9, 7, 4, 5, 19, 7], 2));
