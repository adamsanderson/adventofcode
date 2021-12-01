import { readFileSync } from 'fs';

const input = readFileSync(__filename.replace('.ts', '.txt')).toString();
const depths = input.split(/\s+/g).map(Number);

// Count increases in pairs
let increases = 0;
for (let i = 1; i < depths.length; i++) {
  if (depths[i] > depths[i-1]) increases++;
}

console.log('Part 1', increases); //=> 1559

// Count increases in sums of three, it's nearly the same solution since
// in this example:
//
// AAA
//  BBB
//
// The A triplet and B triplet only differ in A0 and B2.
let slidingIncreases = 0;
for (let i = 3; i < depths.length; i++) {
  if (depths[i] > depths[i-3]) slidingIncreases++;
}

console.log('Part 2', slidingIncreases); //=> 1600