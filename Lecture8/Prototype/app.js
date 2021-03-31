// function Fun(name, age) {
//   this.name = name;
//   this.age = age;
// }

// p = new Fun("Ankit", 22);

class Person {
  constructor(name, age) {
    // this.name = name;
    // this.age = age;
    //  this.getName=function(){
    //    return this.name;
    //  }
  }
  getName() {
    return this.name;
  }
  get Name() {
    return this.name;
  }
  set Name(value) {
    this.name = value;
  }
  get firstName() {
    return this.name.split(" ")[0];
  }
  set firstName(value) {
    x = this.name.split(" ");
    x[0] = value;
    this.name = x.join(" ");
  }
}

p1 = new Person("Rohit Sharma", 10);
p2 = new Person("Lata Rawat", 20);
