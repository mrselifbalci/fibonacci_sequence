// Log the Fibonacci Sequence until the Nth index.

const fib = (num) => {
  let arr = [0, 1];
  if (num === 0) {
    return [0];
  } else if (num === 1) {
    return [0, 1];
  } else if (num < 0) {
    return "Enter a valid number.";
  } else {
    for (let i = 0; i < num - 1; i++) {
      arr.push(arr[i] + arr[i + 1]);
    }
    return arr;
  }
};
console.log(fib(13));

//Find the Nth term of Fibonacci Sequence.

const fib2 = (num) => {
  let arr = [0, 1];
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else if (num < 0) {
    return "Enter a valid number.";
  } else {
    for (let i = 0; i < num - 1; i++) {
      arr.push(arr[i] + arr[i + 1]);
    }
    return arr.pop();
  }
};
console.log(fib2(13));
