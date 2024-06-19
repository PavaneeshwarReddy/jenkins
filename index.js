class Sorting {
    constructor(arr) {
        this.arr = arr;
    }
    sortInAscendingOrder() {
        return this.arr.sort((a, b) => a - b);
    }
    sortInDescendingOrder() {
        return this.arr.sort((a, b) => b - a);
    }
}



