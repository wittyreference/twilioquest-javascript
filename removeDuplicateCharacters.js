function removeDuplicateCharacters(str) {
    // Initialize an empty result string
    let result = "";
  
    // Initialize a variable to keep track of the previous character seen
    let previousChar = "";
  
    // Iterate over the characters in the input string
    for (let i = 0; i < str.length; i++) {
      // Get the current character
      const currentChar = str[i];
  
      // If the current character is different from the previous character, add it to the result string
      if (currentChar !== previousChar) {
        result += currentChar;
        // Update the previous character
        previousChar = currentChar;
      }
      // If the current character is the same as the previous character, skip it
    }
  
    // Return the resulting string
    return result;
  }
  