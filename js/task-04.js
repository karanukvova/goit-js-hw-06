let counterValue = document.getElementById("value")
const container = document.getElementById("counter")
const button1 = document.querySelector('[data-action="decrement"]')
const button2 = document.querySelector('[data-action="increment"]')
let value = 0;
counterValue.textContent = value
button1.addEventListener("click", decrement)
button2.addEventListener("click", increment)
function decrement() {
    value -= 1;
    counterValue.textContent = value
}
function increment() {
    value += 1;
    counterValue.textContent = value
}
