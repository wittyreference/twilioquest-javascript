function getFirstAmountSorted(inputArray, numberOfItems) {
    // Step 1: sort inputArray alphabetically
    inputArray.sort();

    // Step 2: create an array which contains the first N items of the sorted
    //         array - the number of items is provided in the numberOfItems 
    //         variable
    let sorted = inputArray.slice(0, numberOfItems); //what killed me here was not realizing I needed to pop the 0 in there to start the counting


    // Step 3: return the new array you created at step 2
    return sorted;
}

  
  // The lines of code below test your function when you execute your code in
  // the terminal - they are not required for your function to work
const newArray = getFirstAmountSorted(['first', 'second', 'third'], 2);
console.log(newArray); // << should print out ['apple', 'bat']