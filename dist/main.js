var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//// Working with DOM ////
//
// TS has lots of types for DOM out of the box
// TS does not know anything about markup, no access to markup
// Element is highest class in hierarchy
// Event is also highest class in hierarchy (event listeners)
// DOM with TS: using "as" operator to indicate what type being used, e.g. HTMLInputElement, HTMLImageElement, etc.
//
// const someElement = document.querySelector(".foo"); // someElement type 'Element'
var someElement = document.querySelector(".foo"); // someElement type 'HTMLInputElement'
// console.log("someElement", (someElement as any).value); // when type of someElement is generic, should not use!
console.log("someElement", someElement.value); // when type of someElement well specified (as input), has prop of value
var anotherElement = document.querySelector(".foo");
anotherElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event", target.value);
});
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    // changeUnchangeableName(): void {
    //     this.unchangeableName = "foo"; // Error! cannot change read-only prop
    // }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var user = new User("Abrar", "Faisal");
console.log(user.getFullName());
// console.log(user.firstName); // Error! firstName is private
// console.log(user.maxAge); // Error! maxAge not available to user instance of User
console.log(User.maxAge);
var admin = new Admin("Dark", "Knight");
console.log(admin.lastName);
