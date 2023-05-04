const messiAge = 35;
const messiAddress = {
    country: "Argentina",
    city: "Rosario",
    street: "Avenida Pellegrini",
};

function helloFromMessi(name) {
    console.log("Hello " + name + ", this is messi");
}

module.exports = {
    messiAge,
    messiAddress,
    helloFromMessi,
};

/**
 * For this module, we have a declaration file (commonJsModule.d.ts) that contains the type definitions for the module.
 */
