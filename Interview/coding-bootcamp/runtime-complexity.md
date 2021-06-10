# Runtime Complexity (Big O notation)

## Constant Time

**O(1)**

No matter the parameters, always the same time

## Logarithmic Time

**O(log(n))**

If doubling elements doesn'd double the work. Searching operations.

## Linear Time

**O(n)**

Iterating through all elements in a collection. Loops spanning from 0 to length. 1 to 1 relation between elements and amount of work.

### Iterating separately two set of elements

**O(n + m)**

Two loops that are separated, not nested.

## Quasilinear Time

**O(n \* log(n))**

If doubling elements doesn'd double the work. Sorting operations. 1 + x increased time for each element. Two nested loops.

## Quadratic Time

**O(n ^ 2)**

Compare every element in a collection with every other. The handshake problem (people that enters a room).

### Two loops nested over different collections

**O(n\*m)**

Two nested loops, each one iterating over a different set of elements.

## Exponential Time

**O(2 ^ n)**

Adding a single element to a collection, proccesing requires double. A new element stringly increase the amount of work each time is added. Try to avoid.

# Space Complexity

How much more memory is required by increasing the problem set?
