window.onload = function () {
  const btn = document.querySelector("#btn");
  let items = document.querySelector("ul");
  btn.addEventListener("click", function () {
    let item = document.querySelector("#item").value;
    let node = document.createElement("li");
    let edit = document.createElement("button");
    let del = document.createElement("button");
    edit.textContent = "✏";
    del.textContent = "❌";

    node.textContent = item;
    items.appendChild(node);
  });
};
