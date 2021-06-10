// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;

  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Left column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;

// function matrix(n) {
//   const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
//   let res = new Array(n).fill(0).map(el => []);
//   let point = [0, 0];
//   let direction = directions[0];

//   for (let i = 1; i <= n*n; i++) {
//     // Insert i
//     res[point[0]][point[1]] = i;
//     console.log('res', point[0], point[1], res);

//     // Next point
//     let expect = [point[0] + direction[0], point[1] + direction[1]];

//     if (expect[0] > n - 1 || expect[1] > n - 1 || expect[0] === -1 || expect[1] === -1 || res[expect[0]][expect[1]]) {
//       // Change direction
//       let actual = directions.findIndex(dir => dir[0] === direction[0] && dir[1] === direction[1]);

//       let newD = actual === 3 ? 0 : actual + 1;

//       direction = directions[newD];

//       point = [point[0] + direction[0], point[1] + direction[1]];
//     } else {
//       point = expect;
//     }
//   }

//   console.log(res);

//   return res;
// }