// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const mid = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (mid - row <= column && mid + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = '') {
  if (n === row) return;

  if (2 * n - 1 === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const mid = Math.floor((2 * n - 1) / 2);

  // if (mid - row <= level.length && mid + row >= level.length) {
  //   level += '#';
  // } else {
  //   level += ' ';
  // }

  const addCondition = mid - row <= level.length && mid + row >= level.length;
  const add = addCondition ? (level += '#') : (level += ' ');

  pyramid(n, row, level);
}

module.exports = pyramid;
