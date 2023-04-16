let counterValue = document.getElementById("value")
const container = document.getElementById("counter")
const button1 = container.children[0]
const button2 = container.children[2]
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
