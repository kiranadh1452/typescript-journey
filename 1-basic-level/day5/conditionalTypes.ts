/**
 * @Description - Just like conditional statements, conditional types are based on a condition
 * If the condition is true, the the type followed by '?' is used, otherwise the type followed by ':'
 * @Note that, the if condition here can be of form 'T extends U'"
 */

interface StringId {
    id: string;
}

interface NumberId {
    id: number;
}

// Creating a generic type and using conditional types to make it more flexible
type StringOrNumericId<T extends number | string> = T extends number
    ? NumberId
    : StringId;

function getId(id: number): NumberId;
function getId(id: string): StringId;
function getId<T extends number | string>(id: T): StringOrNumericId<T> {
    return { id } as StringOrNumericId<T>;
}

let a = getId(1);
let b = getId("1");

/**
 * @Conditional_Types_Constraints
 * Creating a type, that would flatten an array, otherwise return the type as it is
 */
type Flatten<T> = T extends any[] ? T[number] : T;

type A = Flatten<string[]>;
type B = Flatten<boolean>;

// Here, we are using array in type A as T but boolean in type B as T

/**
 * @Infering_Within_Conditional_Types
 * We can infer the type of a variable within a conditional type
 * This is done by using the 'infer' keyword
 * The type of the variable is inferred from the type of the variable in the condition
 */
type Flatten2<T> = T extends Array<infer U> ? U : T;
type C = Flatten2<string[]>;
type D = Flatten2<boolean>;

/**
 * @Distributive_Conditional_Types
 */
type ToArray_V1<T> = T extends any ? T[] : never;
type ToArray_V2<Type> = Type[];

// here, E would be string[] | number[] and F would be (string | number)[]
type E = ToArray_V1<string | number>;
type F = ToArray_V2<string | number>;
