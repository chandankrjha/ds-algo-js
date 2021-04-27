function naiveSearch(longStr, str) {
  let i = 0,
    j = 0,
    index = -1;
  while (i < longStr.length - str.length) {
    if (longStr.charAt(i) === str.charAt(j)) {
      i++;
      j++;
    } else {
      j = 0;
      i++;
    }

    if (j === str.length - 1) {
      index = i - str.length + 1;
      break;
    }
  }

  return index;
}

console.log(naiveSearch('chandan is here', 'dan'));
