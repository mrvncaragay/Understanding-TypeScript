/**
 *  Tuple - Array-like structure where each element represent some property of a record
 *        - fixed order
 *
 *  When to use - csv file and represent a single row.
 *              - Hard to understand at a glance vs object
 *
 **/

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Or you can use 'Type Alias' to solve the issue below
type Drink = [string, boolean, number];

// Tuple - must be in order
const pepsi = ['brown', true, 40]; // Issue is values can be place into difference index
const pepsi2: Drink = ['brown', true, 40]; // To fix this issue, define an annotation

// Why we're not going to use tuple often
const carSpecs: [number, number] = [400, 3354];

// rewrite it as an object

const carStats = {
  horsepower: 400,
  weight: 3354,
};
