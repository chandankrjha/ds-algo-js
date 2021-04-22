function sumZero(arr) {
  let p = 0,
    q = arr.length - 1;

  while (p < q) {
    if (arr[p] + arr[q] === 0) {
      return [arr[p], arr[q]];
    } else if (arr[p] + arr[q] > 0) {
      q = q - 1;
    } else {
      p = p + 1;
    }
  }

  return false;
}

console.log(sumZero([-10, -1, 0, 2, 3, 4, 5, 66]));
