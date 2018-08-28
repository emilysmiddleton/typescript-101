console.log('**********************************************');
console.log('* How to create, query and manipulate arrays *');
console.log('**********************************************');

arrayCreationAndAddition();
arrayProperties([1, 2, 3, 5, 8, 13, 21, 34]);
arrayDeletion([1, 2, 3, 5, 8, 13, 21, 34]);
arrayManipulation(['A','B','D']);

function arrayCreationAndAddition() {

    console.log("\n*** Creating arrays and adding new elements ***");

    // Creating an an array is just a case of listing the starting elements.
    // This is an array of letters:
    const letters = ['A', 'B', 'C'];
    console.log('Original array of letters: ' + letters);

    // Use `push` to add append more items to the end.
    letters.push('D', 'E', 'F');
    console.log('After calling \'push\': ' + letters);

    // Arrays can be combined using concat
    console.log("Concatenating two arrays: " + [1, 2, 3, 4].concat([5, 6, 7, 8]));
}

function arrayProperties(myArray) {

    console.log("\n*** Properties of the array ***");

    // Use `length` to find the size
    console.log('Size of array is: ' + myArray.length);

    // To find out where a specific element is in the array,
    // use `indexOf`
    console.log('The number 5 is at position: ' + myArray.indexOf(5));

    // There is no built-in 'contains' method, as there is in other languages.
    // You'll have to check the value of indexOf.
    console.log('Contains the number 5?: ' + ( myArray.indexOf(5) >= 0));

    // `every` and `some` can be used to perform a boolean function against the elements of the array
    // and aggregate the result.
    // `every` is essentially an `and`, while `some` is an `or`.
    console.log('Is every number greater than 5?: ' + myArray.every(number => number > 5));
    console.log('Are any numbers greater than 5?: ' + myArray.some(number => number > 5));
}

function arrayDeletion(myArray) {

    console.log("\n*** Removing elements from the array ***");

    // Use `splice` to remove chunks from the array.
    // This will remove 3 numbers, starting at position 2;
    myArray.splice(2, 3);
    console.log('After calling \'splice\': ' + myArray);

    // So removing a specific element (13) is quite verbose:
    if (myArray.indexOf(13) >= 0) {
        myArray.splice(myArray.indexOf(13), 1)
    }
    console.log('After removing 13: ' + myArray);

    // If you want to remove certain elements (those that match some test) from your array,
    // use `filter`. As `map`, this will return a new array rather than edit your existing array.
    const greaterThanFive = myArray.filter(number => number > 5);
    console.log('All numbers greater than 5: ' + greaterThanFive);
}

function arrayManipulation(myArray)  {

    console.log("\n*** Manipulating the elements of the array ***");

// If you want to transform the elements in some way, use `map`.
// This applies a user-defined function to each item in the array, and results in a new array.
// Note that the original array is unchanged.
    const lowerCaseLetters = myArray.map(letter => letter.toLowerCase());
    console.log('new array of lowercase letters: ' + lowerCaseLetters);
    console.log('original array unchanged: ' + myArray);

// If you want to change the items of the array in place, you will need to use `foreach`.
// The callback function provides the element, index and original array.
    myArray.forEach(function(part, index, theArray) {
        theArray[index] = part.toLowerCase();
    });
    console.log('after converting to lowercase: ' + myArray);

}





