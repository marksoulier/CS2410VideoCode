const person = ["Joseph", 30, 6];

function displayPerson(name, age, height) {
  console.log(`${name} is ${age} year(s) old and is ${height} tall.`);
}

// displayPerson(person[0], person[1], person[2]);
displayPerson(...person);

const personCopy = [...person];

const personObject = {
  name: "Joseph",
  age: 30,
  height: 6
};

const personObjectCopy = { ...personObject };

console.log(personObjectCopy);

function testArguments(...args) {
  console.log(args);
}

const testArgs2 = (...myArgs) => {
  console.log(myArgs);
}
