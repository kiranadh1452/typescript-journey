/**
 * @Functions_Types
 */
{
    type TwoNumsAndReturnNum = (a: number, b: number) => number;

    // Method 1
    let add = (n1: number, n2: number): number => {
        return n1 + n2;
    };

    // Method 2
    // notice how ts already knows that n1 and n2 are numbers
    const diff: TwoNumsAndReturnNum = (n1, n2) => {
        // return "test"; // uncomment this line to see the error - ts knows that the return type is number
        return n1 - n2;
    };
}

/**
 * @Call_Signatures
 * Call signatures can be used to describe a function type.
 */
{
    type TwoNumsAndReturnNum = {
        description: string;
        (a: number, b: number): number;
    };

    // Defining a function add
    const add: TwoNumsAndReturnNum = (n1, n2) => n1 + n2;
    add.description = "Addition function";

    // Defining a function diff
    const diff: TwoNumsAndReturnNum = (n1, n2) => n1 - n2;
    diff.description = "Subtraction function";

    console.log(add(1, 2)); // 3
    console.log(diff(1, 2)); // -1
}

/**
 * @Construct_Signatures
 * Construct signatures can be written by adding the new keyword to a call signature.
 */
{
    interface Person {
        name: string;
        age: number;
    }

    interface PersonConstructor {
        new (name: string, age: number): Person;
    }

    class Employee implements Person {
        constructor(public name: string, public age: number) {}
    }

    let User: PersonConstructor = Employee;

    const john = new User("Messi", 35);
    console.log(john); // Output: Employee { name: 'Messi', age: 35 }
}

/**
 * @Generic_Functions
 * Generic functions are those which support working with a variety of types.
 * They are used in scenraios where we don't know the type of the input.
 */
{
    const findNthElementOfArray = <T>(arr: T[], n: number): T | undefined => {
        return arr[n];
    };

    // here, above function returns the nTh value of the array which is of Type T or undefined if the index is out of bounds
}

/**
 * Function Overloads
 */
{
    // creating overloads for a function that sums either 2 or 3 numbers
    function add(a: number, b: number): number;
    function add(a: number, b: number, c: number): number;
    function add(a: number, b: number, c?: number): number {
        if (c) {
            return a + b + c;
        }
        return a + b;
    }

    const a1 = add(1, 2);
    const a2 = add(1, 2, 3);
    // const a3 = add(1, 2, 3, 4); // error - too many arguments
    // const a4 = add(1); // error - too few arguments

    // ----------------------------------------------------------------------------------------------------------------------

    // creating overloads for a function that adds either 2 numbers or 2 string
    function addTogether(a: number, b: number): number;
    function addTogether(a: string, b: string): string;
    function addTogether(a: any, b: any) {
        return a + b;
    }
    const adt1 = addTogether(1, 2);
    const adt2 = addTogether("Lionel ", "Messi");
    // const adt3 = addTogether(1, "Messi"); // error - type mismatch
    // const adt4 = addTogether(true, false); // error - type mismatch
}

/**
 * @Object vs @object
 * `Object` and `object` are different
 * `object` is a type in ts that represents the non-primitive type, i.e. anything that is not number, string, boolean, symbol, null, or undefined.
 * `Object` is the root of all classes hierarchy. Any primitive and non-primitive types are subtypes of Object.
 */
{
    const obj1: Object = {}; // Valid
    const obj2: object = {}; // Valid
    const obj3: Object = 10; // Valid
    // const obj4: object = 10; // Invalid
    const obj5: Object = "Messi"; // Valid
    // const obj6: object = "Messi"; // Invalid

    console.log(obj1, obj2, obj3, obj5);
}

/**
 * @any vs @unknown
 * `any` is a type in ts that represents any type of value.
 * `unknown` is a type in ts that represents any type of value but it is more restrictive than `any`.
 * `unknown` is a safer alternative to `any` because it forces us to check the type of the value before using it.
 */
{
    // Using any
    const printFirst = (data: any) => {
        console.log(data[0]);
    };
    printFirst([1, 2, 3]); // 1
    printFirst("Messi"); // M
    printFirst(10); // undefined

    // Using unknown
    const printFirstWithUnknown = (data: unknown) => {
        // Uncomment the line below and notice how it gives an error
        // console.log(data[0]); // error - Property '0' does not exist on type 'unknown'

        // So instead, we have to write the following code to check if data is an array or a string
        if (data instanceof Array || typeof data === "string") {
            console.log(data[0]);
        } else {
            console.log(data);
        }
    };
}

/**
 * @Rest_Parameters and @Rest_Arguments
 */
{
    /**
     * @Note - The `...` opearator is called Spread Operator
     */

    // Rest Parameters
    const toArray = (...nums: number[]) => {
        return nums;
    };
    const arr1 = toArray(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

    // Notice how we passed 5 values to the function and the function treated them as an array
    // This is the use of rest parameters

    // Rest Arguments
    const arr2 = [1, 2, 3, 4, 5];
    const arr3 = [6, 7, 8, 9, 10];

    // Lets say we want to add the elements of arr3 to arr2
    // We can do it in the following way
    // arr2.push(arr3[0], arr3[1], arr3[2], arr3[3], arr3[4]); // Or, the following way
    arr2.push(...arr3);
    // This is the use of rest arguments. We are using the spread operator to spread the elements of arr3 into seperate arguments
}

/**
 * @Parameter_Destructuring
 */
{
    type User = {
        name: string;
        age: number;
        email: string;
    };

    const user1 = {
        name: "Messi",
        age: 35,
        email: "messi@goat.com",
    };

    const printUser = ({ name, age, email }: User) => {
        console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
    };

    printUser(user1); // Name: Messi, Age: 35, Email: messi@goat.com
}
