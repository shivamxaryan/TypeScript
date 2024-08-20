"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase();   wont able to use as it is a number
    return num + 2; // return "hello"  this will be allowed here
}
function addTwo1(num) {
    return num + 2;
    // return "hello"; this is not allowed now
}
function upperCase(str) {
    return str.toUpperCase();
}
var loginUser = function (isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return isPaid ? "paid" : "not paid";
};
addTwo(5);
addTwo1(5);
upperCase("5");
loginUser(true);
var heroes = ["Batman", "Superman", "Spiderman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function errMsg(err) {
    console.log(err);
}
function errMessage(msg) {
    throw new Error(msg); // used never because it will never return anything
}
