function fun() {
  let x = 0;
  function innerfun() {
    x++;
    function innermostfun() {
      x++;
      console.log(x);
    }
    return innermostfun;
  }
  return innerfun;
}

f1 = fun();
f2 = fun();
f11 = f1();
f12 = f1();
f13 = f2();
f14 = f2();
f11();
f11();
f12();
f12();
f13();
f14();
