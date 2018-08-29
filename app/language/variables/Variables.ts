console.log('**********************************************');
console.log('* Variables                                  *');
console.log('**********************************************');

primitives();
objects();

function primitives() {

    console.log("\n*** Declaring primitives with var, let or const ***");

    // A variable named 'a' can be define with the var, let or const keyword
    var a1 = 10;
    let a2 = 10;
    const a3 = 10;
    console.log('value of a1: ' + a1);
    console.log('value of a2: ' + a2);
    console.log('value of a3: ' + a3);

    console.log("\n*** Re-assigning variables ***");

    // a 'var' or 'let' can be re-assigned.
    // A const can not - uncomment to see a compile error
    a1 = 20;
    a2 = 20;
    // a3 = 20;

    console.log('value of a1: ' + a1);
    console.log('value of a2: ' + a2);
    console.log('value of a3: ' + a3);

    console.log("\n*** Variable scope ***");

    if (true) {
        var x1 = 5;
        let x2 = 5;
        const x3 = 5;
        console.log('value of x1: ' + x1);
        console.log('value of x2: ' + x2);
        console.log('value of x3: ' + x3);
    }

    // The scoping rules for 'var' are a bit unexpected.
    // x was defined within an if statement, but can be accessed outside that statement.
    console.log('Can still access x1 outside of the for loop: ' + x1);

    // This is not the case for 'let' or 'const' - uncomment to see a compile error.
    // console.log('Can not access x2 outside of the for loop: ' + x2);
    // console.log('Can not access x3 outside of the for loop: ' + x3);

    // This unexpected scoping can lead to subtle bugs;
    // it is therefore recommended not to use var.
}

function objects() {

    console.log("\n*** Declaring objects with const ***");

    const myArray = [1, 2, 3];
    console.log('value of array: ' + myArray);

    // Although x can not be reassigned, since it is a constant, that does not prevent the array being modified
    myArray.push(4, 5, 6);
    console.log('value of array: ' + myArray);

    const myObject = {i: 4};
    console.log('value of i: ' + myObject.i);

    // Similarly, objects declared as a const can still be modified.
    myObject.i = 7;
    console.log('value of i: ' + myObject.i);
}