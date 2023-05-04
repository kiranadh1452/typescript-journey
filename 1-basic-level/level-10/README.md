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
