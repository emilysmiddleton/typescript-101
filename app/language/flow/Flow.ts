console.log('**********************************************');
console.log('* Control flow                               *');
console.log('**********************************************');

console.log("\n*** If statements ***");

ifStatement('Dalmation');
ifStatement('Siamese');

console.log("\n*** Ternary statements ***");
ternaryStatement('Dalmation');

ternaryStatement('Siamese');

console.log("\n*** Switch statements ***");
switchStatement('Dalmation');
switchStatement('Terrier');
switchStatement('Siamese');

switchStatement('Goldfish');


function ifStatement(pet: string): void {

    console.log("Pet to test is " + pet);
    // If statements let you execute code if a test is true.
    if (pet === 'Dalmation') {
        console.log('Dog')
    }
    // Optionally you can provide an 'else' if the test is false.
    else {
        console.log('Cat');
    }

}

function ternaryStatement(pet: string): void {
    console.log("Pet to test is " + pet);

    // Ternary statements are similar to an if - they have a test, a test and an else.
    // The 'else' is not optional though.
    pet === 'Dalmation' ? console.log('Dog') : console.log('Cat');
}

function switchStatement(input: string): void {



    console.log("Input to test is " + input);

    // Switches allow more cases than an if statement, so are more concise than a long stream of
    // 'else if... else if...' etc.
    // However, the test is limited to equality only.
    switch (input) {
        case 'Dalmation':
        // Without a break statement, you "fall through" to the next case. So this will print 'Dog'
        case 'Terrier':
            console.log('Dog');
            // Use a 'break' if you want to not want to fall through to the next case.
            break;
        case 'Siamese':
            console.log('Cat');
            break;
        default:
            // 'default' is used for all inputs that don't match.
            console.log('Unknown')
    }
}