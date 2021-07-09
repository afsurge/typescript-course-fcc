//// variables ////
var hello = "world";
// hello = true; --> Error: Type 'true' is not assignable to type 'string'
//// functions ////
var getFullName = function (name, surname) {
    return name + " " + surname;
    // return true; --> Error: Type 'true' is not assignable to type 'string'
};
console.log(getFullName("Maisha", "Fatema"));
