# JavaScript Loose Typing and Addition with Null/Undefined

This repository demonstrates a common pitfall in JavaScript: unexpected behavior when performing addition with `null` or `undefined` values due to loose typing.

## The Problem

JavaScript's dynamic typing can be convenient but also leads to surprising results.  When adding numbers to `null` or `undefined`, the behavior is not always intuitive:

* `null` is coerced to `0`.
* `undefined` results in `NaN` (Not a Number).

The `bug.js` file shows examples of this behavior.

## The Solution

The best way to handle this is to explicitly check for `null` or `undefined` values and handle them appropriately. The `bugSolution.js` provides an example of how to use explicit checks to prevent unexpected outcomes.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your favorite JavaScript environment (e.g., browser's console, Node.js).
3. Run the code and observe the results.