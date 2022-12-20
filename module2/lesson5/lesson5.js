function MyClass(myNumber) {
  this.myNumber = myNumber;
  console.log("I got called!");
}

MyClass.prototype.myMethod = () => {
  console.log(`My number is ${this.myNumber}`);
}

const instance = new MyClass(10);
instance.myMethod();

setTimeout(() => instance.myMethod(), 2000);


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  goToWork = () => {
    console.log(`${this.name} went to work!`);
  }
}

const person = new Person("Joseph", 30);

setTimeout(person.goToWork, 2000);
