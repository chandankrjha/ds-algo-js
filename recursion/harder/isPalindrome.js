// console.log(isPalindrome('awesome')); // false
// console.log(isPalindrome('foobar')); // false
// console.log(isPalindrome('tacocat')); // true
// console.log(isPalindrome('amanaplanacanalpanama')); // true
// console.log(isPalindrome('amanaplanacanalpandemonium')); // false

function isPalindrome(str) {
  if (str.length === 0) {
    return true;
  }

  const isExtremesSame = str.charAt(0) === str.charAt(str.length - 1);

  return isExtremesSame && isPalindrome(str.substr(1, str.length - 2));
}
