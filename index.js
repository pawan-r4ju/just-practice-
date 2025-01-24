function maxSubarraySum(arr) {
  let curSum = arr[0];
  let maxSum = arr[0];
  let start = 0,
    end = 0,
    tempstart = 0;
  for (let i = 1; i < arr.length; i++) {
    if (curSum + arr[i] > arr[i]) {
      curSum += arr[i];
    } else {
      curSum = arr[i];
      tempstart = i;
    }
    if (curSum > maxSum) {
      maxSum = curSum;
      start = tempstart;
      end = i;
    }
  }
  let result = arr.slice(start, end + 1);
  return { maxSum, result };
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Output: 6 (Subarray: [4, -1, 2, 1])

console.log(maxSubarraySum([1, 2, 3, -2, 5]));
// Output: 9 (Subarray: [1, 2, 3, -2, 5])
