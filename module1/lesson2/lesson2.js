// primitives
const PI = 3.14159;
const age = 30;
const small = 0.00001;
const result = 10 / 7;
const myName = "Joseph";
const combined = "My name is " + myName + " and my age is " + age + ".";
const betterCombined = `My name is ${myName} and my age is ${age}.`;
const myBool = true;
const myOtherBool = false;

console.log(combined);
console.log(betterCombined);

// arrays and objects
const values = [1,2,3,4,5];
console.log(values);
values.push(10);
console.log(values);
console.log(values.length);
console.log(values[3]);

const person = {
  name: "Joseph",
  age: 30,
  occupation: "Professor"
};

const key = "name";

console.log(person); // same as person.name
person.address = "111 Old Main Hill";
console.log(person);
delete person.address; // dont do this
console.log(person);

// null and undefined
function find(data, num) {
  if (data.indexOf(num) >= 0) {
    return data[data.indexOf(num)];
  }
  return null;
}

const aNullValue = null;
const anUndefined = undefined;
console.log(find([1,2,3,4,5], 10));