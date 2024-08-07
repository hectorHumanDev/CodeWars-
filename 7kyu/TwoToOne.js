// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let arr1 = s1.split(""),
    arr2 = s2.split(""),
    combinedArr = arr1.concat(arr2);

  let noRepeat = new Set(combinedArr);
  return Array.from(noRepeat)
    .sort((a, b) => (a > b ? 1 : a === b ? 0 : -1))
    .join("");
}

// =================================================================or===============================================

const longest = (s1, s2) =>
  [...new Set(s1 + s2)].sort((a, b) => (a > b ? 1 : a === b ? 0 : -1)).join("");

console.log(longest("aretheyhere", "yestheyarehere"));
