/**
 * @Namespaces
 * These are somehow similar to modules, but TS provided ones.
 * These are used to group related functions, interfaces, classes, etc.
 */
namespace Testing {
    const printHello = (): void => {
        console.log("Hello");
    };

    export const printWorld = (): void => {
        console.log("World");
    };
}

// Testing.printHello(); // This would give an error as printHello is not exported
Testing.printWorld();
