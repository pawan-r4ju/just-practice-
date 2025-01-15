function isPerfectSquare(num) {
  if (num < 0) {
    return false;
  }
  let i = 0;
  while (i * i < num) {
    i++;
  }
  return i * i === num;
}

console.log(isPerfectSquare(16)); // True
console.log(isPerfectSquare(7)); // False