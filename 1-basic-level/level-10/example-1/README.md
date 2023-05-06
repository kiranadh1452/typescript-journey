## Sample Express APP

!!Warning this is not a real app, it only represents the structure of an express server.

In [package.json](package.json), we have installed the types for express and node as dev dependencies.
These types are used by the TypeScript compiler to check the types of the code.

In this project, we only need to compile a single file which is [main.ts file](main.ts).
We can directly do that by running the command :

```bash
  tsc main.ts
```

However, the aim here is to learn how to use the `tsconfig.json` file to configure the compiler.
So, we would be creating a `tsconfig.json` file in the root folder of the project.

We can use the following command to create the `tsconfig.json` file:

```bash
  tsc --init
```

For this particular, case we won't need to change anything in the `tsconfig.json` file.
As the only file we need to compile is the `main.ts` file and it can be placed in the root folder of the project.

If the case had been different, we would have to change the `rootDir` and `outDir` properties in the `tsconfig.json` file.

## Run the Express App

-   To run the app, run the following command:

```bash
  npm run dev
```

> Notice that we are using a package called `concurrently` to run two commands in parallel.
