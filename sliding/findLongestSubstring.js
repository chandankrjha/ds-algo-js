function findLongestSubstring(str) {
  let p = 0,
    q = 1,
    longestSubStringLen = 1;

  while (q < str.length) {
    const strTillNow = str.substr(p, q - 1);
    const pos = strTillNow.indexOf(str.charAt(q));

    if (pos > -1) {
      longestSubStringLen = Math.max(longestSubStringLen, q - p);
      p = pos + 1;
    }
    q++;
  }

  return longestSubStringLen;
}
