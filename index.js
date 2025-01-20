let count = 0;
function permutations(str) {
  if (str.length == 1) {
    return [str];
  }

  let result = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    let permutation = permutations(remaining);
    for (let perm of permutation) {
      result.push(char + perm);
      
    }
  }
  return result;
}

console.log(permutations("abcd"));
// Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
