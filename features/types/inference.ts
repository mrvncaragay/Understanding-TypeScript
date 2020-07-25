/* 
  Type inference
    Typescript tries to figure out what type of value a variable refers to
*/

const color = 'red'; // const color is a variable declaration, 'red' is a variable initialization
// RULE:
// If declaration and initialization are on the same line,
// Typescript will figure it out the type of 'color' for us.
// In this case color is a type string.

// When to use Type inference
// ALWAYS!!
// Use it when we can!

let nums2 = 1; // Removing type : number tells typescript to decide which types to assign to nums
// nums = 'Name'; // Error: nums is not a type number

// Typescript tries to figure out what type of value a function will return

// Function
const logNumber2 = (i: number) => {
  console.log(i);
  return 10;
};

// Type annotation for function
//  - No type inference for a function parameters
//  - Type inference works out output, but we wont use it!!

const add2 = (a: number, b: number) => {
  return a + b;
};

// We always want to use return annotation, TS does not care and will assume
// that this functon returns void, but we wanted to return a type number
const subtract = (a: number, b: number): number => {
  //a - b;
  return a - b;
};
