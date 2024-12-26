# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript bug related to the loose equality operator (==) and its interaction with null and undefined values.

## Bug Description
The provided JavaScript function `foo` is supposed to handle null and undefined values gracefully. However, due to the misuse of loose equality, unexpected behavior occurs when `a` or `b` are null or undefined. The loose equality operator coerces types in a way that might not be what you intend.

## How to Reproduce
1. Clone this repository.
2. Run the `bug.js` file.
3. Observe the unexpected output when null or undefined values are passed as arguments.

## Solution
The solution involves using strict equality (===) instead of loose equality (==) to prevent type coercion. The updated code is provided in `bugSolution.js`.

## Lessons Learned
Always use strict equality (===) when comparing values in JavaScript to avoid unexpected type coercion and ensure the accuracy of your comparisons.