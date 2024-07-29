// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b) {
  if (a === b) {
    return a;
  }
  let min = Math.min(a, b); // 1
  let max = Math.max(a, b); // 2

  return ((max - min + 1) * (min + max)) / 2;
}

console.log(getSum(1, 2));

// P = function takes in integer 'a' and integer 'b' (pos or neg)
// R = function returns sum of sequence of integers from beginning 'a' to end 'b'
// E = (1, 0) --> 1 (1 + 0 = 1)
//     (1, 2) --> 3 (1 + 2 = 3)
//     (0, 1) --> 1 (0 + 1 = 1)
// P = if parameter 'a' is equal to parameter 'b' must return 'a'
//     loop starting at 'a' then push all numbers between 'a' and 'b' into newly created array
//     using reduce method, add all elements in array
