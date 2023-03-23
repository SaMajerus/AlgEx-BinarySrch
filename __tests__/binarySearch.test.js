import binarySearch from '../src/binarySearch.js';

describe('binarySearch', () => {

  const sortedArray = [3, 9, 14, 34, 45, 56, 63, 72, 88, 101, 132, 151, 168, 192];

  test('should return the location in the array that contains the specified value', () => {
    expect(binarySearch(3, sortedArray)).toEqual(0);
    expect(binarySearch(9, sortedArray)).toEqual(1);
    expect(binarySearch(14, sortedArray)).toEqual(2);
    expect(binarySearch(34, sortedArray)).toEqual(3);
    expect(binarySearch(45, sortedArray)).toEqual(4);
    expect(binarySearch(56, sortedArray)).toEqual(5);
    expect(binarySearch(63, sortedArray)).toEqual(6);
    expect(binarySearch(72, sortedArray)).toEqual(7);
    expect(binarySearch(88, sortedArray)).toEqual(8);
    expect(binarySearch(101, sortedArray)).toEqual(9);
    expect(binarySearch(132, sortedArray)).toEqual(10);
    expect(binarySearch(151, sortedArray)).toEqual(11);
    expect(binarySearch(168, sortedArray)).toEqual(12);
    expect(binarySearch(192, sortedArray)).toEqual(13);
  });

  test('should search for a value that is not stored in the array, and return -1', () => {
    expect(binarySearch(999, sortedArray)).toEqual(-1);
  });
});