function tripleSum(a, b, c) {
  // let i = 0;

  let count = 0;

  // take first element from a
  // travel to all elements of b
  // travel to all elements of c

  for (let i = 0; i < a.length; i++) {
    let firstVal = a[i];
    j = 0;
    k = c.length - 1;
    while (j < b.length) {
      if (firstVal <= b[j] && b[j] >= c[k]) {
        count++;
      }
      console.log(i, j, k, a[i], b[j], c[k]);
      if (k - 1 === j) {
        j++;
        k = c.length - 1;
      } else {
        k--;
      }
    }
    console.log(count, firstVal);
  }

  console.log(count);
}

tripleSum([1, 3, 5], [2, 3], [1, 2, 3]);
