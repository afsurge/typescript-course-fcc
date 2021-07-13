//// Working with DOM ////
//
// TS has lots of types for DOM out of the box
// TS does not know anything about markup, no access to markup
// Element is highest class in hierarchy
// Event is also highest class in hierarchy (event listeners)
// DOM with TS: using "as" operator to indicate what type being used, e.g. HTMLInputElement, HTMLImageElement, etc.
//
// const someElement = document.querySelector(".foo"); // someElement type 'Element'
// const someElement = document.querySelector(".foo") as HTMLInputElement; // someElement type 'HTMLInputElement'

// // console.log("someElement", (someElement as any).value); // when type of someElement is generic, should not use!
// console.log("someElement", someElement.value); // when type of someElement well specified (as input), has prop of value

// const anotherElement = document.querySelector(".foo");

// anotherElement.addEventListener("blur", (event) => {
//     const target = event.target as HTMLInputElement;
//     console.log("event", target.value);
// });
// //
// //// Classes in TS ////
// //
// // Classes are sugar around prototypes
// // Private, Public and Protected
// // Everything public by default - props and methods can be accessed inside and outside class
// // Private - can use only inside class
// // Protected - can use in class and it's children
// // readonly in TS - useful for making constants inside class - cannot modify
// // static properties - not avaiable from instances but only in class themselves
// // Inheritance in TS
// //
// interface UserInterface {
//     getFullName(): string; // class User must have this function
// }

// class User implements UserInterface {
//     private firstName: string;
//     lastName: string;
//     readonly unchangeableName: string;
//     static readonly maxAge = 50;

//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.unchangeableName = firstName;
//     }

//     // changeUnchangeableName(): void {
//     //     this.unchangeableName = "foo"; // Error! cannot change read-only prop
//     // }

//     getFullName(): string {
//         return this.firstName + " " + this.lastName;
//     }
// }

// class Admin extends User {
//     private editor: string;

//     setEditor(editor: string): void {
//         this.editor = editor;
//     }

//     getEditor(): string {
//         return this.editor;
//     }
// }

// const user = new User("Abrar", "Faisal");
// console.log(user.getFullName());
// // console.log(user.firstName); // Error! firstName is private
// // console.log(user.maxAge); // Error! maxAge not available to user instance of User
// console.log(User.maxAge);

// const admin = new Admin("Dark", "Knight");
// console.log(admin.lastName);
// //
// //// Generics in TS ////
// //
// // No argument type in func - will be "any"
// // Big "T" default name for generic
// // All generic data types inside "<>"
// // Explicit declarations easier to read
// // Setting default generic type - <T extends object> in func definition
// // Generics with interfaces - "<T>" after name to make interface generic
// // Generics allow to provide diff data types
// // Read data types in libraries - example: Ramda library for func. programming - course available
// //
// const addId = <T extends object>(obj: T) => {
//     const id = Math.random().toString(16);
//     return {
//         ...obj,
//         id,
//     };
// };

// interface UserInterface<T, V> {
//     name: string;
//     data: T;
//     meta: V;
// }

// const user: UserInterface<{ meta: string }, string> = {
//     name: "Jack",
//     data: {
//         meta: "foo",
//     },
//     meta: "bar",
// };

// // const user2: UserInterface<string[]> = {
// //     name: "John",
// //     data: ["good", "evening", "sir"],
// // };

// const result1 = addId<UserInterface<{ meta: string }, string>>(user);
// console.log("result1", result1);

// // const result2 = addId<UserInterface<string[]>>(user2);
// // console.log("result2", result2);
// //
// // Ramda examples //
// // need ramda installed for below code to work
// //
// // 1. Returns a new list containing the contents of the given list, followed by the given element.
// // export function append<T>(el: T, list: readonly T[]): T[];
// // EX: const updateArray = append<string>("sir", ["good", "morning"]);
// //
// // 2. Returns true if at least one of elements of the list match the predicate, false otherwise.
// // export function any<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
// // EX:
// // const searchStr = "good";
// // const hasSearchedString = any<string>((el: string) => el.includes(searchStr), ["good", "morning", "sir"]);
//
//// Enums in TS ////
//
// "enum" - reserved word to create enumerable
// Names with capital letter is default code style
// Values incremented from zero
// Can use enum as value and data type
// Can have enums with only keys or key-value (string) pairs
// Use prefix or postfix in enum names like for interface names
//
const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2,
};

console.log(statuses.inProgress); // logs 1

// enum Status {
//     NotStarted,
//     InProgress,
//     Done,
// }

enum StatusEnum {
    NotStarted = "Not started",
    InProgress = "In progress",
    Done = "Done",
}

console.log(StatusEnum.InProgress); // also logs 1 (for no values set in enum) OR "In progress" for enum with key-value pairs

interface Task {
    id: string;
    status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

// notStartedStatus = "foo"; // Error: cannot assign anything other than keys of type Status
notStartedStatus = StatusEnum.Done;

console.log(notStartedStatus);
