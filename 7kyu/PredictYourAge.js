// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// step 1 Multiply each number by itself.
// step 2 Add them all together.
// step 3 Take the square root of the result.
// step 4 Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  //using arguments, which is array-like object built into every function.
  let allAges = Array.from(arguments); //cannot use methods directly on arguments array, however can use Array.from to convert arguments into proper array
  let step1and2 = allAges
    .map((age) => age * age)
    .reduce((cur, acc) => cur + acc, 0);

  return Math.floor(Math.sqrt(step1and2) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
