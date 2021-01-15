"use strict";
var greet;
// greet = "hello"
greet = function () {
    console.log("hello");
};
// ? makes value optional
// or define default value
// always put optional parameters at end
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
};
add(3, 4);
var minus = function (a, b) {
    return a + b;
};
//result now automatically is type  number
var result = minus(10, 7);
//define return type explicitly
var plus = function (a, b) {
    return a + b;
};
//return type void if function doesnt return anything
