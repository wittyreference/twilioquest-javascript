function flattenArray(arr) {
    // Check if the input array is empty
    if (arr.length === 0) {
      return "Pure Ducktypium!";
    }
  
    // Initialize a result array to hold the flattened elements
    const result = [];
  
    // Helper function to flatten an element
    function flatten(el) {
      // If the element is an array, flatten its elements
      if (Array.isArray(el)) {
        for (const subEl of el) {
          flatten(subEl);
        }
      } else {
        // If the element is not an array, add it to the result array
        result.push(el);
      }
    }
  
    // Flatten the elements of the input array
    for (const el of arr) {
      flatten(el);
    }
  
    // Return the flattened result array
    return result;
  }
  

  /* This function works by recursively flattening the elements of the input array. It uses a helper function called flatten to process each element. If the element is an array, flatten recursively calls itself to flatten the elements of the subarray. If the element is not an array, it is added to the result array.

If the input array is empty, the function returns the string "Pure Ducktypium!". */ 

/*The function is called with an array as an argument.
The function checks if the input array is empty.
    If it is empty, the function returns the string "Pure Ducktypium!".
    If it is not empty, the function moves on to the next step.
The function initializes an empty array called result to hold the flattened elements.
The function defines a helper function called flatten that takes an element as an argument.
    If the element is an array, the flatten function iterates over the elements of the array and recursively calls itself to flatten each element.
    If the element is not an array, it is added to the result array.
The function iterates over the elements of the input array and calls the flatten function on each element.
After the loop completes, the function returns the result array, which now contains all the flattened elements of the input array.
*/
