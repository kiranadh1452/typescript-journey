## Sample Express APP

This is an upgraded version of the sample express app that we created in the previous level. This app has the following new features:

-   It uses a router called "TestRoute" imported from another file.
-   It has more than 1 typescript file.
-   There is a file called "test_donot_compile.ts" which is not compiled by typescript compiler. This is because it is excluded in the tsconfig.json file.

See the [tsconfig.json](./tsconfig.json) file to see how the `test_donot_compile.ts` file is excluded from compilation.

> For demo purpose, I have distributed the `test_donot_compile.ts` file across multiple locations. See how other .ts file are compiled to .js file but this file is not compiled.
