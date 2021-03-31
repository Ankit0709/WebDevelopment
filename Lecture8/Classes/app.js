class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  get FirstName() {
    return this.name.split(" ")[0];
  }
  set FirstName(value) {
    let x = this.name.split(" ");
    x[0] = value;
    this.name = x.join(" ");
  }
  get Age() {
    return this.age;
  }
  set Age(age) {
    this.age = age;
  }
}
class Student extends Person {
  constructor(name, age, money) {
    super(name, age);
    this.money = money;
  }
  get Money() {
    return this.money;
  }
  set Money(money) {
    this.money = money;
  }
}
p1 = new Person("Rohit Sharma", 12, 10000);
p2 = new Person("Mohit Rawat", 20, 12000);
p3 = new Student("Naman Rawat", 10, 2101010);
