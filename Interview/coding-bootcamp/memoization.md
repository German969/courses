# Memoization

_A solution for the high runtime complexity of recursive solutions_

Store the arguments of each function call along with the result.

If the function is called again with the _same arguments_, return the precomputed result, rather than running the function again.

## Memoizer

It takes a slow recursive function and returns a fast memoized function.

```JavaScript
function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result; // cache = { [args.toString()]: result }

    return result;
  };
}
```
