const button = document.querySelector(".change-color")
const span = document.querySelector(".color")
button.addEventListener("click", changeColor)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor() {
  const newColor = getRandomHexColor()
  document.body.style.backgroundColor = newColor
  span.textContent = newColor
}
