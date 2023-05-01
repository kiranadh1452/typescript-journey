const getTestUser = (): Test.User => {
    return {
        name: "John",
        age: 30,
    };
};

const createUser = (name: string, age: number): Test.User => {
    return {
        name,
        age,
    };
};

const createAdmin = (
    name: string,
    age: number,
    role: "admin" | "superadmin" | "owner"
): Test.Admin => {
    return {
        name,
        age,
        role,
    };
};

const checkIfUserIsAdmin = (user: Test.User): user is Test.Admin => {
    // check if user has role property and it is not undefined
    return "role" in user && user.role !== undefined;
};
