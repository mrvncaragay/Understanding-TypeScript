export class NumbersCollection {
  constructor(public data: number[]) {}

  // Reference it as .length instead of invoking a function
  get length(): number {
    return this.data.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    [this.data[leftIndex], this.data[rightIndex]] = [this.data[rightIndex], this.data[leftIndex]];
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
}
