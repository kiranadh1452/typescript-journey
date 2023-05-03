/**
 * @Abstract_Classes_And_Members
 * Classes, methods, and fields in TypeScript may be abstract.
 * Abstract classes can't be instantiated directly.
 */

abstract class BaseUser {
    id: string;

    // abstract fields
    // abstract age: number;
    // abstract name: string;

    getId(): string {
        return this.id;
    }

    // abstract methods
    abstract getAge(): number;
    abstract getName(): string;
}

// const testUsr = new BaseUser(); // Error: Cannot create an instance of an abstract class.

class User extends BaseUser {
    // We must implement the abstract fields and methods
    age: number;
    name: string;

    constructor(age: number, name: string) {
        super();
        this.id = "123";
        this.age = age;
        this.name = name;
    }

    getAge(): number {
        return this.age;
    }

    getName(): string {
        return this.name;
    }
}

/**
 * @Abstract_Construct_Signatures
 */
{
    // let's create a derived class
    class DerivedUser extends BaseUser {
        age: number;
        name: string;

        getAge(): number {
            return this.age;
        }

        getName(): string {
            return this.name;
        }
    }

    // Uncomment the following code to see the error
    /**
    function printName_v1(className: typeof BaseUser) {
        const user = new className(20, "John"); // Error: Cannot create an instance of an abstract class.
        console.log(user.getName());
    }
     */

    // instead, we can use abstract construct signatures
    function printName_v2(className: new () => BaseUser) {
        const user = new className();
        console.log(user.getName());
    }

    printName_v2(DerivedUser);
}
