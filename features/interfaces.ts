/**
 *  Interfaces - Creates a new type, descriving the propery names and value
 *               types of an object
 *
 *  Note: Interfaces + Classes = How we get really string code reuse in TS
 *        and its going to help you design execelent application
 */

// To solve the issue below, create interface
interface Reportable {
  // Vehicle
  // name: string;
  // year: number;
  // broken: boolean;
  summary(): string; // This create a propery function that returns string
}

const oldCivic = {
  name: 'civic',
  year: 200,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// Long annotation bad!
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle(oldCivic);

// Correct good!!!
const printSummary = (item: Reportable): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken?: ${vehicle.broken}`);
  // or
  console.log(item.summary);
};

printSummary(oldCivic);
