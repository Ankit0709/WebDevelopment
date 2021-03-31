//let scope
let x = 10;
let y = 5;
if (x > 5) {
  let y = 20;
  console.log(y);
} else {
  y = 20;
}
console.log(y);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i);

// console.log(typeof i);
let i = 10;
// if (false) {
//   let x = 10;
// }

// console.log(x);

function abc() {
  let a = 10;
  console.log(a);
  function def() {
    let a = 20;
    console.log(a);
  }
  return def;
}

//var scope
function print() {
  console.log(a);
  var a = 10;
  console.log(a);
}
print();

console.log(a);
