function calculateMass(freightItems) {
    let totalMass = 0;

    totalMass = freightItems.reduce((sum, current, index) => sum += freightItems[index].length, 0);

    return totalMass;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const mass = calculateMass(['dog', 'donkey', 'cat']);
  console.log('Total mass of items is ' + mass); // should be 12