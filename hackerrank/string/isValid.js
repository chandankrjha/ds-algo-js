function isValid(s) {
  const freq = {};
  for (let pos in s) {
    freq[s.charAt(pos)] = freq[s.charAt(pos)] ? freq[s.charAt(pos)] + 1 : 1;
  }

  let keys = Object.keys(freq);
  let firstArray = [freq[keys[0]]];
  let secondArray = [];
  let invalid = false;
  keys.forEach(key => {
    //val same push in first array
    // else second is empty push has value compare if not same no
    // atleast one of array len 1
    if (firstArray[0] === freq[key]) {
      firstArray.push(freq[key]);
    } else if (secondArray.length === 0) {
      secondArray.push(freq[key]);
    } else if (secondArray[0] === freq[key]) {
      secondArray.push(freq[key]);
    } else {
      invalid = true;
    }
  });

  if (invalid) {
    return 'NO';
  }
  if (
    firstArray.length === 1 ||
    secondArray.length === 1 ||
    firstArray.length === 0 ||
    secondArray.length === 0
  ) {
    return 'YES';
  } else {
    return 'NO';
  }
}
