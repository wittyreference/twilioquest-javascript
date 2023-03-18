function differenceMinMax(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
      // If the array is empty, return 0
      return 0;
    }
  
    // Set the initial values of min and max to the first element in the array
    let min = numbers[0];
    let max = numbers[0];
  
    // Loop through the rest of the elements in the array
    for (let i = 1; i < numbers.length; i++) {
      // If the current element is less than the current minimum, update the value of min
      if (numbers[i] < min) {
        min = numbers[i];
      }
      // If the current element is greater than the current maximum, update the value of max
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    // Return the difference between the maximum and minimum values
    return max - min;
  }
  
  console.log("Test case 1:");
  console.log(differenceMinMax([1, 2, 3, 4, 5]));
  
  console.log("Test case 2:");
  console.log(differenceMinMax([6, 2, 3]));
  
  console.log("Test case 3:");
  console.log(differenceMinMax([100, 0]));