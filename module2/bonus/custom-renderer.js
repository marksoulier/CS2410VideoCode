const COMPONENTS = [];

class Component {
  onReady(el) {
    this.el = el;
  }

  getId() {}

  r(strings, ...components) {
    let output = "";
    for(let i = 0; i < components.length; i++) {
      output += strings[i];
      if (components[i].length !== undefined) {
        for(let j = 0; j < components[i].length; j++) {
          if (components[i][j] instanceof Component) {
            output += components[i][j].render()
            COMPONENTS.push(components[i][j]);
          } else {
            output += components[i][j];
          }
        }
      } else if (components[i] instanceof Component) {
        output += components[i].render()
        COMPONENTS.push(components[i]);
      } else {
        output += components[i];
      }
    }
    output += strings[strings.length - 1];
    return output;
  }

  render() {}
}


class Person extends Component {
  constructor(person) {
    super();
    this.name = person.name;
    this.age = person.age;
    this.height = person.height;
    this.personId = person.id;
  }

  onReady(el) {
    super.onReady(el);
    el.addEventListener("click", () => {
      el.querySelector("h3").innerHTML = `Name: ${this.name} (clicked)`;
    });
  }

  getId() {
    return `person-${this.personId}`;
  }

  render() {
    return this.r`
      <div id="person-${this.personId}">
        <h3>Name: ${this.name}</h3>
        <div>Age: ${this.age}</div>
        <div>Height: ${this.height}</div>
      </div>
    `;
  }
}

class App extends Component {
  constructor(people) {
    super();
    this.people = people;
  }

  render() {
    return this.r`
      <h1>People!</h1>
      <div>
        ${this.people.map(p => new Person(p))}
      </div>
      <div>
        Admin
        ${new Person({ id: 999, name: "Admin", age: 30, height: 6 })}
      </div>
    `;
  }
}

const people = [];

for(let i = 0; i < 10; i ++) {
  people.push({ id: i, name: `Person ${i}`, age: 30 + i, height: 6 + (i / 10)})
}

document.body.innerHTML = new App(people).render();

COMPONENTS.forEach((component) => {
  const el = document.getElementById(component.getId());
  if (el !== undefined) {
    component.onReady(el);
  }
});
