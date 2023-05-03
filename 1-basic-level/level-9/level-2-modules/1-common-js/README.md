## This demo is an illustration on how we can use declaration files with existing JS modules.

### What we have done here?

-   Step 1: We created a `commonJsModule.js` file which exports a constant, an object and a function.
-   Step 2: We added a `commonJsModule.d.ts` file which contains the declaration of the module. This would help TypeScript to understand the module.
-   Step 3: In order to verify that the type restrictions introduced in the declaratin file are working, we added a `test.ts` file which imports the module and tries to use the exported members in a way that is not allowed by the declaration file.
    > Upon trying to use the exported members in a way that is not allowed by the declaration file, we should be getting errors in the `test.ts` file. If not, then we have done something wrong in the declaration file.
