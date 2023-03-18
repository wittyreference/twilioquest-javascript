function addFirstToLast(inputArray){
    // Declare a variable called firstAndLast and initialize it to an empty string
    let firstAndLast = '';

    // Check if the length of the inputArray is greater than 0
    if (inputArray.length > 0) {
        // If the length of the inputArray is greater than 0,
        // set firstAndLast to the concatenation of the first and last elements of the array
        firstAndLast = inputArray[0] + inputArray[inputArray.length-1];
        // I would have never figured out inputArray.length-1 on my own
    }

    // Return the value of firstAndLast
    return firstAndLast;
}

// Log the result of calling addFirstToLast with different arrays as arguments
console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));
