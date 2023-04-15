/**
 * Primitive types in TypeScript
 */
{
    // ways to use primitive types in TypeScript
    let a: Number;
    // a = "test"; // Uncomment this line to see the error

    // Interface made of Primitime types
    interface madeOfPrimitives {
        isSubscribed: Boolean;
        subscriptionAmount: Number;
        subscribeName: String;
    }
}

/**
 * Array types in TypeScript
 */
{
    // ways to use array types in TypeScript
    let a: Number[];

    a = [1, 2, 3];
    // a = [1, 2, 3, "test"]; // Uncomment this line to see the error

    a.push(15);
    // a.push("test"); // Uncomment this line to see the error
}

// Using any type in TypeScript
{
    let a: any;
    let b; // here, b is implicitly of type any.

    a = 1;
    a = true;
    a = "test";
    a = [1, 2, 3];
    // See there are no errors in the above lines
    // This is the javascript way of doing things

    b = 1;
    b = true;
    b = "test";
    b = [1, 2, 3];
}

/**
 * Type annotations in TypeScript
 */
{
    // Here, we are providing a type to the variable a1. This is called type annotation
    let a1: Number = 1;

    // Here, we are not providing a type to the variable a2. This is called type inference
    // The actual type of a2 is inferred from the value assigned to the variable
    let a2 = 1;
}

/**
 * Functions
 */
{
    // Parameter type annotation
    // See that we are providing a type (number) to the parameter age
    const isAllowedToDrink_v1 = (age: number) => {
        console.log(
            "You are " + (age > 18) ? "allowed" : "not allowed" + " to drink"
        );
    };
    isAllowedToDrink_v1(20);
    // isAllowedToDrink_v1("20"); // Uncomment this line to see the error

    // ----------------------------------------------------------------------------------------

    // Return type annotation example
    // See that we are providing a type (boolean) to the return value of the function
    const isAllowedToDrink_v2 = (age): boolean => {
        return age > 18;
    };
    console.log(isAllowedToDrink_v2(20));
    console.log(isAllowedToDrink_v2("20")); // Notice that there is no error here as the paramter type is not annotated (implicit to any)

    // ----------------------------------------------------------------------------------------

    // The best way to do it
    const isAllowedToDrink_v3 = (age: number): boolean => {
        return age > 18;
    };
}

/**
 * Contextual typing
 */
{
    let users = ["user_A", "user_B", "user_C"];

    // Here, the type of the parameter user is inferred from the type of the array users
    users.forEach((user) => {
        // note how the type of user is inferred as string
        user = "test_" + user;
    });
}

/**
 * Object Types
 */
{
    // Object type annotation
    const printUserData_v1 = (user: { name: string; age: number }) => {
        console.log(user.name + " is " + user.age + " years old");
    };

    // Using optional properties
    const printUserData_v2 = (user: {
        name: string;
        age: number;
        gender: string;
    }) => {
        console.log(user.name + " is " + user.age + " years old");
        if (user.gender) console.log("User's gender is ", user.gender);
    };
}

/**
 * Union types
 */
{
    // userId can be string or number
    let userId: string | number;

    userId = 1;
    userId = "user_1";
    // userId = true; // Uncomment this line to see the error

    // ----------------------------------------------------------------------------------------

    /**
     * userArray can be an array of string or number
     * Note here that userArray can change it type from String Array to Number Array and vice versa
     * But, it can't contain both string and number at the same time
     */
    let userArray: String[] | Number[];

    userArray = [1, 2, 3];
    userArray = ["user_1", "user_2", "user_3"];
    // userArray = [1, 2, 3, "Kiran"]; // Uncomment this line to see error.

    // ----------------------------------------------------------------------------------------

    /**
     * user array than can contain both string and number
     * Note here that userArray can change it type from String Array to Number Array and vice versa
     * Also, it can contain both string and number at the same time
     */
    let userArrayOfMixedTypes: (String | Number)[];
    userArrayOfMixedTypes = [1, 2, 3];
    userArrayOfMixedTypes = ["user_1", "user_2", "user_3"];
    userArrayOfMixedTypes = [1, 2, 3, "Kiran"];
}
