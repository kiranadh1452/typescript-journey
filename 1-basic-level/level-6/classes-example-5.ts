/**
 * @Parameter_Properties
 * In Ts, we can declare properties in the constructor parameters.
 * Such properties are called parameter properties.
 * @Note : They are created by prefixing a constructor parameter with an accessibility modifier (public, private, protected) or readonly, or both.
 * @Warning : If there are no accessibility modifiers or readonly, then it won't be a parameter property.
 */
{
    class TestClass {
        constructor(public name: string) {
            // no need to write this.name = name
        }
    }

    const myObj = new TestClass("Hello, Hello");
    console.log(myObj.name); // Hello, Hello
}

/**
 * @Class_Expressions
 * Class expressions are another way to define a class.
 * Class expressions do not require class names.
 */
{
    const TestClass = class {
        name = "TestClass";
        getName() {
            return this.name;
        }
    };

    const myObj = new TestClass();

    /**
     * Let's extend the above case to generic class expressions
     */
    const classWithType = class<T> {
        name: T;
        constructor(value: T) {
            this.name = value;
        }
    };

    const numberClass = new classWithType(123);
    const stringClass = new classWithType("Hello, Hello");
}
