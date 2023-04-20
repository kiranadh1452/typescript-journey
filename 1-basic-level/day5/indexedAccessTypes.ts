/**
 * @UseCase : Indexes can not only be used to access the value but also to access the type
 */
type User = {
    name: string;
    age: number;
    location: string;
};

const messiAsUser: User = {
    name: "Lionel Messi",
    age: 35,
    location: "Argentina",
};

const age = messiAsUser["age"]; // accessing the value
type Age = User["age"]; // accessing the type

// However, if we try to access a property that does not exist, we will get an error.
// Uncomment the line below defining `type Test` to see the error.
// type Test = typeof messiAsUser["test"]; // Error : Property 'test' does not exist on type '{ name: string; age: number; location: string; }'

/**
 * @UseCase : Let's see the case where we have an array of objects to understand this usecase
 */
const meAsUser: User = {
    name: "Kiran Adhikari",
    age: 23,
    location: "Nepal",
};

const users: User[] = [messiAsUser, meAsUser];

// Let's extract the type of one element of the array
type User1 = typeof users[number]; // note that User and User1 are same

/**
 * @UseCase : You can use types when indexing but not with a variable reference
 */
{
    // valid case
    type AgeType1 = User["age"];

    // invalid case
    const ageKey = "age";
    // uncomment the line below for `type AgeType2` to see the error
    // type AgeType2 = User[ageKey]; // Error : 'ageKey' can't be used as an index type

    // valid case
    type AgeKey = "age";
    type AgeType3 = User[AgeKey];
}
