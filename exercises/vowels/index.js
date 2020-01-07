// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   const vowelMap = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (char of str.toLowerCase()) {
//     if (vowelMap.includes(char)) count++;
//   }

//   return count;
// }

// function vowels(str, count = 0) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

function vowels(str, count = 0) {
  if (str.length < 1) return count;

  const vowelMap = ['a', 'e', 'i', 'o', 'u'];
  const first = str[0].toLowerCase();
  const add = vowelMap.includes(first) ? 1 : 0;

  return vowels(str.slice(1), count + add);
}

module.exports = vowels;
