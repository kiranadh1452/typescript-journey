/**
 * @String_Unions_In_Types
 */
{
    type Subscription = "Basic" | "Premium" | "Pro";
    type PaymentStatus = "Paid" | "Unpaid" | "Pending";

    type TestSubscription = `test_${Subscription}`; // adds test_ prefix to Subscription union
    type TestPaymentStatus = `test_${PaymentStatus}`; // adds test_ prefix to PaymentStatus union

    type TestSubAndPayment = `test_${Subscription}_${PaymentStatus}`; // creates 3 * 3 = 9 combinations and each starts with test_
}

// The following example was taken from the official documentation
type PropEventSource_v1<Type> = {
    on(
        eventName: `${string & keyof Type}Changed`,
        callback: (newValue: any) => void
    ): void;
};

/// Create a "watched object" with an 'on' method
/// so that you can watch for changes to properties.
declare function makeWatchedObject_v1<Type>(
    obj: Type
): Type & PropEventSource_v1<Type>;

const person = makeWatchedObject_v1({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
});

// notice the type of newValue is "any"
person.on("firstNameChanged", (newValue) => {
    console.log(`new firstName: ${newValue.toUpperCase()}`);
});

/**
 * @Inference_With_Template_Literal
 * In the above example, the callback function has "any" type for the newValue parameter.
 * Let's fix this by using template literal types to infer the type of newValue.
 */
type PropEventSource_v2<Type> = {
    on<Key extends string & keyof Type>(
        eventName: `${Key}Changed`,
        callback: (newValue: Type[Key]) => void
    ): void;
};

declare function makeWatchedObject_v2<Type>(
    obj: Type
): Type & PropEventSource_v2<Type>;

const person_v2 = makeWatchedObject_v2({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
});

// notice the type of newValue is "string"
person_v2.on("firstNameChanged", (newValue) => {
    console.log(`new firstName: ${newValue.toUpperCase()}`);
});

/**
 * @Intrinsic_String_Manipulation_Types
 * There are a few string manipulation types that are built into TypeScript.
 * These are:
 * 1. Uppercase
 * 2. Lowercase
 * 3. Capitalize
 * 4. Uncapitalize
 */
{
    type UppercaseType = Uppercase<"hello world">; // "HELLO WORLD"
    type LowercaseType = Lowercase<"HELLO WORLD">; // "hello world"
    type CapitalizedType = Capitalize<"hello world">; // "Hello world"
    type UncapitalizedType = Uncapitalize<"Hello world">; // "hello world"
}
