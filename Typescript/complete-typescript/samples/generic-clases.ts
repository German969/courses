class SuperCharacter {
    constructor(public name:string) {

    }
}

class HeroCharacter extends SuperCharacter {

}

class VillainCharacter extends SuperCharacter {

}

class SuperTeam<T extends SuperCharacter> {
    constructor(
        public members: T[],
        public leader: T
    ) {
    }
}

const captainAmerica = new HeroCharacter("Cap America");
const thor = new HeroCharacter("Thor");

const avengers = new SuperTeam([captainAmerica, thor], captainAmerica);

const luthor = new VillainCharacter("Luthor");
const bizarro = new VillainCharacter("Bizarro");

const legionOfDoom = new SuperTeam([luthor, bizarro], luthor);

const crossover = new SuperTeam([captainAmerica, thor, luthor, bizarro], captainAmerica);

