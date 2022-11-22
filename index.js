const firstCard = document.querySelector(".card")
const secondCard = document.querySelector(".second-card")
const submitBtn = document.getElementById("submit-btn")
const rates = document.querySelectorAll(".space")
const rating = document.getElementById("rating")
let selectNumber = true

submitBtn.addEventListener("click", () => {
    secondCard.classList.remove("hidden")
    firstCard.style.display = "none"
    selectNumber = false
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
        selectNumber = true
    })
})

