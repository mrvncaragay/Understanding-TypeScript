"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        // Reference it as .length instead of invoking a function
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        _a = [this.data[rightIndex], this.data[leftIndex]], this.data[leftIndex] = _a[0], this.data[rightIndex] = _a[1];
    };
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
