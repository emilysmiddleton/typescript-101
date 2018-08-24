/**
 *  The triple equals operator (===) compares two things for equality.
 *  They are considered equal if they have the same type and the same value.
 */
export function isDog(animal: string): boolean {
    return animal === 'dog';
}

/**
 * !== is the inverse of triple equals; it says when two things aren't equal.
 */
export function isNotADog(animal: string): boolean {
    return animal !== 'dog'
}

/**
 * An exclamation mark on its own will invert any boolean statement.
 * This is equivalent to the above.
 */
export function isNotADog2(animal: string): boolean {
    return !(animal === 'dog')
}

/**
 *  The double ampersand operator (&&) returns true only if both inputs
 *  are true.
 */
export function isBrownDog(animal: string, colour: string): boolean {
    return animal === 'dog' && colour === 'brown';
}

/**
 *  This operator 'short circuits', meaning it doesn't evaluate the
 *  right-hand side if it doesn't need to.
 *
 *  Here, the right hand side has a 'side-effect' - it writes the colour to the
 *  console. Run the tests and you'll see that you don't get that log for dogs.
 */
export function isBrownDogShortCircuit(animal: string, colour: string): boolean {
    return animal === 'dog' && isBrown(colour);
}

function isBrown(colour: string): boolean {
    console.log("Checking colour " + colour);
    return colour === 'brown';
}

/**
 *  The double pipe operator (||) returns true if either input is true.
 *  Like && this will short-circuit, meaning it will only evaluate the
 *  second argument if animal is not a dog.
 */
export function isDogOrCat(animal: string): boolean {
    return animal === 'dog' || animal === 'cat';
}

