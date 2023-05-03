/**
 * @A_SIMPLE_GENERIC_FUNCTION
 * Identity function as specified in the TypeScript handbook
 */
const identity = <T>(arg: T): T => {
    try {
        return arg;
    } catch (e) {
        throw new Error(
            `How come there is an error while only returning the argument? \n ${e.message}`
        );
    }
};

// two right ways use the identity function
const goat = identity("Lionel Messi"); // We didn't provide a type parameter but TypeScript can infer it from the argument
const myName = identity<string>("Kiran Adhikari");

// wrong way to use the identity function
// const wrongName = identity<string>(123); // Error: Argument of type number(123) is not assignable to parameter of type 'string'.

/**
 * @generic_function to find out if the passed argument is an array or not
 * Why not use Array.isArray() instead of this function?
 * Answer: Because we are learning generics here
 * @param arg
 * @returns boolean
 */
const isArray = <T>(input: T): boolean => {
    try {
        // Note that the following line will throw an error if uncommented
        // console.log(input.length); // Error: Property 'length' does not exist on all types.
        return Array.isArray(input);
    } catch (e) {
        throw new Error(
            `Did you add any new lines to "isArray" or uncomment some lines inside "isArray"? \n ${e.message}`
        );
    }
};

/**
 * @Generic_Interface
 */
{
    interface GenericIdentityFn<T> {
        (arg: T): T;
    }

    const myIdentityAsNumber: GenericIdentityFn<number> = identity;
    const a = myIdentityAsNumber(1); // 1
}

/**
 * @Generic_Class
 */
{
    class MultiType<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }

    const numValue = new MultiType<number>();
    numValue.zeroValue = 0;
    numValue.add = (x, y) => x + y;

    const stringValue = new MultiType<string>();
    stringValue.zeroValue = "";
    stringValue.add = (x, y) => x + y;

    const objectValue = new MultiType<object>();
    objectValue.zeroValue = {};
    objectValue.add = (x, y) => Object.assign(x, y);
}

/**
 * @Generic_Constraints
 * We can use the extends keyword to create a constraint that requires a type to inherit from another type.
 */
{
    interface HasLength {
        // ignore the name of the interface
        length: number;
    }

    // Uncomment the function getLength_v1 and see the error.
    /**
    const getLength_v1 = <T>(arg: T): number => {
        return arg.length; // Error: Property 'length' does not exist on all types.
    };
    */

    // We solve the above error by adding a constraint to the generic type
    const getLength_v2 = <T extends HasLength>(arg: T): number => {
        return arg.length;
    };

    // running the function
    const lengthOfGoat = getLength_v2(goat); // 12
    const lengthOfMyName = getLength_v2(myName); // 14
    const lengthOfArray = getLength_v2([1, 2, 3, 4, 5]); // 5
    const lengthOfObject = getLength_v2({
        name: "Mr. X",
        age: 25,
        length: 179,
    }); // 179

    // Uncomment the line below and see the error
    // const lengthOfNum = getLength_v2(123); // Error: Argument of type number(123) is not assignable to parameter of type 'HasLength'.

    console.log(lengthOfGoat, lengthOfMyName, lengthOfArray, lengthOfObject);
}
