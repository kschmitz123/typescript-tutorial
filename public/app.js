"use strict";
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
// const form = document.querySelector("form");
var form = document.querySelector(".new-item-form");
// console.log(form.children);
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " ows \u20AC" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work", 20);
var invTwo = new Invoice("luigi", "work", 30);
//only objects of class Invoice can be added to array
var invoices = [];
