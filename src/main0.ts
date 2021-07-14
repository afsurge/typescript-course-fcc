//// TS ////
// TS extension to JS - most popular static-type extension for JS
// Getting missing parts of JS - data types
// JS dynamically typed language - easy for small/medium apps - can break only at runtime - for beginners
// Get more safety with TS
// 1. Errors in transpiling not runtime (transpile = translate + compile)
// Get errors earlier, but also some at runtime possible
// 2. Difficult to maintain, scale JS
// Describe only with objects, arrays, strings, etc.
// No data types, cannot create entities, entities with some specific field
// TS helps to work with entities
// TS superset of JS - has everthing from JS plus extension with data types
// TS cannot run in browsers - browsers do not support - need to transpile into JS (similar to Babbel)
// Can switch JS project into TS file by file - not a diff language - TS and JS will work together
// Popular in companies - more safety
// Write better code
// TS transpiles to ES3 by default
//
//// Variables ////
// let hello: string = "world";
// hello = true; --> Error: Type 'true' is not assignable to type 'string'
//
//// Functions ////
// const getFullName = (name: string, surname: string): string => {
//     return name + " " + surname;
//     // return true; --> Error: Type 'true' is not assignable to type 'string'
// };

// console.log(getFullName("Maisha", "Fatema"));
//
//// Interfaces ////
// Interfaces in TS help to describe entities
// By default all properties inside interface mandatory
// Prefix or postfix for all interfaces to avoid confusion with class names e.g. 'interface IUser' and 'class User'
// interface IUser {
//     name: string;
//     age?: number;
//     getMessage(): string;
// }

// const user: IUser = {
//     name: "Abrar",
//     age: 36,
//     getMessage() {
//         return "Hello " + this.name;
//     },
// };

// const user2: IUser = {
//     name: "Anika",
//     getMessage() {
//         return "Hello " + this.name;
//     },
// };

// console.log(user.name);
// console.log(user.getMessage());
//
//// Unions and Type Aliases ////
// Union operator to combine data types
// Types and interfaces written in capital
// type ID = string;
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null;

// interface UserInterface {
//     id: ID;
//     name: string;
//     surname: string;
// }

// let username: string = "alex";

// let pageName: string | number = "1";

// let errorMessage: string | null = null;

// let user: UserInterface | null = null;

// // const popularTags: string[] = ["dragon", "coffee"];
// const popularTags: PopularTag[] = ["dragon", "coffee"];

// const dragonsTags: MaybePopularTag = "dinosaur";
//
//// Any/Void/Never/Unknown
// Void: nothing is returned - set of undefined or null
// Any: should not use - turns off TS checks - not a soln but start of bigger problems
// Never: function with never cannot be executed to the end
// Unknown: from TS3 - cannot assign unknown directly in other type - good alternative for "any"
// Bonus: "as" operator makes type assertion
// const doSomething = (): void => {
//     console.log("doSomething");
// };

// let foo: void = null;
// // foo = "foo";

// const doSomethingElse = (): never => {
//     // console.log("doSomethingElse");
//     throw "never";
// };

// let vAny: any = 10;
// let vUnknown: unknown = 10;

// let s1: string = vAny;
// // let s2: string = vUnknown; --> Error: Type 'unknown' not assignable to type 'string'
// let s2: string = vUnknown as string;

// console.log(vAny.foo());
// // console.log(vUnknown.foo()); --> Error

// let pageNumber: string = "1";
// // let numericPageNumber: number = pageNumber as number; --> Error: Conversion/assertion from 'string' to 'number' maybe mistake --> help to solve issue
// let numericPageNumber: number = pageNumber as unknown as number; // type assertion or "as" data type
//
//// Working with DOM //// (moved to new file)
