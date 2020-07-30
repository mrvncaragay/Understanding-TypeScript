import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 1, 4, 5, 3, 0]);

const sorter = new Sorter(numbersCollection);

sorter.sort();

console.log(numbersCollection.data);
