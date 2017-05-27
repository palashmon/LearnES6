// Named Export
export const apiKey = 'abc123';

export const url = 'https://github.com/palashmon';

export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

const age = 100;
const dog = 'snickers';

// Rename before export
export { age as old, dog };