function customIndexOf(str, search) {
  for (let i = 0; i <= str.length - search.length; i++) {
    let found = true;
    for (let j = 0; j < search.length; j++) {
      if (str[i + j] !== search[j]) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }
  return -1;
}

console.log(customIndexOf("hello world", "world"));
// Output: 6

console.log(customIndexOf("abcdef", "gh"));
// Output: -1
