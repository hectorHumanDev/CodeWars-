// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


// ===================Solution======================

function positiveSum(arr) {
    let posArr = arr.filter(e => e > 0)
    return posArr.reduce((sum, val) => sum + val, 0)
  }

// ======or===========


const positive = arr => arr.reduce((sum, val) => sum + (val > 0 ? val : 0), 0)

  

console.log((positive([1,-4,7,12])))
