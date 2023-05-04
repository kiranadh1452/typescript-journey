// Imagine a function that returns a string if input is an array and returns an array if input is a string
const returnStringOrArray_v1 = (value) => {
    if (typeof value == "string") {
        return value.split("");
    } else if (Array.isArray(value)) {
        return value.join("");
    }
};
// While there is nothing wrong with the above function, let's say we want to make it more readable and maintainable
// We can use function overloading to achieve this
// Imagine there exists such a function called returnStringOrArray

//TODO!! If you comment the declaration in overloaded.d.ts, you will see an error here
//TODO!! Also note that the code implementation of returnStringOrArray is not provided here

// Now, we can use the function like this
let value1 = returnStringOrArray("Hello");
let value2 = returnStringOrArray(["H", "e", "l", "l", "o"]);
