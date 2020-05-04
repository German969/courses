"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SuperCharacter = /** @class */ (function () {
    function SuperCharacter(name) {
        this.name = name;
    }
    return SuperCharacter;
}());
var HeroCharacter = /** @class */ (function (_super) {
    __extends(HeroCharacter, _super);
    function HeroCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HeroCharacter;
}(SuperCharacter));
var VillainCharacter = /** @class */ (function (_super) {
    __extends(VillainCharacter, _super);
    function VillainCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VillainCharacter;
}(SuperCharacter));
var SuperTeam = /** @class */ (function () {
    function SuperTeam(members, leader) {
        this.members = members;
        this.leader = leader;
    }
    return SuperTeam;
}());
var captainAmerica = new HeroCharacter("Cap America");
var thor = new HeroCharacter("Thor");
var avengers = new SuperTeam([captainAmerica, thor], captainAmerica);
var luthor = new VillainCharacter("Luthor");
var bizarro = new VillainCharacter("Bizarro");
var legionOfDoom = new SuperTeam([luthor, bizarro], luthor);
var crossover = new SuperTeam([captainAmerica, thor, luthor, bizarro], captainAmerica);
//# sourceMappingURL=generic-clases.js.map