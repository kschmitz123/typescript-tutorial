let character = "Mario";

let age = 30;

const circ = (diameter: number) => {
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
let hobby: string;
let number: number;
let isLoggedIn: boolean;

number = 3;
isLoggedIn = true;
// isLoggedIn = "yes"

let ninjas: string[];
ninjas = ["kathrin", "lisa"];

// UNION TYPES
let mix: (string | number)[] = [];
mix.push("hallo");
mix.push(20);
// mix.push(false)

let mix2: string | number;
mix2 = "hallo";
mix2 = 23;

let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 36 };

let ninjaTwo: {
  name: string;
  age: number;
  belt: string;
};

// ANY TYPES
let house: any = 35;
house = "hotel";
house = true;

let mixedArr: any[];
mixedArr.push("hallo");
mixedArr.push(false);
