namespace UserNamespace {
    export interface UserInterface {
        name: string;
        age: number;
        address: string;
    }

    export class User implements UserInterface {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        showInfo(): void {
            console.log(
                `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`
            );
        }
    }
}
