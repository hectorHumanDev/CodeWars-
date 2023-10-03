// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// ======================================solution=================================

function countPositivesSumNegatives(input) {
    return input != null && input.length ? [input.filter(e => e > 0).length, input.filter(e => e < 0).reduce((acc,c) => acc + c)] : []                           
  }