export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}

export function multiply(x: number, y: number): number {
    return x * y;
}

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
export function divide(x: number, y: number): number {
    return x / y;
}

/**
 * % is the 'mod' operator, i.e. it returns the remainder of dividing one number by another.
 *
 * This can be used on numbers with decimal places, but this is another instance where you
 * need to be careful about rounding.
 *
 * For example, 5.32 % 2 is not 1.32, it is 1.3200000000000003
 */
export function isEven(x: number) {
    return x % 2 === 0;
}

/**
 * Math is a library that has tons of useful functions.
 */
export function min(x:number, y: number): number {
    return Math.min(x, y);
}