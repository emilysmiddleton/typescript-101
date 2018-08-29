console.log('**********************************************');
console.log('* Logic functions                            *');
console.log('**********************************************');


const animal:string = 'cat';
const colour:string = 'brown';

console.log("\n*** Equality ***");

 //  The triple equals operator (===) compares two things for equality.
 //  They are considered equal if they have the same type and the same value.
console.log('is cat? ' + (animal === 'cat'));

// !== is the inverse of triple equals; it says when two things aren't equal.
console.log('is not dog? ' + (animal !== 'dog'));

console.log("\n*** NOT ***");

// An exclamation mark on its own will invert any boolean statement.
// This is equivalent to the above.
console.log('is not dog? ' + !(animal === 'dog'));

console.log("\n*** AND ***");

// The double ampersand operator (&&) returns true only if both inputs
// are true.
console.log('is brown dog? ' + (animal === 'dog' && colour === 'brown'));

console.log("\n*** OR ***");

// The double pipe operator (||) returns true if either input is true.
console.log('is brown or a dog? ' + (animal === 'dog' || colour === 'brown'));

console.log("\n*** Short Circuiting ***");

// Both && and ||  operators 'short circuit', meaning they't evaluate the
// right-hand side if they doesn't need to.
// Here, the right hand side has a 'side-effect' - it writes the colour to the
// console. You'll see that you don't get that log for dogs, but you for cats

console.log('brown cat? ' + (animal === 'cat' && isBrown(colour)));
console.log('brown dog? ' + (animal === 'dog' && isBrown(colour)));

function isBrown(colour: string): boolean {
    console.log("Checking colour " + colour);
    return colour === 'brown';
}