function fun() {
  console.log("Hi there!");
}
setTimeout(function () {
  fun();
}, 5000);

let x = setInterval(function () {
  console.log("Hello");
}, 1000);

setTimeout(function () {
  clearInterval(x);
}, 10000);
