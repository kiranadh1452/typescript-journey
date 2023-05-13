## Sample Express APP

This is an upgraded version of the sample express app in [example-2](../example-2/README.md).
Functionality wise, this app is still the same as in previous example. However, the difference lies in TS Configuration.

This app has the following new features:

-   Uses `dotenv` package to load environment variables from `config.env` file.
-   The output JS files are generated in a separate folder `public` now. Previously, the output files were generated in the same folder as the source files.
-   Scripts in `package.json` file are updated to reflect the new output folder.
-   The config files are also moved into the output folder `public`. This is done by adding a `copy-config` script in `package.json` file.

> You may want the output files to be in a different folder name, not in `public`. It can be changed by updating the `outDir` property in `tsconfig.json` file. But do remember to make these changes in `package.json` file as well. Update `<FOLDER-NAME>` in the following sections of `package.json` file:

```json
    ...
    "main": "<FOLDER-NAME>/main.js",
    "scripts": {
      "copy-config" : "cp -r ./src/config ./<FOLDER-NAME>/src/",
      "build": "npx tsc && npm run copy-config",
      "start": "node <FOLDER-NAME>/main.js",
      "dev": "concurrently \"npx tsc --watch\" \"npm run build\" \"nodemon -q <FOLDER-NAME>/main.js\""
    },
    ...
```
