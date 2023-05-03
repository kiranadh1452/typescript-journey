const { Messi, Author, normalVariable } = require("./moduleHolder.js");

// note that the type User is declared in the global scope of the moduleHolder.ts file, hence we can use it here
const testFunction = (): void => {
    console.log(Messi);
    console.log(Author);
    console.log(normalVariable);

    const newCreatedUser: User = {
        name: "New User",
        age: 20,
        address: "Nepal",
    };

    console.log(newCreatedUser);
};

testFunction();
