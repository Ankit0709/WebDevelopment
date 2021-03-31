window.onload = function () {
  let btn = this.document.getElementsByClassName("btn");
  let result = this.document.getElementById("result");
  let animate = this.document.getElementById("animate");
  let text = "";
  let val = "";
  let animeText = "";
  function anime(value) {
    animate.innerText = animeText;
    animate.classList.add("animation");
    setTimeout(() => {
      animate.innerText = "";
      animate.classList.remove("animation");
    }, 1000);
  }
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      text = btn[i].innerText;
      animeText = text;
      if (text == "AC") {
        text = "";
        val = "";
        result.value = "";
        anime("AC");
      } else if (text === "=") {
        val = val.replace("cos", "Math.cos");
        val = val.replace("sin", "Math.sin");
        val = val.replace("sqrt", "Math.sqrt");
        result.value = eval(val);
        text = "";
        val = result.value;
        animeText = val;
      } else {
        val += text;
        result.value = val;
      }
      anime(animeText);
    });
  }
};
