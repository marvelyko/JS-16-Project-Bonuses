var colors = ["Orange", "Blue", "Red", "Yellow", "Gray"];
var change = document.querySelector(".change");
var color = document.querySelector(".color");

function randomizer_color() {
  const num = Math.floor(Math.random() * (colors.length - 0));
  const random_color = colors[num];
  document.body.style.backgroundColor = random_color;
  color.textContent = random_color;
}

randomizer_color();

change.addEventListener("click", function () {
  randomizer_color();
});
