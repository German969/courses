"use strict";
var heroes = [
    { name: "Superman" },
    { name: "Batman" }
];
function cloneArray(array) {
    return array.slice(0);
}
var numbers = [1, 2, 3];
var clones = cloneArray(heroes);
var cloneNumbers = cloneArray(numbers);
console.log(clones);
//# sourceMappingURL=generics.js.map