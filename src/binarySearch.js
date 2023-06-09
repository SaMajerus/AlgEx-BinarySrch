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
  let lowerIndex = 0;  //First index of 'array'. 
  let upperIndex = array.length - 1;  //Total number of elements in 'array'.

  // **'lowerIndex > upperIndex' IFF all indices of 'array' have been searched and the value is not included. 
  while (lowerIndex <= upperIndex) { 
    let middleIndex = Math.floor((lowerIndex + upperIndex)/2);  //'Math.floor' rounds down to the nearest whole number. 
    
    if (array[middleIndex] === num) {  //'num' is found! Thus, 'middleIndex' can be returned. 
      return middleIndex;
    } else if (array[middleIndex] < num) {  //'num' > 'array[middleIndex]'. Thus, all indices <= 'middleIndex' can be eliminated from consideration. 
      lowerIndex = middleIndex + 1;
    } else if (array[middleIndex] > num) {  //'num' < 'array[middleIndex]'. Thus, all indices >= 'middleIndex' can be eliminated from consideration. 
      upperIndex = middleIndex - 1;
    }
  } //Else: If the loop ends without returning anything, return -1.
  return -1;
}


// function recursiveBinarySearch(number, array, beginIndex = 0, endIndex = array.length - 1) {
//   let middleIndex = Math.floor((beginIndex + endIndex)/2);
//   if (array[middleIndex] === number) {
//     return middleIndex;
//   } else if (beginIndex >= endIndex) {
//     return -1
//   } else if (array[middleIndex] < number) {
//     beginIndex = middleIndex + 1;
//     return recursiveBinarySearch(number, array, beginIndex, endIndex);
//   } else if (array[middleIndex] > number) {
//     endIndex = middleIndex - 1;
//     return recursiveBinarySearch(number, array, beginIndex, endIndex);
//   }
// }

export default binarySearch;