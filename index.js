function firstNonRepeatingCharacter(str) {
  let char_count = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in char_count) {
      char_count[str[i]]++;
    } else {
      char_count[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (char_count[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
}

console.log(firstNonRepeatingCharacter("leetcode")); // Output: "l"
console.log(firstNonRepeatingCharacter("aabbcc")); // Output: null
console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
