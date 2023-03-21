//Iterate through the array -- beginning with first index -- to search for a stored value which matches that which is passed into the function. If it is found, return the index where the value is located at. If the array doesn't include the value, return -1.   -(Paraphrased from prompt 1 in [Comp Sci Wk 4,] Lsn 2). 

function bruteForceSearch(num, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;  //Executes only if the above loop ends without the if-statement triggering.
}

export default bruteForceSearch;