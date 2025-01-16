### **Palindrome Checker**

**Write a function that checks whether a given string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward, ignoring spaces and punctuation.**

Example:

```bash
    palindrome("racecar"); // true
    palindrome("hello");   // false
```

Answer:

```bash
function palindrome(str) {
 let compareStr = "";
 for (let i = str.length - 1; i >= 0; i--) {
   compareStr = compareStr + str[i];
 }
 if (compareStr == str) {
   return true;
 }
 return false;
}

console.log(palindrome('raceca'));

```

### **Sum of Digits in a Number**

**Write a function that takes a number and returns the sum of its digits.**
Example:

```bash
    sumDigits(123); // 6
    sumDigits(987); // 24
```

Answer:

```bash
function digitSum(num) {
  let result = 0;
  while (num > 0) {
    digit = num % 10;
    num = (num - digit) / 10;
    result += digit;
  }
  return result;
}
console.log(digitSum(987));

```

### **Find the Missing Number in an Array**

**You are given an array of numbers from 1 to n with one number missing. Write a function to find the missing number.**

Example:

```bash
    findMissing([1, 2, 4, 5, 6]); // 3
    findMissing([3, 7, 1, 2, 8, 4, 5]); // 6
```

Answer:

```bash
function findMissing(arr) {
  let result = [];
  let maximum = 0;
  if (arr.length == arr[arr.length - 1]) {
    console.log("all numbers are present");
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (maximum < arr[i]) {
      maximum = arr[i];
    }
  }
  console.log(maximum);
  for (let i = 1; i <= maximum; i++) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(findMissing([3, 7, 1, 2, 8, 4, 5]));

```

### **Deep Clone an Object**

**Write a function to deep clone an object. It should not reference the original object and should clone all nested objects as well.**

Example:

```bash
    const original = { a: 1, b: { c: 2 } };
    const clone = deepClone(original);
    clone.b.c = 3;
    console.log(original.b.c); // 2 (should remain unchanged)
```

Answer:

```bash
const original = { a: 1, b: { c: 2 } };

function deepClone(obj) {
  let newData = {};
  newData = JSON.parse(JSON.stringify(obj));
  return newData;
}

const clone = deepClone(original);
clone.b.c = 3;
console.log(original.b.c);
console.log(clone);

```

### **Fibonacci Sequence**

**Write a function that returns the nth number in the Fibonacci sequence.**

Example:

```bash
    fibonacci(5); // 5 (0, 1, 1, 2, 3, 5)
    fibonacci(10); // 55
```

Answer:

```bash
function fibonacci(num) {
  if (num <= 1) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(5));
```

#### Series using loop

```bash
function fibonacci(n) {
    let n1 = 0, n2 = 1, next;
    for (let i = 2; i <= n; i++) {
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
    return n === 0 ? n1 : n2;
}
```

#### Example Execution for `fibonacci(5)`:

1.  **Initialization:**

    - `n1 = 0`

    - `n2 = 1`

2.  **Iteration 2:**
    - `next = n1 + n2 = 0 + 1 = 1`
    - `n1 = n2 = 1`
    - `n2 = next = 1`
3.  **Iteration 3:**
    - `next = n1 + n2 = 1 + 1 = 2`
    - `n1 = n2 = 1`
    - `n2 = next = 2`
4.  **Iteration 4:**
    - `next = n1 + n2 = 1 + 2 = 3`
    - `n1 = n2 = 2`
    - `n2 = next = 3`
5.  **Iteration 5:** - `next = n1 + n2 = 2 + 3 = 5` - `n1 = n2 = 3` - `n2 = next = 5`
    **Return:**

- The function returns `n2`, which is `5`.

### **Median of Array**

**Write a function that returns median of array.**
Example:

```bash
  arr = [1,2,3,4,5,6]
```

Answer:

```bash
function median(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res = res + arr[i];
  }
  return res / arr.length;
}
console.log(median([1,2,3,4,5,6]));

```

### **power of number**

**Write a function that returns power of number.**
Example:

```bash
  power(2,3)//8
```

Answer:

```bash
function power(num,exp) {
  return num ** exp
}
console.log(power(2,3));


```

### **Anagram**

**Write a function that returns strings are anagram or not.**
Example:

```bash
 console.log(anagram( "listen", "silent"));//true
```

Answer:

```bash
function anagram(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  }
  for (let i = 0; i < s1.length; i++) {
    if (!s2.includes(s1[i])) {
      return false;
    }
    return true;
  }
  return true;
}

```

### **Anagram**

**Write a function that returns perfect squere or not.**
Example:

```bash
 console.log(isPerfectSquare(16)); // True
```

Answer:

```bash
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

```

### **Reverse a String**

**Write a function that takes a string as input and returns the reversed string.**
Example:

```bash
 console.log(reverseString("hello")); // Output: "olleh"
```

Answer:

```bash
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }
  return reversedStr
}
console.log(reverseString('hello'));


```

### ** Find the Missing Number**

**Given an array of n distinct numbers taken from 0, 1, 2, ..., n, find the missing number.**
Example:


```bash
console.log(findMissingNumber([3, 0, 1])); // Output: 2
console.log(findMissingNumber([9,6,4,2,3,5,7,0,1])); // Output: 8
```

Answer:

```bash
function findMissingNumber(arr) {
  let missing_arr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      missing_arr.push(i);
    }
  }
  return missing_arr
}

```

### **Check if a String is a Palindrome**

**Write a function that checks if a given string is a palindrome (same forward and backward, ignoring case and non-alphanumeric characters).**

Example:


```bash
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: false
```

Answer:

```bash
function isPalindrome(str) {
  str = str.toLowerCase();
  let comparison_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    comparison_str = comparison_str + str[i];
  }

  if (comparison_str == str) {
    return true;
  }
  return false;
}
```

### **Find the First Non-Repeating Character**

**Given a string, find the first character that does not repeat and return it. If all characters repeat, return null.**
Example:


```bash
console.log(firstNonRepeatingCharacter("leetcode")); // Output: "l"
console.log(firstNonRepeatingCharacter("aabbcc")); // Output: null
console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
```

Answer:

```bash
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
```

### **Flatten a Nested Array**

**Write a function that takes a nested array and flattens it into a single-level array.**
Example:


```bash
console.log(flattenArray([1, [2, [3, 4], 5], 6])); 
// Output: [1, 2, 3, 4, 5, 6]
```

Answer:

```bash
function flattenArray(arr) {
  let flatten_arr = [];
  for (let elem of arr) {
    if (!Array.isArray(elem)) {
      flatten_arr.push(elem);
    } else {
      flatten_arr = flatten_arr.concat(flattenArray(elem));
    }
  }
  return flatten_arr;
}
```
