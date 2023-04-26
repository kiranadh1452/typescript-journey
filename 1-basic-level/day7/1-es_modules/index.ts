// importing a normal variable
import { normalVariable } from "./moduleHolder.js";

// importing a type
import type { User } from "./moduleHolder.js"; // There is no need to include "type" keyword after import but it is recommended to do so.

// importing an object
import { Messi } from "./moduleHolder.js";

// importing the default export
import Kiran from "./moduleHolder.js";

// All of these imports can be done in a single line as well
// import Kiran, { normalVariable, Messi, type User } from "./moduleHolder.js";

const testFunction = (): void => {
    console.log(normalVariable);
    console.log(Messi);
    console.log(Kiran);

    const newCreatedUser: User = {
        name: "New User",
        age: 20,
        address: "Nepal",
    };

    console.log(newCreatedUser);
};

testFunction();
