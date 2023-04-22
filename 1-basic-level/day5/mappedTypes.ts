/**
 * @Description_of_Mapped_Types
 * Mapped Types build on the syntax of index types and let you create new types.
 */
type Test = "test";

type TestMode<T> = {
    [Property in keyof T]: Test;
};

type User = {
    name: string;
    address: string;
};

type TestUser = TestMode<User>;
// notice how TestUser has all the properties of User but the type is different
// Above example explains one of the uses of mapped types

/**
 * @Mapping_Modifiers
 * Modifiers ('?' and 'readonly') can also be applied or removed during mapping
 * @Add these with '+' sign
 * @Remove these with '-' sign
 */
{
    type ReadonlyUser = {
        readonly name: string;
        readonly address: string;
        isMarried: boolean;
    };

    type CreateMutable<T> = {
        -readonly [Property in keyof T]: T[Property];
    };

    type CreateOptioality<T> = {
        [Property in keyof T]+?: T[Property];
    };

    type MutableUser = CreateMutable<ReadonlyUser>; // notice the removal of readonly modifier in MutableUser
    type OptionalUser = CreateOptioality<MutableUser>; // noteice the addition of optional behavour in OptinalUser
}

/**
 * @Key_Remapping_via_as
 * In TypeScript 4.1 and onwards, you can re-map keys in mapped types with an as clause in a mapped type.
 * Let's create an example where we create a new type by removing one of the properties from the original type.
 */
{
    type User = {
        name: string;
        age: number;
        address: string;
        isMarried: boolean;
    };

    // using key remapping
    type RemoveProperty<T, K extends keyof T> = {
        [Property in keyof T as Exclude<Property, K>]: T[Property];
    };

    type UserWithoutAddress = RemoveProperty<User, "isMarried">;

    /**
     * The following example was taken from the official documentation
     */
    {
        type EventConfig<Events extends { kind: string }> = {
            [E in Events as E["kind"]]: (event: E) => void;
        };

        type SquareEvent = { kind: "square"; x: number; y: number };
        type CircleEvent = { kind: "circle"; radius: number };

        type Config = EventConfig<SquareEvent | CircleEvent>;
    }
}
