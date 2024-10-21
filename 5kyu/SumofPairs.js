// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined/Nothing (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]

//P-> array of integers, one or more pairs may or may not add up to sum integer (second parameter)
//R-> returns two elements of array that add up to sum integer, where the index of 2nd element is smaller than the index of the 1st element
//E-> example: sum_pairs([10, 5, 2, 3, 7, 5], 10)
// #                          ^-----------^   5 + 5 = 10, indices: 1, 5
// #                                ^--^      3 + 7 = 10, indices: 3, 4 *
//                                              4 < 5
//P-> identify if any numbers add up to equal sum integer
//isolate those integers in an array
//in order from left to right, separate pairs that equal sum int
//store indexes of 2nd values in another array
//locate smallest element of the array (array.sort((a, b) a + b)[0]

// var sumPairs = function (ints, s) {
//   var seen = {};
//   var pairs = [];

//   for (let i = 0; i <= ints.length - 1; i++) {
//     //ints[0] = 10
//     let compliment = s - ints[i];
//     if (seen[compliment]) {
//       pairs.push([compliment, ints[i]]);
//     }
//     seen[ints[i]] = true;
//   }
//   let secondElement = [];
//   pairs.foreach(pair => {
//       secondElement.push(pair[1]);
//   })
// };

function sumPairs(ints, s) {
  // This object will keep track of the numbers seen and their first indexes
  // For an array like [42, 5, 5, 7] we will get { '42': 0, '5': 1, '7': 3 }
  const numbersSeen = {};

  for (let i = 0; i < ints.length; i += 1) {
    // For every number...
    const currentNumber = ints[i];
    // Find the pair it needs to add up to "s"
    const pair = s - currentNumber;

    // If we've seen the pair before, we have our best set of numbers!
    if (numbersSeen[pair] !== undefined) {
      return [pair, currentNumber];
    }

    // Otherwise save this number's index if we haven't seen it before
    if (numbersSeen[currentNumber] === undefined) {
      numbersSeen[currentNumber] = i;
    }
  }

  // Return "null" if we find nothing after our loop
  return null;
}

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
