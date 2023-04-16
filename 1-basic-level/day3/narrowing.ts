/**
 * Narrowing is a way to tell the compiler that a variable is a specific type
 */

// Let's consider an example where we have a function that takes a string or a number
const printUserId_v1 = (id: string | number): void => {
    try {
        // if we try to use the toLowerCase method on a number, we will get an error
        // because the toLowerCase method is not available on the number type
        // so we are narrowing down the type of id to a string
        if (typeof id === "string") {
            id = id.toLowerCase();
        }
        console.log(`User id is ${id}`);
    } catch (error) {
        console.log(`How did you get here? ${error.message}`);
    }
};

/**
 * What does typeof do?
 * typeof is an operator that returns the type of a variable
 */
{
    console.log(typeof 1); // number
    console.log(typeof "1"); // string
    console.log(typeof true); // boolean
    console.log(typeof undefined); // undefined
    console.log(typeof null); // object
    console.log(typeof {}); // object
    console.log(typeof []); // object
    console.log(typeof function () {}); // function

    // Notice how it returns object for arrays, objects and null?
    // So you can't use typeof alone to check if a variable is an array, object or null
}

/**
 * @Types_of_Narrowing
 * 1. @Truthiness_Narrowing
 * 2. @Equality_Narrowing
 * 3. @The_in_operator_Narrowing
 * 4. @The_instanceof_operator_Narrowing
 */

/**
 * @Truthiness_Narrowing
 * Truthiness Narrowing is when you use the truthiness of a variable to narrow down its type
 * For example, if you have a variable that can be a string or a number
 * and you want to check if it is a string, you can use the truthiness of the variable
 */
{
    const printUserId_v2 = (id: string | object | null): void => {
        if (id) {
            if (typeof id === "object") {
                for (const key in id) {
                    console.log(
                        `The key is ${key} and the value is ${id[key]}`
                    );
                }
            } else {
                console.log(`The id is ${id}`);
            }
        } else {
            console.log(`The id is null`);
        }
    };
}

/**
 * @Equality_Narrowing
 * Equality Narrowing is when you use the equality operator to narrow down the type of a variable
 * For example, if you have a variable that can be a string or a number
 * and you want to check if it is a string, you can use the equality operator
 * to check if the variable is a string
 */
{
    // Try thinking of what this function solves which the previous function printUserId_v2 doesn't
    const printUserId_v3 = (id: string | object | null): void => {
        if (id === null) {
            console.log(`The id is null`);
        } else if (typeof id === "object") {
            for (const key in id) {
                console.log(`The key is ${key} and the value is ${id[key]}`);
            }
        } else {
            console.log(`The id is ${id}`);
        }
    };

    // In v2, we didn't think about the case where id is empty string. But in v3, we did
    // Maybe in this case, null and empty string may be treated the same, but in other cases, they may not
}

/**
 * @The_in_operator_Narrowing
 * The in operator can be used to check if a property exists in an object or not
 * For example, if you have a variable that can be of type Student or Teacher.
 * You can use the in operator to check if the variable is of type Student or Teacher
 * and then use the property roll or id to get the id of the user
 */
{
    type Student = {
        roll: string;
        name: string;
    };

    type Teacher = {
        id: string;
        name: string;
    };

    const printUserId_v4 = (user: Student | Teacher): void => {
        if ("roll" in user) {
            console.log(`The id is ${user.roll}`);
        } else {
            console.log(`The id is ${user.id}`);
        }
    };
}
