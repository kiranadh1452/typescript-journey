class User extends BaseUser {
    constructor(name: string, age: number) {
        super(name, age);
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `User: ${this.name}, ${this.age}`;
    }
}

const test1 = new User("John", 30);
