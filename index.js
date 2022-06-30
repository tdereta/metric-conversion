/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  (3.281).toFixed(3)
const literToGallon =  (0.264).toFixed(3)
const kiloToPound =  (2.204).toFixed(3)

// const meter = (value * (1/3.281)).toFixed(3);
// const feet = (value * 3.281).toFixed(3);
// const litre = (value * (1/0.264)).toFixed(3);
// const gallon = (value * 0.264).toFixed(3);
// const kilogram = (value * (1/2.204)).toFixed(3);
// const pound = (value * 2.204).toFixed(3);

convertBtn.addEventListener("click", function() {
    let inputValue = inputEl.value

    lengthEl.textContent = `${inputValue} meters = ${inputValue * meterToFeet} feet | 
                           ${inputValue} feet = ${inputValue / meterToFeet} meters`

    volumeEl.textContent = `${inputValue} liters = ${inputValue * literToGallon} gallons |
                           ${inputValue} gallons = ${inputValue / literToGallon} liters`

    massEl.textContent = `${inputValue} kilograms = ${inputValue * kiloToPound} pounds |
                         ${inputValue} pounds = ${inputValue / kiloToPound} kilograms`
})
