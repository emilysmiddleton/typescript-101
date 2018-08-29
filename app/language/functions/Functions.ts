console.log('**********************************************');
console.log('* Functions                                  *');
console.log('**********************************************');

// Here are three different ways of writing the same function, simply adding two numbers

// 'Regular'
function add1(x: number, y: number): number {
    return x + y;
}

// Similar to above, but assigning the function to a constant.
const add2 = function (x: number, y: number):number { return x + y};

// 'Fat arrow'
const add3 = (x: number, y: number):number => x + y;

console.log(add1(5, 7));
console.log(add2(5, 7));
console.log(add3(5, 7));


console.log("\n*** Lambda functions ***");

/**
 * A lambda function is a function that can be passed to another function as data.
 * Reduce is a method on arrays that turns the array into a single value.
 * The lambda function defines how to combine ech two elements.
 *
 * This example uses the 'add' function to sum the array.
 *
 */
console.log([1, 2, 3, 4 ,5].reduce(add2, 1));

console.log("\n*** Anonymous functions ***");

// An anonymous function is simply a function that does now have a name.
// This example uses an anonymous function to multiple the numbers in the array

console.log([1, 2, 3, 4 ,5].reduce((x: number, y: number):number => x * y, 1));

// Not all anonymous functions are lambdas and vice-versa!