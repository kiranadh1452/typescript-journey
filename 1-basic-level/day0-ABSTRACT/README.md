### Composing Types

1. Unions

    - `"|"` operator
    - ```ts
      type StringOrNumber = string | number;
      ```

2. Generics

    - `<T>` operator
    - ```ts
      // these examples are from the official docs

      // e.g 1: In this case, the array can only contain strings
      type StringArray = Array<string>;

      // e.g 2: In this case, the array can contain any object with a name property
      type ObjectWithNameArray = Array<{ name: string }>;
      function identity<T>(arg: T): T {
          return arg;
      }
      ```

### Some useful links:

1. [Types vs Interfaces](https://www.typescriptlang.org/play?e=83#example/types-vs-interfaces)
