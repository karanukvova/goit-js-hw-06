const input = document.getElementById("validation-input")
input.addEventListener("blur", onInputBlur)
function onInputBlur() {
    const inputValue = input.value.trim()
    const datasetLength = Number(input.dataset.length)
    if (inputValue.length === datasetLength) {
        input.classList.add("valid")
        input.classList.remove("invalid")
    } else {
        input.classList.add("invalid")
        input.classList.remove("valid")
    }
}