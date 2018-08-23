# Introduction to unit testing

Tests are for ensuring your code works.
Unit tests bite off the smallest chunk they can.

## Mocha and Must

Mocha is a unit testing framework. The basic components are:

- **describe** - outlines the overall functionality that we are testing
- **it** - outlines the exact scenario (inputs / outputs) this particular test is for

Our example _Calculator_ has a single method that adds two numbers together. 
_CalculatorTest_ checks that this is done correctly.

Must is the a framework we use to make assertions. Assertions are statements such as "a must equal b".