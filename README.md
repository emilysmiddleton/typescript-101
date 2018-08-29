# typescript-101

A series of small examples of TypeScript fundamental concepts and design patterns.

## Getting started

[TypeScript](https://www.typescriptlang.org/) is language that is a superset of JavaScript. 
It allows JavaScript to be enhanced with `static typing`.

To run TypeScript, it is first `transpiled`. This means translating it into JavaScript.

TypeScript can be transpiled and run using [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/).
`Node` is a JavaScript runtime, `npm` is the package manager for JavaScript.

### Pre-requisites

This is written assuming you're working with a Mac.

- Install [Homebrew](https://brew.sh/). This is a package manager for Mac, used to install other programs.
- Use homebrew to install `Node` (note that this will also install `npm`):

`brew install node`. 
- Use `npm` to install TypeScript (the -g means it is installed globally, not just for this project).

`npm install -g typescript`

### Running a TypeScript file

Before you can run a TypeScript file, it first needs to be _transpiled_ to JavaScript.
This is done by running:

`npm run -s transpile`

Then, the file is run using node:

`node app/HelloWorld.ts`

For convenience, we can define _scripts_, which provide shortcuts.
These are defined in [package.json](package.json):

```
  "build": "npm run -s transpile",
  "example:hello" : "npm run build && node app/HelloWorld.ts",     
```

So `example:hello` is a script that first transpiles, then runs the file [HelloWorld](app/HelloWorld.ts).

### Hello World

[HelloWorld](app/HelloWorld.ts) is a TypeScript file containing a single log statement:

`console.log('Hello World')`

This can be run using the aforementioned script:

`npm run example:hello`

## Format of this guide

This guide is designed to demonstrate how to write some common scenarios in TypeScript.
Each section will have a readme, and a runnable TypeScript file containing examples 
of the syntax and comments explaining what is happening.

There may in addition be sample unit tests and suggested exercises. 
For that reason, we start off with an introduction to testing before delving into further language features.

## [Testing](app/testing/README.md)

- Why testing?
- Unit testing with Mocha
- Organising your tests with describe / it
- Assertions
- Running tests
- Writing your first test

## Language features

- [Variables](app/language/variables/README.md) - var, let and const
- [Logic functions](app/language/logic/README.md) - equality, and, or, not
- [Maths](app/language/maths/README.md) - common mathematical operations
- [Control flow](app/language/flow/README.md) - if, ternary and switch statements 
- [Collections](app/language/collections/README.md) - arrays, lists, sets and maps
- Object Literals

- [Functions](app/language/functions/README.md)
   - Regular functions :: function add (x, y) return x + y }
   - What is a lambda
   - “Fat arrow” functions :: (x, y) => { x + y }
   - Understanding this
   - Understanding closures
- Understanding truthy-ness

## Design Patterns

- Tree traversal
- Working with collections
- map
- filter
- reduce
- Using callbacks
- Using await / async
- Understanding Promises
- Function composition
- Understanding Types

## Modelling with classes
- Interfaces
- Methods
- Type signatures
- Using type definition files

## Modules

- Organising your code
- Exporting
- Importing
- Using Other Modules
- An introduction to npm
- Adding a library
- Adding a development-time library
