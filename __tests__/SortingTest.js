const Sorting = require('../SortingModule');

test('sorts an array in ascending order', () => { 
    const arr = [-9, 2, 4, 5, -198, 1000];
    const sortingObj = new Sorting(arr);
    expect(sortingObj.sortInAscendingOrder()).toStrictEqual([-198, -9, 2, 4, 5, 1000]);
});

test('sorts an array in descending order', () => { 
    const arr = [-9, 2, 4, 5, -198, 1000];
    const sortingObj = new Sorting(arr);
    expect(sortingObj.sortInDescendingOrder()).toStrictEqual([1000, 5, 4, 2, -9, -198]);
});

test('sorts an already sorted array in ascending order', () => { 
    const arr = [1, 2, 3, 4, 5];
    const sortingObj = new Sorting(arr);
    expect(sortingObj.sortInAscendingOrder()).toStrictEqual([1, 2, 3, 4, 5]);
});

test('sorts an already sorted array in descending order', () => { 
    const arr = [5, 4, 3, 2, 1];
    const sortingObj = new Sorting(arr);
    expect(sortingObj.sortInDescendingOrder()).toStrictEqual([5, 4, 3, 2, 1]);
});

test('sorts an array with duplicate values in ascending order', () => { 
    const arr = [5, 1, 3, 5, 2, 5];
    const sortingObj = new Sorting(arr);
    expect(sortingObj.sortInAscendingOrder()).toStrictEqual([1, 2, 3, 5, 5, 5]);
});

test('sorts an array with duplicate values in descending order', () => { 
    const arr = [5, 1, 3, 5, 2, 5];
    const sortingObj = new Sorting(arr);
    expect(sortingObj.sortInDescendingOrder()).toStrictEqual([5, 5, 5, 3, 2, 1]);
});

test('sorts an array with negative values in ascending order', () => { 
    const arr = [-1, -3, -2, -5, -4];
    const sortingObj = new Sorting(arr);
    expect(sortingObj.sortInAscendingOrder()).toStrictEqual([-5, -4, -3, -2, -1]);
});

test('sorts an array with negative values in descending order', () => { 
    const arr = [-1, -3, -2, -5, -4];
    const sortingObj = new Sorting(arr);
    expect(sortingObj.sortInDescendingOrder()).toStrictEqual([-1, -2, -3, -4, -5]);
});

test('sorts an empty array', () => { 
    const arr = [];
    const sortingObj = new Sorting(arr);
    expect(sortingObj.sortInAscendingOrder()).toStrictEqual([]);
    expect(sortingObj.sortInDescendingOrder()).toStrictEqual([]);
});

test('sorts an array with one element in ascending and descending order', () => { 
    const arr = [1];
    const sortingObj = new Sorting(arr);
    expect(sortingObj.sortInAscendingOrder()).toStrictEqual([1]);
    expect(sortingObj.sortInDescendingOrder()).toStrictEqual([1]);
});
