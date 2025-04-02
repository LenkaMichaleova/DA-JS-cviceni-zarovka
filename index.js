const bulbElement = document.querySelector(".bulb")

document.addEventListener("keydown", () => {
    bulbElement.classList.toggle("bulb--on")
})