// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return charMap;
}

function anagrams2(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// function anagrams2(stringA, stringB) {
//   const cleanA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   const cleanB = stringB.replace(/[^\w]/g, "").toLowerCase();

//   if (stringA.length !== stringB.length) return false;

//   const charMapA = {};
//   const charMapB = {};

//   for (let char of stringA) {
//     if (charMapA[char]) {
//       charMapA[char]++
//     } else {
//       charMapA[char] = 1;
//     }
//   }

//   for (let char of stringB) {
//     if (charMapB[char]) {
//       charMapB[char]++
//     } else {
//       charMapB[char] = 1;
//     }
//   }

//   return Object.entries(charMapA).reduce((match, [char, count]) => {
//     if (!charMapB[char] || (charMapB[char] !== count)) return false;
//     return match;
//   }, true);
// }

// function anagrams(stringA, stringB) {
//   const cleanA = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
//   const cleanB = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');

//   return cleanA === cleanB;
// }