function transform(freightItems) {
    // This is an array variable you can override with your transformed array
    let transformedItems = [];
  
    return freightItems.map((string) => string.toUpperCase());

  
    return transformedItems;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const transformed = transform(["dog", "ray gun", "cat"]);
  console.log("Transformed Items");
  console.log(transformed); // should be ['DOG', 'CAT', 'ZIPPERS']