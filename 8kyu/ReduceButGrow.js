// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// =====================Solution=======================


function grow(x){
    return eval(x.join('*'))
}

console.log(grow([1, 2, 3, 4]))