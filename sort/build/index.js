"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var StringsCollection_1 = require("./StringsCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 1, 4, 5, 3, 0, -1]);
numbersCollection.sort();
//console.group(numbersCollection.data);
var str = new StringsCollection_1.StringsCollection('Xaayb');
str.sort();
//console.log(str.data);
var linkedlist = new LinkedList_1.LinkedList();
linkedlist.add(100);
linkedlist.add(0);
linkedlist.add(-1);
linkedlist.sort();
linkedlist.print();
