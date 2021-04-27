function areThereDuplicates() {
  const args = arguments;

  // make a frequency counter
  const freq = {};
  for (let key in arguments) {
    if (freq[arguments[key]]) {
      return true;
    } else {
      freq[arguments[key]] = 1;
    }
  }
  console.log(freq);
  return false;
}

// console.log(areThereDuplicates(1, 2, 2));
