declare namespace Test {
    interface User {
        name: string;
        age: number;
    }

    interface Admin extends User {
        role: "admin" | "superadmin" | "owner";
    }

    interface Address {
        street: string;
        city: string;
        country: string;
    }
}
