// Exporting a string variable
export const normalVariable: string = "normalVariable";

// Exporting Types
export type User = {
    name: string;
    age: number;
    address: string;
};

// Exporting object
export const Messi: User = {
    name: "Messi",
    age: 35,
    address: "Argentina",
};

// Default export
const Author: User = {
    name: "Kiran Adhikari",
    age: 23,
    address: "Nepal",
};

export default Author;
