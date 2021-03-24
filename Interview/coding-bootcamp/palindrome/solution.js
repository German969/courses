// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}

function palindrome2(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

function palindrome3(str) {
  const arr = str.split('');
  const first = arr.slice(0, Math.ceil(arr.length / 2));
  const last = arr.slice(Math.floor(arr.length / 2)).reverse();
  return first.every((char, i) => {
    return char === last[i];
  });
}

module.exports = palindrome;

// function palindrome(str) {
//   return str === str.split('').reverse().join('');
// }
