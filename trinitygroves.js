// console.log("hi")

const attractBtn = document.querySelector("#attraction-randomizer")
const attractions = document.querySelector("div")
console.log(attractions)
const choices =["Trinity Skyline Trails", "Margaret Hunt Hill Bridge", "Food and Drink"]

const pickAttraction = () => {
    const pick = Math.floor(Math.random() * choices.length)
    let chosen = document.createElement("h3")
    chosen.textContent = choices[pick]
    attractions.append(chosen)
    console.log(attractions)
}

attractBtn.addEventListener("click", pickAttraction)