// This one talks about inheritance more.

// creating a base class
class Sport {
    protected name: string; // look at the constructor of class Football to understand why we used protected
    constructor(name: string) {
        this.name = name;
    }

    // creating a public method that can be accessed from anywhere
    public getSportName(): string {
        return this.name;
    }
}

// creating a derived class
class FootballTeam extends Sport {
    public playerCount = 11;
    private _formation: Number[]; // for e.g. Argentina usually plays 4-3-3 formation , [4,3,3]
    #captain: string; // # here means private in JS

    constructor(formation: Number[], captain?: string) {
        super("Football");
        this._formation = formation;
        this.#captain = captain ? captain : "Messi";

        console.log(`Created team of ${this.name}`);
        // name is accessible here only because it is "protected" in Sport class. Had it been private, we could not access it
    }
    // getSportName(): string {
    //     Anything inside here would overwrite the "getSportName()" function of base class
    // }
}

const argentina = new FootballTeam([4, 3, 3]);
console.log(argentina.getSportName());
