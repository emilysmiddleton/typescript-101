# Introduction to unit testing

## What are unit tests?

Tests are for ensuring your code works.
Unit tests bite off the smallest chunk they can, testing it in isolation from the rest of the code.

## What are they for?

Writing unit tests:

- Finds bugs early
- Makes it easier to pinpoint the location of bugs
- Improves the quality of code
- Provide confidence when making changes
- Provide documentation

### Other types of testing

So, you've written a unit test for every function and they all pass. Does your code work?

Unit tests check that each building block is correct but they don't tell the full story.
You still need tests to ensure the blocks are assembled correctly. 

_We only focus on the unit tests in this guide._

## Mocha

Mocha is a unit testing framework. The basic components are:

- **describe** - outlines the overall functionality that we are testing
- **it** - outlines the exact scenario (inputs / outputs) this particular test is for

Our example [Calculator](Calculator.ts) has a single method that adds two numbers together. 
[CalculatorTest](../../tests/testing/CalculatorTest.ts) checks that this is done correctly.

## Assertions (Must)

Assertions are statements such as "a must equal b". [Must](https://github.com/moll/js-must) is an assertion
library that makes it easier for us to write such statements.

# Running the tests

A script has been provided to run all the tests:

`npm run test`

# Test Driven Development (TDD)

Test Driven Development, or TDD, is an approach that favours writing the tests _before_
writing the code. This encourages:
- you to focus on what the correct _behaviour_ should be,
rather than being influenced by the _implementation_. 
- the writing of modular, self-contained code - because it's easier to test!
- tests to provide a clear message if they fail - because you always see them fail!

## Next Exercise

- Add a new function to the calculator, say `subtract`, but don't implement it yet - just return 0.
- Write a test for that function. 
- Run the test, and watch it fail. Is the error message clear?
- Implement the method.
- Watch your test pass!

[Back to main](../../README.md)