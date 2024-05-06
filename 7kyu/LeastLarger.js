// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

function leastLarger(arr, index) {
  return arr.indexOf(Math.min(...arr.filter((n) => n > arr[index])));
}

console.log(leastLarger([4, 1, 3, 5, 6], 0));
