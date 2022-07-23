const billedSubmitEl = document.querySelector(".btn"); // submit button
let searchedAmountEl = document.getElementById("dollar-amt"); // searched amount
let contractualEl = document.getElementById("contractual"); // CO adj element
let expectedEl = document.getElementById("expected"); // expected allowed element

function btnHandler(event) {
  event.preventDefault();
  
  const billedInputEl = document.querySelector(".billed-amt").value; // billed amt input
  billedCalc(billedInputEl);
}

function billedCalc(amount) {
  console.log("billed amount input", amount);

  searchedAmountEl.textContent = "$" + amount;

  let expAllowed = amount * .0923;
  console.log(amount * .0923);
  expectedEl.textContent = "$" + expAllowed;

  let coAdj = amount - expAllowed;
  contractualEl.textContent = "$" + coAdj;
}

billedSubmitEl.addEventListener("click", btnHandler);