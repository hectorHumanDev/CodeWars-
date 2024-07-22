// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(a, b) {
  if (a == null || b == null) return false;
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  return a.map((value) => value * value).every((v, i) => v == b[i]);
}

//   P = function is taking in 2 arrays (a, b)
//   R = Boolean
//   E = a = [121, 144, 19, 161, 19, 144, 19, 11]
//       b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//   P =
//     -function will take in 2 arrays
//    -sort both arrays
//    -map each value of a to multiply by itself
//    -iterate thru and compare that each squared value with each value in b
