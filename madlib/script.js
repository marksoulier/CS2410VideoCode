const form = document.getElementById("madlibform");
const output = document.getElementById("output");

form.addEventListener("submit",  (e) => {
  e.preventDefault();
  console.log(e.target.noun.value);
  console.log(e.target.verb1.value);
  console.log(e.target.verb2.value);
  console.log(e.target.adjective.value);
  console.log(e.target.object.value);
  if (e.target.noun.value === "") {
    output.innerHTML = "Please enter a Proper noun.";
    return;
  }
  if (e.target.verb1.value === "") {
    output.innerHTML = "Please enter a valid first verb.";
    return;
  }
  if (e.target.verb2.value === "") {
    output.innerHTML = "Please enter the second verb.";
    return;
  }
  if (e.target.adjective.value === "") {
    output.innerHTML = "Please enter an adjective.";
    return;
  }
  if (e.target.object.value === "") {
    output.innerHTML = "Please enter a object.";
    return;
  }

  const noun = e.target.noun.value;
  const verb1 = e.target.verb1.value;
  const verb2 = e.target.verb2.value;
  const adjective = e.target.adjective.value;
  const object = e.target.object.value;

  output.innerHTML = `A long time ago in a galaxy far far away. The ${adjective} ${noun} ${verb1} the ${object} ${verb2}.`;
});

const form2 = document.getElementById("mortgageform");
const loanamount = form2.loanAmount;
const interest = form2.interestRate;
const years = form2.loanTerm;
const calculation = document.getElementById("output-mortgage"); 

var loanAmount = loanamount.value;
var interestRate = interest.value;
var loanTerm = years.value;
calculateMortgage(loanAmount, interestRate, loanTerm);

loanamount.addEventListener("blur", (e) => {
  var loanAmount = e.target.value;
  if (loanAmount === "" || isNaN(loanAmount)) {
    loanamount.value = "10000";
    return;
  } else {
    loanAmount = loanamount.value;
    calculateMortgage(loanAmount, interestRate, loanTerm);
  }
});

interest.addEventListener("blur", (e) => {4
  var interestRate = e.target.value;
  if (interestRate === "" || isNaN(interestRate)) {
    interest.value = "5.5";
    return;
  } else {
    interestRate = interest.value;
    calculateMortgage(loanAmount, interestRate, loanTerm);
  }
});

years.addEventListener("blur", (e) => {
  var loanTerm = e.target.value;
  if (loanTerm === "" || isNaN(loanTerm)) {
    years.value = "30";
    return;
  } else {
    loanTerm = years.value;
    calculateMortgage(loanAmount, interestRate, loanTerm);
  }
});

function calculateMortgage(loanAmount, interestRate, loanTerm) {
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const compoundedInterestRate = Math.pow(1 + monthlyInterestRate, numberOfPayments);
  const interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
  const monthlyPayment = loanAmount * interestQuotient;
  calculation.innerHTML = `Your monthly payment is $${monthlyPayment.toFixed(2)}`;
}





