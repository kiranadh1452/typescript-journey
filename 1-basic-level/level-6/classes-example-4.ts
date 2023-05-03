/**
 * @this_pointer_and_arrow_function
 */
{
    class TestClass {
        name = "TestClass";
        getName() {
            return this.name;
        }
    }

    const myObj = new TestClass();
    console.log(myObj.getName()); // TestClass

    const customObj = {
        name: "CustomObj",
        getName: myObj.getName,
    };

    console.log(customObj.getName()); // CustomObj , we don't get "TestClass"

    /**
     * @question : How to fix the above issue ?
     * @solution : use arrow function
     */
    class TestClass2 {
        name = "TestClass2";
        getName = () => {
            return this.name;
        };
    }

    const myObj2 = new TestClass2();
    console.log(myObj2.getName()); // TestClass2

    const customObj2 = {
        name: "CustomObj2",
        getName: myObj2.getName,
    };

    console.log(customObj2.getName()); // TestClass2
    // Now we get "TestClass2" in both cases
}

/**
 * @this_parameters
 * As opposed to above examples, we can use this parameters.
 * However, this parameter would be auto removed from the compiled version.
 * @For_Example : function(this , a) would be turned into function(a)
 * @Note : Arrow functions cannot have this parameters
 */
{
    class TestClass {
        name = "TestClass";
        getName(this: TestClass) {
            return this.name;
        }
    }

    class TestClass1 {
        name = "TestClass1";
        getName() {
            return this.name;
        }
    }

    const myObj1 = new TestClass();
    const myObj2 = new TestClass1();

    const testFun1 = myObj1.getName; // TS won't let you invoke this function
    const testFun2 = myObj2.getName;

    // Uncomment the below line calling `testFun1()` to see the error
    // testFun1();
    // Error : The 'this' context of type 'void' is not assignable to method's 'this' of type 'TestClass'
    testFun2();
}
