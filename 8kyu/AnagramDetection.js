// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

const isAnagram = (test, original) => {
  const t = test.split("").sort().join("");
  const o = original.split("").sort().join("");

  return t === o;
};

console.log(isAnagram("foefet", "toffee"));
