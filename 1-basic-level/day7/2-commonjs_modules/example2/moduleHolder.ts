// creating a type
type User = {
    name: string;
    age: number;
    address: string;
};

// Exporting the variables
module.exports = {
    Messi: {
        name: "Messi",
        age: 35,
        address: "Argentina",
    } as User,
    Author: {
        name: "Kiran Adhikari",
        age: 23,
        address: "Nepal",
    } as User,
    normalVariable: "normalVariable" as string,
};
