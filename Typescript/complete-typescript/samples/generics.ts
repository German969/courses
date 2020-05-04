interface HasNameG {
    name:string;
}

const heroes: HasNameG[] = [
    {name: "Superman"},
    {name: "Batman"}
];

function cloneArray<T>(array: T[]): T[] {
    return array.slice(0);
}

const numbers = [1, 2, 3];

const clones = cloneArray(heroes);
const cloneNumbers = cloneArray(numbers);

console.log(clones);

