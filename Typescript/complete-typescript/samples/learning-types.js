"use strict";
var person2 = {
    name: { lastName: 'Bryant' },
    address: { streetName: '1' }
};
function createHelloMessage(name) {
    return "Hello " + name;
}
var creator = createHelloMessage;
console.log(creator('Ger'));
var persons = ['Kobe', 'Kareem'];
var count = [0, 2];
var tuple = ['Kobe', 5];
// -- ENUM
var PlayerPosition;
(function (PlayerPosition) {
    PlayerPosition[PlayerPosition["Guard"] = 0] = "Guard";
    PlayerPosition[PlayerPosition["Forward"] = 1] = "Forward";
    PlayerPosition[PlayerPosition["Center"] = 2] = "Center";
})(PlayerPosition || (PlayerPosition = {}));
var kobe = ['Kobe', PlayerPosition.Center]; // translated to enum index
var shaq = ['Shaq', PlayerPosition["Guard"]];
var players = [kobe, shaq];
console.log(players);
var kobeI = {
    name: 'Kobe',
    position: PlayerPosition.Forward
};
kobeI = null;
//# sourceMappingURL=learning-types.js.map