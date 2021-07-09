//// variables ////
var hello = "world";
// hello = true; --> Error: Type 'true' is not assignable to type 'string'
//
//// functions ////
var getFullName = function (name, surname) {
    return name + " " + surname;
    // return true; --> Error: Type 'true' is not assignable to type 'string'
};
console.log(getFullName("Maisha", "Fatema"));
var user = {
    name: "Abrar",
    age: 36,
    getMessage: function () {
        return "Hello " + this.name;
    }
};
var user2 = {
    name: "Anika",
    getMessage: function () {
        return "Hello " + this.name;
    }
};
console.log(user.name);
console.log(user.getMessage());
