enum Editor {
    MARVEL,
    DC
}

interface Hero { // Typescript
    name:string;
}

const batman:Hero = {
  name: 'Batman'
};

abstract class SuperHero implements Hero {
    private static readonly LABEL = 'Hero:';

    readonly name:string;

    constructor(
        name:string,
        public _editor:Editor,
        private creationYear: number,
        protected another: number
    ) {
        this.name = name;
    }

    abstract createMessage():string;

    static createSecondMsg(hero:SuperHero):string {
        return `
            ${SuperHero.LABEL}
            ${this.name}
            ${Editor[hero._editor]}
            ${hero.creationYear}
        `;
    }
}

interface CanFly {
    fly(message:string):void;
}

class FlyingHero extends SuperHero implements CanFly {
    fly(message:string) {
        console.log(this.another);
        console.log(message);
    }

    get editor():string {
        return Editor[this._editor];
    }

    set editor(editorName:string) {
        this._editor = (<any>Editor)[editorName];
    }

    get message() {
        return `
            Flying Hero Message:
            ${this.name}
        `;
    }

    createMessage() {
        return `
            Flying Hero:
            ${this.name}
            ${this.editor}
            ${this.another}
        `;
    }
}

const superman = new FlyingHero('Superman', Editor.MARVEL, 1938, 13);

superman.editor = "DC";

console.log(superman.createMessage());
console.log(superman.message);

superman.fly('Away!');

console.log(SuperHero.createSecondMsg(superman));