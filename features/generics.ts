class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']); // type inference generics
const arr2 = new ArrayOfAnything([1, 2, 3]); // type inference generics

// Example of generics with functions

function prinStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log([arr[i]]);
  }
}

function prinNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log([arr[i]]);
  }
}

function anyArr<T>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log([arr[i]]);
  }
}

anyArr<number>([1, 2, 3]); // type inference with generics, but to make really sure add the anotate the type

// Generic Constraint
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars([new Car(), new House()]);
