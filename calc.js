const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const square = (a) => a * a;
const squareRoot = (a) => Math.sqrt(a);
const power = (a, b) => Math.pow(a, b);
const factorial = (a) => {
  if (a === 0 || a === 1) return 1;
  return a * factorial(a - 1);
};
const isEven = (a) => a % 2 === 0;
const isOdd = (a) => a % 2 !== 0;

const calcObj = {
  add,
  subtract,
  multiply,
  divide,
  square,
  squareRoot,
  power,
  factorial,
  isEven,
  isOdd,
};
module.exports = calcObj;
