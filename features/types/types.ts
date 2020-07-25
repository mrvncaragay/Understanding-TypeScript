/*
  Defination: 
    Easy way to refer to the different properties and functions that a VALUE has.
      A VALUE is anything we can assign to a variable 
        e.g string, var, const, let, function, object, undefined, null, boolean, class, array
*/

/*
  Types
    Primitive Types: number, string, boolean, symbol, void, null, undefined
    Object Types: Functions, Classes, Arrays, Objects
*/

/*
  Why do we care about types?
    - Types are used by the Typescript Compiler to analyzed our code for errors
    - Types allow other engineers to understand what values are flowing around our codebase
*/

/* 
  Type annotations
    Code we add to tell Typescript what type of value a variable will refer to
*/

/* 
  Type inference
    Typescript tries to figure out what type of value a variable refers to
*/

// Date
const today = new Date();

// Object
const person = {
  age: 20,
};

// Class
class Color {}

const red = new Color();
