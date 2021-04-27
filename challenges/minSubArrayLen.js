function minSubArrayLen(arr, sum) {
  let p = 0,
    q = 1;

  let currentSum = arr[p];
  let minSubArrayLen = Infinity;
  while (p < q && q < arr.length) {
    console.log(p, q, currentSum, minSubArrayLen);

    if (q - p < minSubArrayLen && currentSum > sum) {
      minSubArrayLen = q - p;
      while (currentSum < sum) {
        currentSum -= arr[p];
        p++;
      }
    } else {
      currentSum += arr[q];
      q++;
    }
  }

  return minSubArrayLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
