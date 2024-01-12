// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


// ===========================Solution==============================

function isIsogram(str){
    let matchArray = []
    let array = str.toLowerCase().split('');
    for(let letter of array){
       matchArray.push(array.filter(e => e == letter).length)
    }
    return matchArray.every(e => e == 1)
  }

//   ===============or===================

  
  function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}


  console.log(isIsogram("Dermatoglyphics"))