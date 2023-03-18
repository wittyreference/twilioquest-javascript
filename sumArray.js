function sumArray(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    
    return sum; 
  }
  
  console.log("Test case 1:");
  console.log(sumArray([1, 2, 3]));
  
  console.log("Test case 2:");
  console.log(sumArray([-1, 0, 1]));
  
  console.log("Test case 3:");
  console.log(sumArray([100, 12.0, -4.5]));