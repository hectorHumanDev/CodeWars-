// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// ===============================Solution=============================

function getMiddle(s) {
  if (s.length == 1) {
    return s;
  } else if (s.length % 2 == 0) {
    return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    return s[Math.floor(s.length / 2)];
  }
}

// =====================================================or==============================

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

console.log(getMiddle("middle"));
