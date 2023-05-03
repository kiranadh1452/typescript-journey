// We already know that typeof operator returns the type of the value
const a = 10;
const b = "Hello";
const c = true;
console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean

// Typescript provides a ReturnType<T> type that returns the type of the return value of a function
const add = (a: number, b: number) => a + b;
type AddReturnType1 = ReturnType<typeof add>;
// Hover over AddReturnType1 to see  that AddReturnType1 is number

/**
 * Function that adds or concats two values, provided that the values are either number or string
 * @param {number | string} a - first value
 * @param {number | string} b - second value
 * @returns {number | string} - the sum or concatenation of the two values
 */
const addNumOrString = (
    a: number | string,
    b: number | string
): number | string => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return `${a}${b}`;
    }
};

type AddReturnType2 = ReturnType<typeof addNumOrString>;
// Hover over AddReturnType2 to see that AddReturnType2 is number | string
