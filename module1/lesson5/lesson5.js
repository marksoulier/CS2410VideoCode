function sayHello(name) {
  console.log(`Hello, ${name}`);
}

function double(num) {
  return num * 2;
}

// first class functions
const myFunc = sayHello;

myFunc("Catelyn");

// alternate declarations
const triple = function(num) {
  return num * 3;
};

// arrow functions
const quadruple = (num) => {
  return num * 4;
};

// shorter arrow function
const quadruple2 = num => {
  console.log("Called quadruple 2!");
  return num * 4;
};

// even shorter arrow function
const quadruple3 = num => num * 4;

