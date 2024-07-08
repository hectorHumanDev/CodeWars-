function onlyEven(numArray) {
  return numArray.filter((n) => n % 2 === 0);
}

console.log(onlyEven([2, 3, 4, 5, 6, 7]));
