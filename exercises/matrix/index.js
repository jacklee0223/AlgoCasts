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
  // create empty array of arrays called results
  const results = [];

  // for the iterations of n, push empty arrays to results
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  // define counter at 1, start column and row at 0, end column and row at n - 1
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  // as long as (startColumn <= endColumn) AND (startRow <= endRow)
  while (startColumn <= endColumn && startRow <= endRow) {
    // loop from start column to end column
    for (let i = startColumn; i <= endColumn; i++) {
      // at results[startRow][i] assign counter
      results[startRow][i] = counter;
      // increment counter
      counter++;
    }
    // increment start row
    startRow++;
    // loop from start row to end row
    for (let i = startRow; i <= endRow; i++) {
      // at results[i][endColumn] assign counter
      results[i][endColumn] = counter;
      // increment counter
      counter++;
    }
    // decrement end column
    endColumn--;

    // repeat for other two sides
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
