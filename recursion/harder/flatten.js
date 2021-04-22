function flatten(arr) {
  if (arr.length === 0) {
    return [];
  }

  const res = [];
  function helper(arr) {
    if (arr.length === 0) {
      return;
    }
    if (Array.isArray(arr[0])) {
      helper(arr[0]);
    } else {
      res.push(arr[0]);
    }
    helper(arr.slice(1));
  }

  helper(arr);

  return res;
}

//   console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
//   console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
//   console.log(flatten([[1],[2],[3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
