import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { hasFormatter } from "./interfaces/hasFormatter";

let docOne: hasFormatter;
let docTwo: hasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 250);

let docs: hasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

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
