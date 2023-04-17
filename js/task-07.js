const input = document.getElementById("font-size-control")
const span = document.getElementById("text")
input.addEventListener("input", onInputChange)
function onInputChange() {
    span.style.fontSize = `${input.value}px`
}