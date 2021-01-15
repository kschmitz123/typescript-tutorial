"use strict";
let greet;
// greet = "hello"
greet = () => {
    console.log("hello");
};
// ? makes value optional
// or define default value
// always put optional parameters at end
const add = (a, b, c = 10) => {
    console.log(a + b);
};
add(3, 4);
const minus = (a, b) => {
    return a + b;
};
//result now automatically is type  number
let result = minus(10, 7);
//define return type explicitly
const plus = (a, b) => {
    return a + b;
};
const greeting = (user) => {
    console.log(`${user.name} says hello`);
};
const greetingAgain = (user) => {
    console.log(`${user.name} says hello`);
};
//function signatures
let welcome;
welcome = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
