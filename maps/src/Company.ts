import faker from 'faker';
import { Mappable } from './CustomMap';

// Adding implements TS will points the root of the error
export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.name}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
