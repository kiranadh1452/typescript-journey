## Project Configuration

-   We can create a `tsconfig.json` file to configure the TypesScript in our project.
-   This file specifies the root files and the compiler options required to compile the project.
-   In order to use this file, we need to run the `tsc` command in the root folder of the project.
    ```bash
    tsc
    ```
-   Alternatively, we can provide the path of the `tsconfig.json` file to the `tsc` command.
    ```bash
    tsc -p ./src/tsconfig.json
    ```

## Examples

-   [Example 1](./example-1/README.md)
    -   In this example, we have a simple express app that returns a same message for all the routes.
    -   There is a single file that needs to be compiled.
    -   This example uses express and body-parser in the server file.
-   [Example 2](./example-2/README.md)
    -   In this example, we have a modified app than the previous example.
    -   This contains a router called "TestRoute" imported from another file. (attached to '/test' endpoint)
    -   There are multiple files that needs to be compiled.
    -   Also, there are certain typescript files that are not to be compiled.
-   [Example 3](./example-3/README.md)
    -   In this example, we have a modified app than the previous example (example-2).
    -   This app uses the `dotenv` package to load environment variables from `config.env` file from `config` folder.
    -   Unlike the previous example, the output JS files are generated in a separate folder `public` now. Previously, the output files were generated in the same folder as the source files.
