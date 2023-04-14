/**
 * @How to run this file with tsc?
 * @Compile_Using : 'tsc index.ts' to compile the file - this would generate a index.js file
 * @Use_ES6 : 'tsc --target es6 index.ts' to compile the file and use es6 features
 */

interface Profile {
    name: string;
    age: number;
}

const profile = {
    name: "Random",
    age: Math.floor(Math.random() * 100),
};

// Function to create a profile object
const createProfile = (name: string, age: number): Profile => {
    return {
        name,
        age,
    };
};

// Function to show the profile object data
const showProfile = (profile: Profile) => {
    console.log(`Name: ${profile.name}, Age: ${profile.age}`);
};

// Now we can pass the object to the `showProfile` function
showProfile(profile);
