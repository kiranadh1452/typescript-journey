/**
 * Types and Interfaces
 */

/**
 * Types
 */
{
    // creating two simple types
    type PaymentStatus = "pending" | "success" | "failed";
    type SubscriptionStatus = "active" | "paused" | "cancelled";

    // Creating a type made up of other types
    type User = {
        name: string;
        age: number;
        paymentStatus: PaymentStatus;
        subscriptionStatus: SubscriptionStatus;
    };

    /**
     * description: This function takes a user object as an argument and checks if the user has an active subscription and payment is successful
     * @param user - user object
     * @returns boolean
     */
    const checkUserStatus = (user: User): boolean => {
        if (
            user.subscriptionStatus === "active" &&
            user.paymentStatus === "success"
        ) {
            return true;
        } else {
            return false;
        }
    };

    // extending a type
    type UserWithAddress = User & {
        address: string;
    };
}

/**
 * Interfaces
 */
{
    // Defining a simple `Profile` interface with a name and age property
    interface Profile {
        name: string;
        age: number;
    }

    // creating a function that takes an argument which implements the Profile interface
    const showProfile = (profile: Profile) => {
        console.log(`Name: ${profile.name}, Age: ${profile.age}`);
    };

    /**
     * Creating a object which matches the Profile interface
     * @But notice that we haven't explicitly defined the type of the object to be `Profile`
     */
    const user1Profile = {
        name: "Messi",
        age: 37,
    };

    /**
     * calling the function with the object
     * @Output `Name: Messi, Age: 37`
     * @Note that the function accepts the object without any error even though we haven't explicitly defined the type of the object to be `Profile`
     * This is because the object matches the Profile interface. This is called `structural typing`
     */
    showProfile(user1Profile);

    /**
     * @Another_Case
     * Defining a object that has extra properties which are not defined in the Profile interface
     */
    const user2Profile = {
        name: "Messi",
        age: 37,
        country: "Argentina",
    };
    showProfile(user2Profile); // @Output `Name: Messi, Age: 37` without any error
}
