const soilSelector = document.querySelector("#soil-selector");
const strawSelector = document.querySelector("#straw-selector");
const fertilizerSelector = document.querySelector("#fertilizer-selector");
const catchCropSelector = document.querySelector("#catch-crop-selector");
const factorSelector = document.querySelector("#factor-selector");
const weatherSelector = document.querySelector("#weather-selector");
const elements = [soilSelector, strawSelector, fertilizerSelector, catchCropSelector, factorSelector, weatherSelector];

const selectElements = document.querySelectorAll("select");
const resetButton = document.querySelector("#reset");

const mainDisplay = document.querySelector("#main-display");
const elementResult = document.querySelector("#result");

const visitedElements = document.querySelectorAll("input, select");
let visitedCounter = 1;
visitedElements.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value) {
      this.classList.add("visited");
      visitedCounter += 1;
    } else {
      this.classList.remove("visited");
      visitedCounter -= 1;
    }
  });
});

let soil = 0;
let straw = 0;
let fertilizer = 0;
let catchCrop = 0;
let factor = 0;

selectElements.forEach((select) => {
  select.addEventListener("change", function () {
    soil = Number(soilSelector.value) || 0;
    straw = Number(strawSelector.value) || 0;
    fertilizer = Number(fertilizerSelector.value) || 0;
    catchCrop = Number(catchCropSelector.value) || 0;
    factor = Number(factorSelector.value) || 0;
    weather = Number(weatherSelector.value) || 0;

    let NitrogenToReduction = soil + straw + soil * fertilizer + soil * catchCrop;
    let factorResult = NitrogenToReduction - NitrogenToReduction * factor;
    let result = factorResult + factorResult * weather;
    console.log("weather: " + weather);

    if (visitedCounter >= 5) {
      elementResult.innerHTML = result.toFixed(2) + "kg/ha";
    }
  });
});

resetButton.addEventListener("click", function () {
  elements.forEach((element) => {
    element.value = 0;
    element.classList.remove("visited");
  });
  elementResult.innerHTML = "uzupełnij";
  visitedCounter = 1;
});
