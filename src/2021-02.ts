import { readFileSync } from 'fs';

type Command = 'up' | 'down' | 'forward';
type Operation = {
  command: Command,
  distance: number
};

const input = readFileSync(__filename.replace('.ts', '.txt')).toString();
const operations: Operation[] = input.split("\n").map(line => {
  const parts = line.split(/\s+/, 2);
  return {
    command: parts[0] as Command,
    distance: parseInt(parts[1]),
  }
});

// https://adventofcode.com/2021/day/2
function part1() {
  let horizontal = 0;
  let depth = 0;

  operations.forEach(op => {

    switch (op.command) {
      case 'forward': horizontal += op.distance; break;
      case 'up': depth -= op.distance; break;
      case 'down': depth += op.distance; break;
      default:
        throw new Error("Unknown command:\n" + JSON.stringify(op));
    }
  })

  console.log('Part 1', { horizontal, depth, answer: horizontal * depth });
}

// https://adventofcode.com/2021/day/2#part2
function part2() {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  operations.forEach(op => {

    switch (op.command) {
      case 'forward': 
        horizontal += op.distance;
        depth += (op.distance * aim);
        break;
      case 'up': aim -= op.distance; break;
      case 'down': aim += op.distance; break;
      default:
        throw new Error("Unknown command:\n" + JSON.stringify(op));
    }
  })

  console.log('Part 2', { horizontal, depth, answer: horizontal * depth });
}

part1();
part2();