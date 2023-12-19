// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// ============================Solution============================


function XO(str) {
    let arr = str.toLowerCase().split('')
    let x = arr.filter(e => e === 'x').length
    let o =  arr.filter(e => e === 'o').length
    return !x && !o || x === o ? true : false 
  }

// ===============================or============================

  function XO(str) {
    let arr = str.toLowerCase().split('')
    let x = arr.filter(e => e === 'x').length
    let o =  arr.filter(e => e === 'o').length
    if((!x && !o) || (x === o)){
        return true;
    } else{
        return false;
    }
  }

// ===================================or=================================

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

console.log(XO("zzoo"))