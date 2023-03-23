//P[suedo]-code from Lsn 2--
/* 
function binarySearch(numberWeWantToFind, arrayWeAreSearching) {
  let lowerIndex = 0; // The beginning index of an array will always be 0.
  let upperIndex = arrayWeAreSearching.length - 1; // The total number of elements in the array.
  // Next, we need our while loop. Note the condition. If the lowerIndex is ever greater than the upperIndex, that means that we've searched the entire array and the value isn't included. We can stop the loop and move on.
  while (lowerIndex <= upperIndex) {
    let middleIndex = Math.floor((lowerIndex + upperIndex)/2);  // We need to add the lowerIndex and upperIndex together and then divide them by 2 to determine the current middleIndex. We also need to round down to the nearest whole number if necessary. This will happen each time through the loop.
    if (arrayWeAreSearching[middleIndex] === numberWeWantToFind) {
      // This means we've found the number! We can just return the middleIndex.
      return middleIndex;
    } else if (arrayWeAreSearching[middleIndex] < numberWeWantToFind) {
      // This means that the number we are looking for is higher than the element in the array. We can eliminate every number that is less than or equal to middleIndex. To do that, we make the lowerIndex equal to middleIndex + 1.
      lowerIndex = middleIndex + 1;
    } else if (arrayWeAreSearching[middleIndex] > numberWeWantToFind) {
      // This means that the number we are looking for is lower than the element in the array. We can eliminate every number that is greater than or equal to middleIndex. To do that, we make upperIndex equal to middleIndex - 1.
      upperIndex = middleIndex - 1;
    }
  }
  // Note that we don't use an else condition just in case some other yucky thing we can't predict happens. Also if our loop never returns anything, it will end and return -1.
  return -1
}
*/


function binarySearch(num, array) {
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === num) {
  //     return i;
  //   }
  // }
  // return -1;  //Executes only if the above loop ends without the if-statement triggering.
}

export default binarySearch;