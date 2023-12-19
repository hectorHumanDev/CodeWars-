// Complete the function that takes an array of integers as input and finds the sum of squares of the elements at even positions (i.e. 2nd, 4th, etc.) plus the sum of the rest of the elements at odd position.

// For empty arrays, result should be zero (except for Haskell).
// Note

// The values at even positions need to be squared. For a language with zero-based indices, this will occur at oddly-indexed locations. For instance, in Python, the values at indices 1, 3, 5, etc. should be squared because these are the second, fourth, and sixth positions in the list.
// Example

// [11, 12, 13, 14, 15]  -->  379
// # 1.  2.  3.  4.  5.  position

// 11 + 12^2 + 13 + 14^2 + 15 = 379


// ===================================Solution====================================


function alternateSqSum(arr){
    let even = arr.filter((element, index) => index % 2 !== 0).map(e => e ** 2).reduce((sum, value) => sum +value, 0)   
    let odd = arr.filter((element, index) => index % 2 === 0).reduce((sum, value) => sum +value, 0)  
    return even + odd   
  }


//   =====================or==================

  
  function alternateSqSum(arr){
    return  arr.map((element, index) => index % 2 !== 0 ? element ** 2 : element).reduce((sum, value) => sum +value, 0)          
  }

  console.log(alternateSqSum([11, 12, 13, 14, 15]))