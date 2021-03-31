function print() {
  let value = document.getElementById("number").value;
  let list = document.getElementById("list");
  console.log(value);
  for (let i = 1; i <= value; i++) {
    let x = document.createElement("li");
    if (i % 15 == 0) {
      x.innerText = "FizzBuzz";
      list.appendChild(x);
    } else if (i % 3 == 0) {
      x.innerText = "Fizz";
      list.appendChild(x);
    } else if (i % 5 == 0) {
      x.innerText = "Buzz";
      list.appendChild(x);
    } else {
      x.innerText = i;
      list.append(x);
    }
  }
}
