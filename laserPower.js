function calculatePower(powerSettings) {
  // Use the Array.map() method to create a new array that contains all of the numbers in the input array
  // multiplied by two
  const adjustedNumbers = powerSettings.map((number) => number * 2);
  // Use the Array.reduce() method to add all of the numbers in the adjustedNumbers array together
  // and assign the result to the totalPower variable
  const totalPower = adjustedNumbers.reduce((acc, current) => acc + current, 0);
  // Return the totalPower
  return totalPower;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const laserPower = calculatePower([1, 3, 8]);
  console.log("Required laser power is " + laserPower); // should be 24