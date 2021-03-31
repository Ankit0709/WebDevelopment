//1st way of createing functions

function square(x = 20) {
  return x * x;
}
console.log(square(10));

//2nd way of creating function
//function expression
let func = function squareIt(x) {
  return x * x;
};

//3rd way of creating function
let sub = function (a, b) {
  return a - b;
};

//4th way arrow notation
let x = () => {
  console.log("bar");
};

//inner functions
function sayHello() {
  console.log("hello inside 1st function");
  function Hello() {
    console.log("hello insie 2nd function");
  }
  return Hello;
}

let y = sayHello();
y();
console.log(func(20));

//pass by value and pass by reference in JS
let a = 10,
  b = 20,
  c = 30;
console.log("Pass by values");
console.log(a, b, c);
function change(a, b, c) {
  a = b = c = 40;
}
change(a, b, c);
console.log(a, b, c);

//pass by reference
console.log("Pass by reference");

var obj = {
  a: 10,
  b: 20,
  c: 30,
};
console.log(obj.a);
function inc(obj) {
  obj.a = obj.b = obj.c = 40;
}

inc(obj);
console.log(obj);
//inner function using ES 6
const addSquares = (a, b) => {
  const square = (x) => x * x;
  return square(a) + square(b);
};
let number = addSquares(10, 20);
console.log(number);
