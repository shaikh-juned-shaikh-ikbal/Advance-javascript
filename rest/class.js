class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

class student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  greet() {
    console.log(`Hello ${this.name}from ${this.level}`);
  }
}

const o1 = new Person("Juned");
const o2 = new student("Roman ", "Bed first year");
o1.greet();
o2.greet();
