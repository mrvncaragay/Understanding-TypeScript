/**
 *  Classes - Blueprint to create an object with some fields(values) and methods
 *            (functions) to represent a thing.
 *
 *  Modifiers
 *    - public this method can be called any where, any time
 *    - private this method can only be called by other methods in this class
 *    - protected this method can be called other methods in this class, or by other methods in child classes
 *
 *  Why do we care - Strong reusable code in TS
 *
 *  Where to use classes - if we have an object that we can create a blueprint of that object
 *
 **/

class Vehicle {
  // color is all over the place here
  //color: string;

  // to resolve it in TS, add public in the parameters
  constructor(public color: string) {}

  protected hunk(): void {
    console.log('Print this!' + this.color);
  }
}

// const ve = new Vehicle();
// ve.hunk(); // accessible only within class Vehicle and its subclasses.

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProces(): void {
    this.drive();
    this.hunk();
  }
}

const car = new Car('blue', 4);
