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

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       column <= row ? (stair += '#') : (stair += ' ');
//     }
//     console.log(stair);
//   }
// }

function steps(n, row = 0, stair = '') {
  // if (row === n) then we have hit the end of our problem
  if (n === row) {
    return;
  }

  // if the stair string has a length === n then we are at the
  // end of a row
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // if the length of the stair string is less than or equal to the
  // row number we're working on, we add a #, otherwise add
  // a space
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair);
}

module.exports = steps;
