import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { hasFormatter } from "./interfaces/hasFormatter";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: hasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

//GENERICS
interface Resource<T> {
  uid: number;
  resource: string;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resource: "hallo",
  data: { name: "kathrin" },
};

const docTwo: Resource<string[]> = {
  uid: 2,
  resource: "hallo",
  data: ["hallo"],
};
console.log(docOne, docTwo);
