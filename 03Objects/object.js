"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myObjects = {
    name: "Aryan",
    age: 22,
    email: "qBjXQ@example.com",
    isTall: true
};
//this function shows that it is taking argument as an object and returning an object
function loginUser() {
    return {};
}
function createUser() {
    return { name: "Aryan", email: "qBjXQ@example.com", isActive: true };
}
createUser();
function createCourse(_a) {
    var string = _a.name, number = _a.price;
}
var newCourse = { name: "TypeScript", price: 10, isPaid: false }; //by this isPaid can be passed to this function 
createCourse(newCourse);
