// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) { // For every additional 'n' we need to do an additional calculation (linear runtime)
  const result = [0, 1];

  for (let i = 2; i <= n; i++) { // One for loop incrementing by one, starting at a constant number, linear complexity
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}

const fib = memoize(fib);

function fib2(n) { // For each additional element we experience a dramatic increment in time. Exponential time solution
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2); // For every new element we get a lot of new function calls. Never accept an exponential time solution.
}

module.exports = fib;

// function fib(n) {
// // Yes, I have seen it before..
//   if (n === 0 || n === 1) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }