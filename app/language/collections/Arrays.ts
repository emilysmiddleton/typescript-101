// Creating an an array is just a case of listing the starting elements.
// This is an array of letters:
const letters = ['A', 'B', 'C'];
console.log('original array of letters: ' + letters);

// Use `push` to add append more items to the end.
letters.push('D', 'E', 'F');
console.log('after calling \'push\': ' + letters);

// Use `length` to find the size
console.log('Size of array is: ' + letters.length);

// Use `splice` to remove chunks from the array.
// This will remove 3 letters, starting at position 1 ('B');
letters.splice(1, 3);
console.log('after calling \'splice\': ' + letters);

// To find out where a specific element is in the array,
// use `indexOf`

const ePosition = letters.indexOf('E');
console.log('The letter E is at position ' + ePosition);

// There is no built-in 'contains' method, as there is in other languages.
// You'll have to check the value of indexOf.
console.log('Contains the letter E: ' + ( ePosition >= 0));

// So removing a specific element ('E') is quite verbose:
if (ePosition >= 0) { letters.splice(ePosition, 1)}

console.log('after removing E: ' + letters);

letters.push('G', 'H', 'I' ,"J");

// If you want to transform the elements in some way, use `map`.
// This applies a user-defined function to each item in the array, and results in a new array.
// Note that the original array is unchanged.
const lowerCaseLetters = letters.map(letter => letter.toLowerCase());
console.log('new array of lowercase letters: ' + lowerCaseLetters);
console.log('original array unchanged: ' + letters);

// If you want to change the items of the array in place, you will need to use `foreach`.
// The callback function provides the element, index and original array.
letters.forEach(function(part, index, theArray) {
    theArray[index] = part.toLowerCase();
});
console.log('after converting to lowercase: ' + letters);


const numbers = [1, 2, 3, 5, 8, 13];

// `every` and `some` can be used to perform a boolean function against the elements of the array
// and aggregate the result.
// `every` is essentially an `and`, while `some` is an `or`.
console.log('Is every number greater than 5?: ' + numbers.every(number => number > 5));
console.log('Are any numbers greater than 5?: ' + numbers.some(number => number > 5));


// If you want to remove certain elements (those that match some test) from your array,
// use `filter`. As `map`, this will return a new array rather than edit your existing array.
const greaterThanFive = numbers.filter(number => number > 5);
console.log('All numbers greater than 5: ' + greaterThanFive);

// Arrays can be combined using concat

console.log("Concatenating two arrays: " + [1, 2, 3, 4].concat([5, 6, 7, 8]));