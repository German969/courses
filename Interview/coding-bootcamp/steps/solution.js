// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) { // First loop
    let stair = '';

    for (let column = 0; column < n; column++) { // Runtime complexity: Quadratic runtime (N^2)
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}

function steps2(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';

  // if (stair.length <= row) {
  //   stair += '#';
  // } else {
  //   stair += ' ';
  // }

  steps(n , row, stair + add);
}

module.exports = steps;

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let str = '';
//     str = str.padStart(i + 1, '#');
//     str = str.padEnd(n, ' ');
//     console.log(str);
//   }
// }