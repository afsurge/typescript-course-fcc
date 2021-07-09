//// variables ////
let hello: string = "world";
// hello = true; --> Error: Type 'true' is not assignable to type 'string'
//
//// functions ////
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
    // return true; --> Error: Type 'true' is not assignable to type 'string'
};

console.log(getFullName("Maisha", "Fatema"));
//
//// interfaces ////
// Interfaces in TS help to describe entities
// By default all properties inside interface mandatory
// Postfix for all interfaces to avoid confusion with class names e.g. 'interface IUser' and 'class User'
interface IUser {
    name: string;
    age?: number;
    getMessage(): string;
}

const user: IUser = {
    name: "Abrar",
    age: 36,
    getMessage() {
        return "Hello " + this.name;
    },
};

const user2: IUser = {
    name: "Anika",
    getMessage() {
        return "Hello " + this.name;
    },
};

console.log(user.name);
console.log(user.getMessage());
