function binarySearch(arr, val) {
  let left = 0,
    right = arr.length - 1;

  let index = -1;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (arr[mid] === val) {
      index = mid;
      break;
    } else if (val > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return index;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
