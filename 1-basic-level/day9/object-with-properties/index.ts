// for now, lets think we have a package called "testPackage"
// For the sake of simplicity, I would create a global variable called "testPackage"
global.testPackage = {
    value: 0,
    increment() {
        console.log("Incrementing...");
        this.value++;
        return this.value;
    },
    decrement() {
        console.log("Decrementing...");
        this.value--;
        return this.value;
    },
};

let value = testPackage.increment();
console.log(testPackage.value);

// Comment down the code in testPackage.d.ts and see how the code in this file breaks
