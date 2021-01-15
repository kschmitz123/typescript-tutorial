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
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} ows €${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work", 20);
const invTwo = new Invoice("luigi", "work", 30);

//only objects of class Invoice can be added to array
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});
