// Special String Again
// https://www.hackerrank.com/challenges/special-palindrome-again/problem
// Naive approach

function specialPalindrome(n, s) {
  let count = 0;

  count += n;

  for (let i = 2; i <= s.length; i++) {
    for (let j = 0; j < s.length - i + 1; j++) {
      if (isSpecialCase(s.substr(j, i))) {
        count += 1;
      }
    }
  }

  return count;
}

function isSpecialCase(s) {
  let isNotSpecialCase = true;
  if (s.length % 2 === 1) {
    let firstChar = s.charAt(0);
    const mid = (s.length - 1) / 2;

    for (let i = 1; i < s.length; i++) {
      if (i !== mid && firstChar !== s.charAt(i)) {
        isNotSpecialCase = false;
      }
    }
  } else if (s.length % 2 === 0) {
    let firstChar = s.charAt(0);

    for (let i = 1; i < s.length; i++) {
      if (firstChar !== s.charAt(i)) {
        isNotSpecialCase = false;
      }
    }
  }
  return isNotSpecialCase;
}
