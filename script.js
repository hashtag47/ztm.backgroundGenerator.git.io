var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function createBtnRandom() {
  var btnRandomColor = document.createElement("button");
  btnRandomColor.appendChild(document.createTextNode("Random Selection"));
  body.appendChild(btnRandomColor);
  return btnRandomColor;
}

function getRandomColor() {
  var color = `rgb(
    ${Math.random() * 255 + 1},
    ${Math.random() * 255 + 1},
    ${Math.random() * 255 + 1}
  )`;
  return color;
}

function selectRandomColor(btn) {
  btn.addEventListener("click", function () {
    var color1 = getRandomColor();
    var color2 = getRandomColor();
    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    css.textContent = `${body.style.background};`;
  });
}

document.addEventListener("DOMContentLoaded", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

selectRandomColor(createBtnRandom());
