type HasName = {
    firstName?:string,
    lastName:string
}

type HasAddress = {
    streetName:string
}

type Person = {
    name: HasName,
    address?: HasAddress
}

let person2: Person = {
    name: {lastName: 'Bryant'},
    address: {streetName: '1'}
};

type MessageCreator = (name: string) => string;

function createHelloMessage(name: string): string {
    return `Hello ${name}`
}

const creator: MessageCreator = createHelloMessage;

console.log(creator('Ger'));

type TwoNames = [string, string];

let persons: TwoNames = ['Kobe', 'Kareem'];

let count: number[] = [0, 2];

type PlayerTuple = [string, number];

let tuple: PlayerTuple = ['Kobe', 5];

// -- ENUM
enum PlayerPosition {
    Guard, Forward, Center
}

type Player = [string, PlayerPosition];

let kobe: Player = ['Kobe', PlayerPosition.Center]; // translated to enum index
let shaq: Player = ['Shaq', PlayerPosition["Guard"]];

let players: Player[] = [kobe, shaq];

console.log(players);
// [ [ 'Kobe', 2 ]  ]

interface PlayerI {
    name:string;
    position: PlayerPosition
}

let kobeI: PlayerI | null = {
    name: 'Kobe',
    position: PlayerPosition.Forward
};

kobeI = null;