// Requring in this way would auto grant all the variables in moduleHolder
require("./moduleHolder.js");

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
