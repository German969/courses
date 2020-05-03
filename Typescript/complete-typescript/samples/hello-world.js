"use strict";
var message = 'Hello World!';
var sayHello = function (message) { return console.log(message); };
sayHello(message);
function Person(name) {
    this.name = name;
    this.sayHi = function () {
        setTimeout(function () {
            console.log(this.name);
        });
    };
}
// @ts-ignore
var person = new Person('Bob');
person.sayHi();
//# sourceMappingURL=hello-world.js.map