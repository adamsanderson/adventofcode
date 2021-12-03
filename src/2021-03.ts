import { readFileSync } from 'fs';

const input = readFileSync(__filename.replace('.ts', '.txt')).toString();
const lines = input.split("\n").map(line => line.trim());

// https://adventofcode.com/2021/day/3

// Initialize an array with 0s for each bit in the first line
const bitCount = lines[0].split("").map(() => 0);

lines.forEach((line) => {
  for (let i=0; i<line.length; i++) {
    bitCount[i] += line[i] === "0" ? -1 : 1;
  }
});

const gammaString = bitCount.map(b => b < 0 ? "0" : "1").join("");
const epsilonString = bitCount.map(b => b < 0 ? "1" : "0").join("");
const gamma = parseInt(gammaString, 2);
const epsilon = parseInt(epsilonString, 2);

console.log('Part 1', {
  gammaString,
  epsilonString,
  gamma,
  epsilon,
  total: gamma * epsilon
});

