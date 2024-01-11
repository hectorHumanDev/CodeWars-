// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// ====================Solution=======================


function findShort(s){
    let newWords = []
    let words = s.split(' ');
    for(let word of words){
        newWords.push(word.length)
    }
    return Math.min(...newWords)  
}

// ===========or============

function findShort(s){
    return Math.min(...s.split(' ').map(e => e.length))
}


// ============or===============

function findShort(s){
    return s.split(' ').sort((a, b) => a.length - b.length)[0]
}

console.log(findShort('Today is a cloudy day'))