const soilSelector = document.querySelector("#soil-selector");
const strawSelector = document.querySelector("#straw-selector");
const fertilizerSelector = document.querySelector("#fertilizer-selector");
const catchCropSelector = document.querySelector("#catch-crop-selector");
const factorSelector = document.querySelector("#factor-selector");
const elements = [soilSelector, strawSelector, fertilizerSelector, catchCropSelector, factorSelector];

const selectElements = document.querySelectorAll("select");
const resetButton = document.querySelector("#reset");

const mainDisplay = document.querySelector("#main-display");
const result = document.querySelector("#result");

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

    let fertilizerCalc = soil * fertilizer;
    let catchCropCalc = soil * catchCrop;
    let reductionCalc = fertilizerCalc + catchCropCalc + straw + soil;

    console.log(visitedCounter);
    if (visitedCounter >= 5) {
      result.innerHTML = (reductionCalc - reductionCalc * factor).toFixed(2) + "kg/ha";
    }
  });
});

resetButton.addEventListener("click", function () {
  elements.forEach((element) => {
    element.value = 0;
    element.classList.remove("visited");
  });
  result.innerHTML = "uzupełnij";
  visitedCounter = 1;
});
