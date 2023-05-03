## Topic covered:

-   Creating Types from Types - ([Link from the official website](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html))

    -   [Generics](generics.ts) - Types which take parameters
        -   [Generic Function](generics.ts#L1)
        -   [Generic Interface](generics.ts#L41)
        -   [Generic Class](generics.ts#L51)
        -   [Generic Constraints](generics.ts#L75)
    -   [Keyof Type Operator](keyOfOperator.ts) - Using the `keyof` operator to create new types
        -   [Using keyof operator](keyOfOperator.ts#L1)
        -   [Using keyof operator with generics](keyOfOperator.ts#L18)
        -   [Using keyof operator with index signatures](keyOfOperator.ts#L37)
    -   [Typeof Type Operator and ReturnType](typeofOperator.ts) - Using the `typeof` operator to create new types
    -   [Indexed Access Types](indexedAccessTypes.ts) - Using `Type['a']` syntax to access a subset of a type
    -   [Conditional Types](conditionalTypes.ts) - Types which act like `if` statements in the type system
        -   [Description](conditionalTypes.ts#L1)
        -   [Conditional Types Constraints](conditionalTypes.ts#L29)
        -   [Infering Within Conditional Types](conditionalTypes.ts#L41)
        -   [Distributive Conditional Types](conditionalTypes.ts#L50)
    -   [Mapped Types](mappedTypes.ts) - Creating types by mapping each property in an existing type
        -   [Description](mappedTypes.ts#L1)
        -   [Mapping Modifiers](mappedTypes.ts#L20)
        -   [Key Remapping via as](mappedTypes.ts#L46)
    -   [Template Literal Types](templateLiteralTypes.ts) - Mapped types which change properties via template literal strings
        -   [String Unions In Types](templateLiteralTypes.ts#L1)
        -   [Inference with Template Literals](templateLiteralTypes.ts#L39)
        -   [Intrinsic String Manipulation Types](templateLiteralTypes.ts#L66)
