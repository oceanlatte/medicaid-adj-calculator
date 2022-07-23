const billedSubmitEl = document.querySelector(".btn"); // submit button
let searchedAmountEl = document.getElementById("dollar-amt"); // searched amount
let contractualEl = document.getElementById("contractual"); // CO adj element
let expectedEl = document.getElementById("expected"); // expected allowed element

function btnHandler(event) {
  event.preventDefault();
  
  let billedInputEl = document.querySelector(".billed-amt").value; // billed amt input
  billedCalc(billedInputEl);
}

function billedCalc(amount) {
  // takes searched amount and prints it to the lower "billed amount" line
  searchedAmountEl.textContent = "$" + amount;

  // take billed amount and prints the expected allowed
  let expAllowed = amount * .0923;
  console.log(amount * .0923);
  expectedEl.textContent = "$" + expAllowed;

  // take billed amount minus expected to get contractual adjustment
  let coAdj = amount - expAllowed;
  contractualEl.textContent = "$" + coAdj;
}

billedSubmitEl.addEventListener("click", btnHandler);