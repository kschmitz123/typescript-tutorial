"use strict";
var character = "Mario";
var age = 30;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7));
var names = ["luigi", "mario", "yoshi"];
names.push("hallo");
// names.push(1);
// names = "hello"
var mixed = ["ken", 4, "hallo", 10];
mixed.push(4);
mixed.push("blubb");
var ninja = {
    name: "mario",
    belt: "black",
    age: 30,
};
ninja.age = 40;
// ninja.age = "hallo"
// ninja.skills = "fight"
ninja = {
    name: "luigi",
    belt: "orange",
    age: 20,
};
// EXPLICIT TYPES
var hobby;
var number;
var isLoggedIn;
number = 3;
isLoggedIn = true;
// isLoggedIn = "yes"
var ninjas;
ninjas = ["kathrin", "lisa"];
// UNION TYPES
var mix = [];
mix.push("hallo");
mix.push(20);
// mix.push(false)
var mix2;
mix2 = "hallo";
mix2 = 23;
var ninjaOne;
ninjaOne = { name: "yoshi", age: 36 };
var ninjaTwo;
ninjaTwo = {
    name: "hugo",
    age: 25,
    belt: "black",
};
// ANY TYPES
var house = 35;
house = "hotel";
house = true;
var mixedArr = [];
mixedArr.push("hallo");
mixedArr.push(false);
