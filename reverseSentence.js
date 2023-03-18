function reverseSentence(input) {
    // Split the input string into an array of words
    const words = input.split(" ");

    // Remove the punctuation from the end
    words[words.length - 1] = words[words.length - 1].replace(/[^\w\s]/gi, '');
  
    // Reverse the order of the words in the array
    const reversedWords = words.reverse();
  
    // Make the last word lowercase
    reversedWords[reversedWords.length - 1] = reversedWords[reversedWords.length - 1].toLowerCase();

    // Capitalize the first letter of the first word
    reversedWords[0] = reversedWords[0].charAt(0).toUpperCase() + reversedWords[0].slice(1);
  
    // Join the reversed array of words into a single string
    const reversedString = reversedWords.join(" ");
  
    // Get the punctuation from the original input string
    const punctuation = input.slice(-1);
  
    // Remove any punctuation from the first word
    reversedString[0] = reversedString[0].replace('!', '');

    // Append the punctuation to the reversed string
    return reversedString + punctuation;
  }
  
console.log("Test case 1:");
console.log(reverseSentence("How are you today?"));

console.log("Test case 2:");
console.log(reverseSentence("I visited Ethiopia last year."));

console.log("Test case 3:");
console.log(reverseSentence("Hurray!"));

console.log("Test case 4:");
console.log(reverseSentence("You did it!")); // prints "It did you!"