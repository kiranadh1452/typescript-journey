interface UserInterface {
    name: string;
    age: number;
    address: string;
    isMarried: boolean;
}

// Class Declaration
class User implements UserInterface {
    // properties or fields
    readonly isTest: boolean;
    private _id: string;
    private _name: string;
    private _age: number;
    private _address: string;
    private _isMarried: boolean;

    // constructor
    constructor(
        name: string,
        age: number,
        address: string,
        isMarried: boolean
    ) {
        this.isTest = true;
        this._id = Math.random().toString(36);
        this._name = name;
        this._age = age;
        this._address = address;
        this._isMarried = isMarried;
    }

    // getters and setters
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }
    set age(value: number) {
        this._age = value;
    }

    get address(): string {
        return this._address;
    }
    set address(value: string) {
        this._address = value;
    }

    get isMarried(): boolean {
        return this._isMarried;
    }
    set isMarried(value: boolean) {
        this._isMarried = value;
    }

    get id(): string {
        return this._id;
    }
    // no setters for id

    // methods in the class
    public printUser(): void {
        console.log(
            `User ID: ${this._id}
            Name: ${this._name}
            Age: ${this._age}
            Address: ${this._address}
            Is Married: ${this._isMarried}`
        );
    }
}

const meAsUser = new User("Kiran Adhikari", 23, "Pokhara, Nepal", false);
console.log("The id is", meAsUser.id);
// meAsUser.id = "testetsds"; // Can't set the id as we haven't set the setter for id
