//function treating like constructors

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   //   this.getName = function () {
//   //     return this.name;
//   //   };
// }

// let p1 = new Person("Rohit Negi", 20);
// Person.getName = Person.prototype.getName = function () {
//   return this.name;
// };
// let p2 = new Person("Madhuman Sharma", 22);

//doing same thing using class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // this.isRich = function () {
    //   return money > 100;
    // };
  }
  //functions in class
  getName() {
    return this.name;
  }
  //getters and setters
  get firstName() {
    //This is a getter
    return this.name.split(" ")[0];
  }
  set firstName(value) {
    //This is a setter
    let x = this.name.split(" ");
    x[0] = value;
    this.name = x.join(" ");
  }
}
class Student extends Person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
    this.isPass = () => {
      return marks > 100;
    };
  }
  static getDetails() {
    console.log(this.name);
  }
}
let p1 = new Person("Rohit Negi", 20, 1000);
let p2 = new Person("Mohit Sharma", 30, 50);
let s1 = new Student("Ankit Khankriyal", 22, 500);
