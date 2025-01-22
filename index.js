const { log } = require("console");

function customIndexOf(str, search) {
  let temp = str;
  let result = -1;
  for (let i = 0; i < str.length; i++) {
    temp = str;
    if (temp.slice(i, search.length) == search) {
      return (result = i + search.length);
    }
  }
  return result;
}

console.log(customIndexOf("hello world", "world"));
// Output: 6

console.log(customIndexOf("abcdef", "gh"));
// Output: -1
