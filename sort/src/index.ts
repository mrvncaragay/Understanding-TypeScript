import { NumbersCollection } from './NumbersCollection';
import { StringsCollection } from './StringsCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 1, 4, 5, 3, 0, -1]);
numbersCollection.sort();
//console.group(numbersCollection.data);

const str = new StringsCollection('Xaayb');
str.sort();
//console.log(str.data);

const linkedlist = new LinkedList();
linkedlist.add(100);
linkedlist.add(0);
linkedlist.add(-1);

linkedlist.sort();
linkedlist.print();
