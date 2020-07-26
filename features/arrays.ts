// Typed Arrays - Arrays where each element is some consistent type of value

// When to use arrays
// Any time we need to represent a collection of records with some arbitrary sort order

const carMakers = ['ford', 'toyota', 'chevy']; // Type inference assigned a type array of string
const carMakers2: string[] = ['ford', 'toyota', 'chevy']; // Type annotation to be explicit
const carMakers3 = []; // Type 'any' avoid it

// Complex array of object
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMake2: string[][] = [];

// Why do we care?
/*
 *  - 1) TS can do type inderence when extracting values from an array
 *  - 2) TS can prevent us from adding incompatible values to the array
 *  - 3) We can get help with 'map', 'forEach', 'reduce' functions
 *  - 4) Flexible - arrays can still contain multiple different types
 */

// 1)
const car = carMakers[0]; // Type inference - type string
const myCar = carMakers.pop(); // Type inference - type string

// 2)
// carMakers.push(1); // Error: 1 is not a type string in an array

// 3)
carMakers.map((car: string): string => {
  return car;
});

// 4)
const importantDates = [new Date(), '2030-10-10']; // Inference
const importantDates2: (string | Date)[] = [new Date(), '2030-10-10']; // Annotation

importantDates.push(new Date());
// importantDates.push(100); // Error: 100 is not a Date or string type
