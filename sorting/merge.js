function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor((arr.length - 1) / 2);

  return merge(mergeSort(arr.slice(0, mid + 1)), mergeSort(arr.slice(mid + 1)));
}

function merge(first, second) {
  let p = 0,
    q = 0;

  let res = [];
  if (first.length === 0 || second.length === 0) {
    return first.concat(second);
  }
  while (p < first.length && q < second.length) {
    if (first[p] < second[q]) {
      res.push(first[p]);
      p++;
    } else {
      res.push(second[q]);
      q++;
    }
  }
  if (p === first.length) {
    res = res.concat(second.slice(q));
  } else {
    res = res.concat(first.slice(p));
  }
  return res;
}

console.log(mergeSort([1, 4, 8, 2, 3, 5, 7, 9]));
