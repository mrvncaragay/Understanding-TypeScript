/* 
  Type annotations
    Code we add to tell Typescript what type of value a variable will refer to
*/

// When to use
// - When we declare a variable on one line then initialize it later
// - When we want a variable to have a type that cant be inferred
// - When a function returbs the 'any' type abd we need to clarify the value

// - Function that returns the 'any' type
// const json = '{"x": 10, "y": 20}';
// const coordinates: { x: number; y: number } = JSON.parse(json); // TS cant predict what JSON.parse returns
// console.log(coordinates);
// coordinates.whatever // works

// To resolve using the type 'any' using annotation
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // TS cant predict what JSON.parse returns

// coordinates.whatever // Error: 'whatever' does not exists on a type {x, y}

// - When we declare a variable and initialize it later
let words: string[] = ['red', 'green', 'blue'];
let foundWord: boolean;

words.forEach((word) => {
  if (word === 'green') {
    foundWord = true;
  }
});

console.log(foundWord);

// - When we want a variable to have a type that cant be inferred correctly
let nums = [-10, -1, 12];
let numberAboveZero: boolean | number; // Assign the above number if we found a num > 0 and false if not found
// Note: this variable will either be number or boolean type

nums.forEach((num) => {
  if (num > 0) {
    numberAboveZero = num;
  }
});

/******
 *
 *
 *
 *
 *
 *
 ******/

// Variables
let apples: number = 5; //: number is the type annotation
// apples = 'Name'; // Error: 'Name' is not a type number

let speed: string = 'fast';
// speed = 10; // Error: 10 is not a type string

// Boolean
let hasName: boolean = true;

// null
let nothingMuch: null = null;

// undefined
let nothing: undefined = undefined;

// built in objects 'Date object'
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green'];
// colors = ['blue', 'yellow', 1]; // Error: 1 is not a type string

let numbers: [number, string] = [1, 'name'];
let truths: boolean[] = [true, true];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// point = { x: 'Marv' }; // Error: x is not a type number

// Code we add to tell Typescript what type of arguments a function will receive
// and what type of values it will return

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
  return 10; // this works because return is returning type 'any'
  // below is the solution to set a return type to a function
};

// Type annotation for function
// - We always add annotation for a function parameters
// - We want to use return annotation, because we might return a unwanted return
const add = (a: number, b: number): number => {
  return a + b;
};

// Using named function
function devide(a: number, b: number): number {
  return a / b;
}

// using Annonymous function
const multiple = function (a: number, b: number): number {
  return a * b;
};

// Void and Never
// void - will not return anything
// never - if we truly know that a function will not return anything ever
const logger = (message: string): void => {
  // return nothing, but can return null or undefined
  throw new Error(message);
};

// Destructuring with Annotation
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
