function isPalindrome(str) {
    // Normalize the string by removing all non-alphanumeric characters and converting to lowercase
    const normalizedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
    // Iterate over the characters in the normalized string and check if they form a palindrome
    for (let i = 0; i < normalizedStr.length / 2; i++) {
      if (normalizedStr[i] !== normalizedStr[normalizedStr.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }

/* The for loop iterates over the characters in the normalized string from index 0 to the middle of the string. The loop continues as long as i is less than normalizedStr.length / 2. The loop variable i is incremented by 1 at the end of each iteration.

Inside the loop, there is an if statement that compares the character at index i in the normalized string with the character at index normalizedStr.length - 1 - i in the string. The index normalizedStr.length - 1 - i corresponds to the character at the same distance from the end of the string as the character at index i is from the beginning of the string.

For example, if normalizedStr is the string "abcba", then on the first iteration of the loop, i is 0, so the characters being compared are normalizedStr[0] ("a") and normalizedStr[normalizedStr.length - 1 - 0] ("a"). On the second iteration, i is 1, so the characters being compared are normalizedStr[1] ("b") and normalizedStr[normalizedStr.length - 1 - 1] ("b"). And so on.

If the characters being compared are not equal, the if statement returns false. Otherwise, the loop continues to the next iteration.

If the loop completes without finding any mismatched characters, it means that the string is a palindrome, so the function returns true.
*/