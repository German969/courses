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
var Editor;
(function (Editor) {
    Editor[Editor["MARVEL"] = 0] = "MARVEL";
    Editor[Editor["DC"] = 1] = "DC";
})(Editor || (Editor = {}));
var batman = {
    name: 'Batman'
};
var SuperHero = /** @class */ (function () {
    function SuperHero(name, _editor, creationYear, another) {
        this._editor = _editor;
        this.creationYear = creationYear;
        this.another = another;
        this.name = name;
    }
    SuperHero.createSecondMsg = function (hero) {
        return "\n            " + SuperHero.LABEL + "\n            " + this.name + "\n            " + Editor[hero._editor] + "\n            " + hero.creationYear + "\n        ";
    };
    SuperHero.LABEL = 'Hero:';
    return SuperHero;
}());
var FlyingHero = /** @class */ (function (_super) {
    __extends(FlyingHero, _super);
    function FlyingHero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlyingHero.prototype.fly = function (message) {
        console.log(this.another);
        console.log(message);
    };
    Object.defineProperty(FlyingHero.prototype, "editor", {
        get: function () {
            return Editor[this._editor];
        },
        set: function (editorName) {
            this._editor = Editor[editorName];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyingHero.prototype, "message", {
        get: function () {
            return "\n            Flying Hero Message:\n            " + this.name + "\n        ";
        },
        enumerable: true,
        configurable: true
    });
    FlyingHero.prototype.createMessage = function () {
        return "\n            Flying Hero:\n            " + this.name + "\n            " + this.editor + "\n            " + this.another + "\n        ";
    };
    return FlyingHero;
}(SuperHero));
var superman = new FlyingHero('Superman', Editor.MARVEL, 1938, 13);
superman.editor = "DC";
console.log(superman.createMessage());
console.log(superman.message);
superman.fly('Away!');
console.log(SuperHero.createSecondMsg(superman));
//# sourceMappingURL=object-oriented.js.map