//const _: Lodash = require('lodash');
import * as _ from 'lodash';

const colors = ['red', 'green'];

const firstColor = _.first(colors);

console.log(firstColor);

// Never and Void

function buildMessage(message:string): never {
    throw new Error("Not available");
}

let message: never = buildMessage("Hello World");

let counter:number = message;
let str:string = message;

let counter2 = 0;
//message = counter;

console.log(message);

function buildM(message:string): void {
    alert('Msg not avb');
}


