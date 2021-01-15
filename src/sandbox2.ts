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
