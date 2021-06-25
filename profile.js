console.log("hello world!")


const faveColor = document.querySelector("#color")
const favePlace = document.querySelector("#place")
const faveRitual = document.querySelector("#ritual")


faveColor.classList.add("fun-button")
favePlace.classList.add("fun-button")
faveRitual.classList.add("fun-button")




faveColor.addEventListener("click", () => {
    alert("Yellow is my favorite color")
})
favePlace.addEventListener("click", () => {
    alert("Italy is my favorite place")
})
faveRitual.addEventListener("click", () => {
    alert("I like to burn sage")
})