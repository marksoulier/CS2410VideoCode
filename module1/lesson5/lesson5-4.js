function printHello(name) {
  console.log(`Hello, ${name}`);
}

function printGoodbye() {
  console.log("Goodbye!");
}

function delay(callback, amount) {
  return (...args) => {
    setTimeout(() => callback(...args), amount);
  };
}

const delayedHello = delay(printHello, 5000);
const delayedGoodbye = delay(printGoodbye, 10000);