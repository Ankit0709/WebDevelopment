//closures
function increment() {
  let x = 10;
  function add() {
    console.log(x);
    x = 20;
  }
  return add;
}

const inc = increment();
inc(100);

function a() {
  let x = 10;
  function b() {
    x++;
    console.log(x);
    function c() {
      x++;
      console.log(x);
    }
    return c;
  }
  return b;
}

const f1 = a();
const f2 = a();
const f11 = f1();
const f12 = f1();
const f21 = f2();
const f22 = f2();
f11();
f12();
f21();
f22();

//private methods with closures
