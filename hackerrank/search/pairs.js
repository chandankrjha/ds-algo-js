function pairs(k, arr) {
  let p = 0,
    q = arr.length - 1;
  let count = 0;
  while (p < arr.length - 1) {
    const difference = Math.abs(arr[q] - arr[p]);
    if (difference === k) {
      count += 1;
    }

    if (q - 1 === p) {
      p++;
      q = arr.length - 1;
    } else {
      q--;
    }
  }

  return count;
}

console.log(pairsWithObj(1, [1, 2, 3, 4]));

function pairsWithObj(k, nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = true;
  }
  console.log(obj);
  let count = 0;
  let keys = Object.keys(obj);
  console.log(keys);
  for (let key = 0; key < keys.length; key++) {
    console.log(keys[k]);
    if (obj[parseInt(keys[key]) + k]) {
      count++;
    }
  }

  return count;
}
