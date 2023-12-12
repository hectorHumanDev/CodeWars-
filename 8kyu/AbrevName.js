// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// =======================Solution========================


function abbrevName(name){
     let arr = name.split(' ')
     let firstInit = arr[0][0].toUpperCase()
     let lastInit = arr[1][0].toUpperCase()
     return `${firstInit}.${lastInit}`
}

========or=========

function abbrevName(name){
    let nameArr = name.split(' ')
   return (nameArr[0][0] + '.' + nameArr[1][0]).toUpperCase()
}


console.log(abbrevName('Sam Harris'))