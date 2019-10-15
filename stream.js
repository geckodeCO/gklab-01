'use strict'
const fs = require('fs')
console.time('Response time')
for (var x = 0; x <= 5; x++) {
  fs.readFileSync('file.txt', 'utf8')
}
// for (var x = 0; x <= 10; x++) {
//   const readStream = fs.createReadStream('file.txt', {
//     encoding: 'utf8'
//   })
// }
console.timeEnd('Response time')
