function sumArray(arr) {
  let res = 0;
  for (let elem of arr) {
    res = res + elem;
  }
  return res;
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
