"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//const _: Lodash = require('lodash');
var _ = __importStar(require("lodash"));
var colors = ['red', 'green'];
var firstColor = _.first(colors);
console.log(firstColor);
// Never and Void
function buildMessage(message) {
    throw new Error("Not available");
}
var message = buildMessage("Hello World");
var counter = message;
var str = message;
var counter2 = 0;
//message = counter;
console.log(message);
function buildM(message) {
    alert('Msg not avb');
}
//# sourceMappingURL=learning-types-3.js.map