const input = document.getElementById("font-size-control")
const span = document.getElementById("text")
input.addEventListener("change", onInputChange)
function onInputChange() {
    span.style.fontSize = `${input.value}px`
}