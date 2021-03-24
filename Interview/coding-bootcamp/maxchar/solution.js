// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

// function maxChar(str) {
//   const charMap = {};

//   for (char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return Object.entries(charMap).reduce((f, c) => c[1] > f.val ? { ch: c[0], val: c[1]} : f, { val : 0 }).ch;
// }