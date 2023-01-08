const button1 = document.getElementById("welcome_button");
const text1 = document.getElementById("text1");

let button2 = document.querySelector("#light-mode-btn");
button2.addEventListener("click", toggleLightMode);

let text2 = document.querySelector("#text2");
let button3 = document.querySelector("#color-button");
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let currentColorIndex = 0;

button1.addEventListener("click", function () {
  welcome_button.style.opacity = "0";
  this.style.cursor = "auto";
  text1.style.opacity = "100%";
  box.style.opacity = "100%";
  text2.style.opacity = "100%";
  button3.style.opacity = "100%";
});

function toggleLightMode() {
  document.body.classList.toggle("light-mode");
  button2.classList.toggle("dark-mode-btn");
  button2.classList.toggle("dark-mode-btn:hover");
}

button3.addEventListener("click", function () {
  text2.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;

  button3.style.left = Math.random() * window.innerWidth + "px";
  button3.style.top = Math.random() * window.innerHeight + "px";
});
