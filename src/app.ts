// const anchor = document.querySelector("a")!;

// console.log(anchor.href);

// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

//classes

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} ows €${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work", 20);
const invTwo = new Invoice("luigi", "work", 30);

//only objects of class Invoice can be added to array
let invoices: Invoice[] = [];
