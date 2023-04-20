/**
 * @Key_Of_Operator
 * @Used as `keyof` operator
 * @Example - Let's say we want to define a particular type which would be one of the keys of an Array
 * What I mean by that is, an Array has a bunch of keys, like length, push, pop, etc.
 * So I want to define a type which would could be any one of those keys
 * This is where the `keyof` operator comes in handy
 */

type ArrayKeys = keyof Array<any>;

// Now, I can define a variable of type `ArrayKeys`
let key: ArrayKeys;
key = "push"; // This is fine
key = "length"; // This is fine
// key = "dance"; // This will give an error as array doesn't have a key called `dance`

/**
 * @Using `keyof` with @generics
 * Let's say we have a function which takes an object and a key
 * And it returns the value of that key
 */
{
    // uncomment the function getValue_V1 and see the error
    /**
    const getValue_V1 = <T, K>(obj: T, key: K) => {
        return obj[key];
    };
    */

    // This one works as we ensure that the key is one of the keys of the object
    const getValue_V2 = <T, K extends keyof T>(obj: T, key: K) => {
        return obj[key];
    };
}

/**
 * @Using `keyof` with @index_signatures
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

    // Note that the category for teacher is string and for student is number

    // Example of Index Signature
    type TeacherOrStudent = {
        [id: string]: Teacher | Student;
    };

    // Now comes the main part - the `keyof` operator
    type TeacherOrStudentKeys = keyof TeacherOrStudent;

    // Notice that the type here is "string" | "number" though one may think it would be "string" alone
    // If you have read through the previous examples, you would know the reason.
    // The reason for that is that index signature despite being a string (id is a string),
    // a number could also be used and ts would interpret it as a string.
}
