/**
 * Object Types
 */
{
    // Defining Object Type with interface
    {
        interface User {
            name: string;
            age: number;
            email: string;
            address: string;
        }

        // Creating a user object
        let user: User = {
            name: "Messi",
            age: 33,
            email: "messi@goat.com",
            address: "Argentina",
        };

        // writing a function that accepts user object
        const increaseUserAgeByOne = (user: User): User => {
            return {
                ...user,
                age: user.age + 1,
            };
        };

        const stringifyUser = (user: User): string => {
            return `Name: ${user.name}\nAge: ${user.age}\nEmail: ${user.email}\nAddress: ${user.address}`;
        };

        console.log(
            "Before calling increaseUserAgeByOne ",
            stringifyUser(user)
        );
        user = increaseUserAgeByOne(user);
        console.log("After calling increaseUserAgeByOne ", stringifyUser(user));
    }

    // Defining Object Type with type
    {
        type User = {
            name: string;
            age: number;
            email: string;
            address: string;
        };

        // Creating a user object
        let user: User = {
            name: "Messi",
            age: 33,
            email: "messi@goat.com",
            address: "Argentina",
        };

        // writing a function that accepts user object
        const increaseUserAgeByOne = (user: User): User => {
            return {
                ...user,
                age: user.age + 1,
            };
        };

        const stringifyUser = (user: User): string => {
            return `Name: ${user.name}\nAge: ${user.age}\nEmail: ${user.email}\nAddress: ${user.address}`;
        };

        console.log(
            "Before calling increaseUserAgeByOne ",
            stringifyUser(user)
        );
        user = increaseUserAgeByOne(user);
        console.log("After calling increaseUserAgeByOne ", stringifyUser(user));
    }
}

/**
 * @Optional_Properties
 * @Readonly_Properties
 */
{
    type User = {
        name: string;
        age: number;
        email?: string; // This property is optional
        readonly address: string; // This property is readonly
    };

    // Creating a user object
    let user: User = {
        name: "Messi",
        age: 33,
        // email: "messi@goat.com",
        address: "Argentina",
    };

    // writing a function that accepts user object
    const changeAddress = (user: User, newAddress: string): User => {
        // user.address = newAddress; // This will throw an error because address is readonly

        // This will not throw an error
        user = {
            ...user,
            address: newAddress,
        };
        return user;
    };

    const stringifyUser = (user: User): string => {
        return `Name: ${user.name}\nAge: ${user.age}${
            user.email ? "\nEmail: " + user.email : ""
        } \nAddress: ${user.address}`;
    };

    console.log("Before calling changeAddress ", stringifyUser(user));
    user = changeAddress(user, "Barcelona");
    console.log("After calling changeAddress ", stringifyUser(user));
}

/**
 * @Index_Signatures and @Extending_Interface
 * Index Signatures are used to define the return type based on the index (or key)
 * @Hint - It is better to have index signatures readonly to prevent accidental reassignment
 */
{
    interface BaseUser {
        id: string;
        name: string;
    }
    // The following 3 interfaces extend BaseUser
    interface Teacher extends BaseUser {
        category: string;
    }
    interface Student extends BaseUser {
        category: number;
    }
    interface Staff extends BaseUser {
        category: symbol;
    }

    // Note that the category for teacher is string and for student is number and for staff is symbol

    // Example of Index Signature
    interface TeacherOrStudent {
        readonly [id: string]: Teacher | Student;
        readonly [id: symbol]: Staff;
    }

    // Improper way of defining index signature - uncomment the [id: number] part to see the error
    interface Wrong_TeacherOrStudent {
        readonly [id: string]: Teacher;
        // [id: number]: Student; // Uncomment this line to see the error
    }
    // The above interface is wrong since a numeric string can be coerced to a number.
    // It is possible for code that uses this interface to accidentally index with a number and get a completely different type than expected.

    /**
     * With string index signature, there are some restrictions
     */
    interface ReturnsNumber {
        [id: string]: number; // Notice that I am not using readonly here. It is fine not to use readonly but it is not recommended
        title: number; // This is fine
        // desc: string; // This gives an error as it must be a number, the same type returned by the index signature
    }
}

/**
 * @Intersection_Types
 * It is the `&` operator that is used to combine two or more types
 * @Intersection_VS_Extend_Interface : https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces-vs-intersections
 */
{
    interface User {
        name: string;
        age: number;
    }

    interface Address {
        country: string;
        city: string;
        street: string;
        zip: number;
    }

    // Intersection type
    type UserAddress = User & Address;

    const messiAddress: UserAddress = {
        name: "Messi",
        age: 33,
        country: "Argentina",
        city: "Buenos Aires",
        street: "Calle Falsa 123",
        zip: 12345,
    };

    // In the following myAddress, remove any one of the data and it will give an error
    const myAddress: UserAddress = {
        name: "Me",
        age: 23,
        country: "Nepal",
        city: "Pokhara",
        street: "",
        zip: 0,
    };
}

/**
 * @Generic_Types
 */
{
    interface Address {
        country: string;
        city: string;
        street: string;
        zip: number;
    }

    interface UserRaw {
        name: string;
        age: number;
    }

    // We can user generic types to define the type of data
    interface User<T> {
        id: string;
        data: T;
    }

    const messi: User<UserRaw> = {
        id: "1",
        data: {
            name: "Messi",
            age: 35,
        },
    };

    const messiAddress: User<Address> = {
        id: "2",
        data: {
            country: "Argentina",
            city: "Buenos Aires",
            street: "Calle Falsa 123",
            zip: 12345,
        },
    };
}

/**
 * @Tuple_Types
 * Tuple types allow us to express an array with a fixed no. of elements whose types are known but need not be the same
 */
{
    type StringNumber = readonly [string, number];
    type StringNumberSymbol = [string, number, symbol];

    const messi: StringNumber = ["Messi", 35];
    // messi[0] = "Messi"; // This gives an error as messi is readonly

    const messi2: StringNumberSymbol = ["Messi", 35, Symbol("Messi")];
    messi2[0] = "Messi"; // This is fine as messi2 is not readonly
}
