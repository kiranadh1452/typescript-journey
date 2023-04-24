/**
 * @Static_Members
 * Static members are accessed on the class itself rather than on the instances of the class.
 */
{
    class User {
        static test = "test-value";
        static staticMethod() {
            console.log("static method");
        }
    }

    User.staticMethod();
    console.log(User.test);
}

/**
 * @Special_static_names
 * Since class is also a function, it is not safe to overwrite properties of the Function prototype.
 * Function properties like name, length, etc. are not valid to define as static members.
 */
{
    // uncomment to see the error
    /*
    class User {
        static name = "user";
        static length = 10;
    }
    */
}

/**
 * @Static_blocks_in_classes
 * Static blocks are executed when the class is defined.
 * Static blocks have access to the class's internals.
 */
{
    class User {
        static #id = 116;

        get id() {
            return User.#id;
        }

        static {
            try {
                console.log("Trying to get uid from local storage");

                const uid = localStorage.getItem("uid");
                uid && (User.#id = parseInt(uid));
            } catch (error) {
                console.log("Could not get uid from local storage");
            }
        }
    }
}

/**
 * @Generic_Classes
 */
{
    class Arrayy<T> {
        private arr: T[] = [];

        constructor(...items: T[]) {
            this.arr.push(...items);
        }

        push(item: T) {
            this.arr.push(item);
        }

        pop() {
            return this.arr.pop();
        }

        print() {
            console.log(this.arr);
        }
    }

    const numericArray = new Arrayy<number>(1, 2, 3);
    const stringArray = new Arrayy<string>("a", "b", "c");

    numericArray.push(4);
    stringArray.push("d");

    // print the arrays
    numericArray.print();
    stringArray.print();
}

/**
 * @Type_Parameters_in_static_members
 * Static members cannot reference class type parameters.
 */
{
    class Arrayy<T> {
        private arr: T[] = [];
        // static test: T; // Uncomment to see the error - Static members cannot reference class type parameters.

        constructor(...items: T[]) {
            this.arr.push(...items);
        }

        push(item: T) {
            this.arr.push(item);
        }

        pop() {
            return this.arr.pop();
        }

        print() {
            console.log(this.arr);
        }
    }
}
