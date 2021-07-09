//// variables ////
let hello: string = "world";
// hello = true; --> Error: Type 'true' is not assignable to type 'string'

//// functions ////
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
    // return true; --> Error: Type 'true' is not assignable to type 'string'
};

console.log(getFullName("Maisha", "Fatema"));
