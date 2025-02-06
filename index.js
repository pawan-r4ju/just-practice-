function isValidPalindrome(str) {
  let check = "abcdefghijklmnopqrstuvwxyz";
  let lowerStr = str.toLowerCase();
  let allChar = [];
  let compare = [];

  for (let i = 0; i < lowerStr.length; i++) {
    if (check.includes(lowerStr[i])) {
      compare.push(lowerStr[i]);
      allChar.unshift(lowerStr[i]);
    }
  }
  if (allChar.join("") === compare.join('')) return true;
  return false
}

console.log(isValidPalindrome("A man, a plan, a canal, Panama"));
// Output: true

console.log(isValidPalindrome("hello"));
// Output: false
