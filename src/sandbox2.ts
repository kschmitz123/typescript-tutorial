let greet: Function;

// greet = "hello"

greet = () => {
  console.log("hello");
};

// ? makes value optional
// or define default value
// always put optional parameters at end

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
};
add(3, 4);

const minus = (a: number, b: number) => {
  return a + b;
};
//result now automatically is type  number
let result = minus(10, 7);

//define return type explicitly
const plus = (a: number, b: number): number => {
  return a + b;
};

//return type void if function doesnt return anything

type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const greeting = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
const greetingAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

//function signatures
let welcome: (a: string, b: string) => void;

welcome = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

//
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

//
let logDetails: (obj: { name: string; age: number }) => void;

logDetails = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
