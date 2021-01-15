"use strict";
let character = "Mario";
let age = 30;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7));
let names = ["luigi", "mario", "yoshi"];
names.push("hallo");
// names.push(1);
// names = "hello"
let mixed = ["ken", 4, "hallo", 10];
mixed.push(4);
mixed.push("blubb");
let ninja = {
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
let hobby;
let number;
let isLoggedIn;
number = 3;
isLoggedIn = true;
// isLoggedIn = "yes"
let ninjas;
ninjas = ["kathrin", "lisa"];
// UNION TYPES
let mix = [];
mix.push("hallo");
mix.push(20);
// mix.push(false)
let mix2;
mix2 = "hallo";
mix2 = 23;
let ninjaOne;
ninjaOne = { name: "yoshi", age: 36 };
let ninjaTwo;
ninjaTwo = {
    name: "hugo",
    age: 25,
    belt: "black",
};
// ANY TYPES
let house = 35;
house = "hotel";
house = true;
let mixedArr = [];
mixedArr.push("hallo");
mixedArr.push(false);
