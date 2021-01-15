import { Invoice } from "./classes/Invoice.js";

//interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "kathrin",
  age: 27,
  speak(text: "hallo") {
    console.log(text);
  },
  spend(amount: number) {
    console.log("I spent", amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log("hello", person.name);
};

greetPerson(me);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

const invOne = new Invoice("mario", "work", 20);
const invTwo = new Invoice("luigi", "work", 30);

//only objects of class Invoice can be added to array
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});
