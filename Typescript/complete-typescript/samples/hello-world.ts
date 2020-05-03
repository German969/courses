
const message = 'Hello World!';

const sayHello = (message: any) => console.log(message);

sayHello(message);

function Person(this: any, name: any) {
    this.name = name;
    this.sayHi = function() {
        setTimeout(function (this: any) {
            console.log(this.name);
        })
    }
}

// @ts-ignore
const person = new Person('Bob');

person.sayHi();