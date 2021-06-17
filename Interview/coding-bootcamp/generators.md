# Generators

Used with `function*`. Generators are subtypes of iterators which include additional `next` and `throw`. These enable values to flow back into the generator, so `yield` is an expression form which returns a value.

```JavaScript
function* numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = numbers();
generator.next(); // { value: 2, done: false }
generator.next(10); // { value: 30, done: true }
// generator.next(); // { value: null, done: true }
```

When called generator.next() the code is executed until `yield` statement is found.

The sencond time we call generator.next() the parameter value is inserted instead of the yield statement and the function is executed

```JavaScript
function* list() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = list();
generator.next(); // { value: 1, done: false }
generator.next(); // { value: 2, done: false }
generator.next(); // { value: 3, done: false }
generator.next(); // { done: true }

const generator2 = list();
const numbers = [];
for (let value of generator2) {
  numbers.push(value);
}
numbers; // [1, 2, 3, 4, 5]
```

No return statement gets `{ done: true }`. All subsequent calls will get the same result.

```JavaScript
function* list() {
  yield 1;
  yield* moreNumbers();
  yield 4;
}

function* moreNumbers() {
  yield 2;
  yield 3;
}

const generator = numbers();

const values = [];
for (let value of generator) {
  values.push(value);
}
numbers; // [1. 2, 3, 4]
```

Using a nested `yield*` will delegate the next `next` call to the inner generator

```JavaScript
class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  *printValues() {
    yield this.value;
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [
  new Tree(2, [new Tree(4)]),
  new Tree (3)
]);

/*
  1
2   3
4
*/

const values = [];

for (let value of tree.priontvalues()) {
  values.push(value);
}
values; // [1, 2, 3, 4]
```

Generators can be calles as class methods.
