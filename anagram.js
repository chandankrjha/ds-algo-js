function isAnagram(firstStr, secondStr) {
  if (firstStr.length !== secondStr.length) {
    return false;
  }

  let f1 = {},
    f2 = {};
  for (let ch in firstStr) {
    f1[ch] = f1[ch]++ || 1;
  }

  for (let ch in secondStr) {
    f2[ch] = f2[ch]++ || 1;
  }

  for (let key in f1) {
    if (f2[key] !== f1[key]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram('hello', 'el loh'));
