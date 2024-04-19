import { createHash } from 'crypto';
import fs from 'node:fs';

const fileNames = fs.readdirSync('./data/');

const dataHex = [];
// 1, 2
for (const fName of fileNames) {
  const fileBuffer = fs.readFileSync(`./data/${fName}`);
  //Calculate hash for every file here.

  const hash = createHash('SHA3-256');
  const finalHex = hash.update(fileBuffer).digest('hex').toLowerCase();
  dataHex.push(finalHex);
}

// 3 4
let dataHexSort = dataHex.sort().join('').concat('efim0424@gmail.com');

console.log(dataHexSort);

createSHA3(dataHexSort);

function createSHA3(data) {
  const fileBuffer = data;
  //Calculate hash for every file here.

  const hash = createHash('SHA3-256');
  const finalHex = hash.update(fileBuffer).digest('hex').toLowerCase();

  // Ответ
  console.log(finalHex);
}
