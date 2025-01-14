function fibonacci(num) {
    if (num <= 1) {
      return num;
    }
    let n1 = 0;
    let n2 = 1;
    let next;
    for (let i = 2; i <= num; i++) {
      next = n1 + n2;
      n1 = n2;
      n2 = next; 
    }
    return n2;
  }
  console.log(fibonacci(5));