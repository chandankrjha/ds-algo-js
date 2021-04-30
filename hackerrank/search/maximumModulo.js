/*
 * Complete the 'maximumSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER_ARRAY a
 *  2. LONG_INTEGER m
 */

function maximumSum(a, m) {
  // Write your code here

  // two pointer technique
  // p = 0, q to end
  // move q to left and increment when p + 1 = q

  let p = 0,
    q = a.length - 1;
  let maxModulo = 0;
  while (p < a.length && p < q) {
    const sumNow = sum(a.slice(p, q + 1));
    let currModulo = sumNow % m;

    console.log(p, q, sumNow, currModulo);
    if (currModulo > maxModulo) {
      maxModulo = currModulo;
    }

    if (q - 1 === p) {
      p++;
      q = a.length - 1;
    } else {
      q--;
    }
  }

  console.log(maxModulo);
}

function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
maximumSum([3, 3, 5, 5, 9], 7);

// timeout
