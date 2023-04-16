const input = document.getElementById("validation-input")
input.addEventListener("blur", onInputBlur)
function onInputBlur() {
    const inputValue = input.value.trim()
    if (inputValue.length > input.dataset.length) {
        input.classList.add("valid")
        input.classList.remove("invalid")
    } else {
        input.classList.add("invalid")
        input.classList.remove("valid")
    }
}