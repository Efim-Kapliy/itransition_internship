// import { argv } from 'node:process';

// if (argv.length < 3) {
//   console.log('');
// } else {
//   const arrData = argv.slice(2);
//   let res = arrData[0];
//   for (let i = 1; i < arrData.length; i++) {
//     res = searchMatchingCharacters(res, arrData[i]);
//   }
//   console.log(res);
// }

// function searchMatchingCharacters(first, second) {
//   if (first === null || second === null || typeof first === 'undefined' || typeof second === 'undefined') {
//     return '';
//   }
//   first += '';
//   second += '';
//   let pos1 = 0,
//     pos2 = 0,
//     max = 0,
//     firstLength = first.length,
//     secondLength = second.length,
//     p,
//     q,
//     l,
//     res;
//   for (p = 0; p < firstLength; p++) {
//     for (q = 0; q < secondLength; q++) {
//       for (l = 0; p + l < firstLength && q + l < secondLength && first.charAt(p + l) === second.charAt(q + l); l++);
//       if (l > max) {
//         max = l;
//         pos1 = p;
//         pos2 = q;
//       }
//     }
//   }
//   res = first.slice(pos1, pos1 + max);
//   return res;
// }

const { argv } = require('node:process');

if (argv.length < 3) {
  console.log('');
} else {
  const arrData = argv.slice(2);
  let first = arrData[0],
    max = 0,
    i,
    j,
    pos1;

  for (i = 0; i < first.length; i++) {
    for (
      j = 0;
      i + j < first.length &&
      arrData.every((item) => {
        return item.includes(first.slice(i, i + j + 1));
      });
      j++, console.log(`slice: ${first.slice(i, i + j + 1)}, i: ${i}, j: ${j}`)
    );

    if (j > max) {
      max = j;
      pos1 = i;
      console.log(`max: ${max}, pos1: ${pos1}`);
    }
  }
  console.log(first.slice(pos1, pos1 + max));
}

// const { argv } = require('node:process');

// if (argv.length < 3) {
//   console.log('');
// } else {
//   const d = argv.slice(2);
//   let f = d[0],
//     m = 0,
//     i,
//     j,
//     s;

//   for (i = 0; i < f.length; i++) {
//     for (
//       j = 0;
//       i + j < f.length &&
//       d.every((k) => {
//         return k.includes(f.slice(i, i + j + 1));
//       });
//       j++
//     );

//     if (j > m) {
//       m = j;
//       s = i;
//     }
//   }
//   console.log(f.slice(s, s + m));
// }
