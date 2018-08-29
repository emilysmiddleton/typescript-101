console.log('**********************************************');
console.log('* Maths functions                            *');
console.log('**********************************************');

console.log("\n*** Basic operations ***");

console.log('adding 3 and 10: ' + (3 + 10));
console.log('subtracting 3 from 10: ' + (10 - 3));
console.log('multiplying 3 by 10: ' + (3 * 10));
console.log('dividing 10 by 2: ' + (10 / 2));

console.log("\n*** Rounding errors ***");

/**
 * Right, this is where things get interesting.
 * TypeScript numbers are floating points. Essentially, numbers are represented in binary:
 *
 * 001 = 1
 * 010 = 2
 * 100 = 4
 * ...
 *
 * 0.1 = 1/2
 * 0.01 = 1/4
 * 0.001 = 1/8
 * ...
 *
 * Decimal places that are finite in decimal representation, e.g. 0.1, are infinite in
 * binary: 0.1 = 0.001100110011...
 *
 * We can only store a finite number of decimate places, so we can get rounding errors.
 * 10 / 3 comes out as 3.3333333333333335
 *
 * Have a read of https://modernweb.com/what-every-javascript-developer-should-know-about-floating-points/
 */

console.log('dividing 10 by 3: ' + (10 / 3));

console.log("\n*** Modulo ***");

/**
 * '%' is the 'modulo' operator, i.e. it returns the remainder of dividing one number by another.
 *
 * This can be used on numbers with decimal places, but this is another instance where you
 * need to be careful about rounding.
 *
 * For example, 5.32 % 2 is not 1.32, it is 1.3200000000000003
 */

console.log('remainder of dividing 10 by 3: ' + (10 % 3));

console.log('\n*** Library functions ***');

// Math has a ton of useful functions.

console.log('Lower of 10 and 3: ' + Math.min(10, 3));

console.log('3^4: ' + Math.pow(3, 4));

console.log('Square root of 144: ' + Math.sqrt(144));