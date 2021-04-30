function pivot(arr) {
  // return the index of the pivot

  let ourPivot = arr[0];
  let totalLess = 0;
  for (let i = 1; i < arr.length; i++) {
    if (ourPivot > arr[i]) {
      totalLess += 1;
      swap(arr, totalLess, i);
    }
  }

  // swap totalLess as index and pivot
  // return new pivot index
  swap(arr, 0, totalLess);
  return totalLess;
}

function swap(arr, initial, last) {
  let temp = arr[last];
  arr[last] = arr[initial];
  arr[initial] = temp;
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = pivot(arr);

  const left = quickSort(arr.slice(0, pivotIndex));
  const right = quickSort(arr.slice(pivotIndex + 1));

  left.push(arr[pivotIndex]);
  return left.concat(right);
}
console.log(quickSort([10, 4, 2, 6, 12, 4]));
