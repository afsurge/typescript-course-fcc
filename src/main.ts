//// Working with DOM ////
//
// TS has lots of types for DOM out of the box
// TS does not know anything about markup, no access to markup
// Element is highest class in hierarchy
// Event is also highest class in hierarchy (event listeners)
// DOM with TS: using "as" operator to indicate what type being used, e.g. HTMLInputElement, HTMLImageElement, etc.
//
// const someElement = document.querySelector(".foo"); // someElement type 'Element'
const someElement = document.querySelector(".foo") as HTMLInputElement; // someElement type 'HTMLInputElement'

// console.log("someElement", (someElement as any).value); // when type of someElement is generic, should not use!
console.log("someElement", someElement.value); // when type of someElement well specified (as input), has prop of value

const anotherElement = document.querySelector(".foo");

anotherElement.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement;
    console.log("event", target.value);
});
//
//// Classes in TS ////
//
// Classes are sugar around prototypes
// Private, Public and Protected
// Everything public by default - props and methods can be accessed inside and outside class
// Private - can use only inside class
// Protected - can use in class and it's children
// readonly in TS - useful for making constants inside class - cannot modify
// static properties - not avaiable from instances but only in class themselves
// Inheritance in TS
//
interface UserInterface {
    getFullName(): string; // class User must have this function
}

class User implements UserInterface {
    private firstName: string;
    lastName: string;
    readonly unchangeableName: string;
    static readonly maxAge = 50;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }

    // changeUnchangeableName(): void {
    //     this.unchangeableName = "foo"; // Error! cannot change read-only prop
    // }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

class Admin extends User {
    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor;
    }

    getEditor(): string {
        return this.editor;
    }
}

const user = new User("Abrar", "Faisal");
console.log(user.getFullName());
// console.log(user.firstName); // Error! firstName is private
// console.log(user.maxAge); // Error! maxAge not available to user instance of User
console.log(User.maxAge);

const admin = new Admin("Dark", "Knight");
console.log(admin.lastName);
