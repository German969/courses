function createMessage(name:string): string | undefined {
    if (name) {
        return `Hello ${name}`
    }
}

console.log(createMessage("Bob"));

type HasName2 = {
    firstName: string,
    lastName: string
}

interface HasAddress2 {
    address:string
}

type Player2 = (HasName2 & HasAddress2) | null;

const player: Player2 = {firstName: "magic", lastName: "jhonson", address:"Stapless"};

console.log(player);

const player2 = {firstName: "magic", lastName: "jhonson", address:"Stapless"};

function crtMsg(message: any) {

}

// ANY TYPE

let myVar: any;

myVar = {};

let counter = 0;

counter = myVar;

let str:string = '';

str = myVar;