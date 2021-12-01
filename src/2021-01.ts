import { readFileSync } from 'fs';

const input = readFileSync(__filename.replace('.ts', '.txt')).toString();
const depths = input.split(/\s+/g).map(Number);

let increases = 0;
for (let i = 1; i < depths.length; i++) {
  if (depths[i] > depths[i-1]) increases++;
}

console.log(increases);