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
