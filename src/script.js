const soilSelector = document.querySelector("#soil-selector");
const strawSelector = document.querySelector("#straw-selector");
const fertilizerSelector = document.querySelector("#fertilizer-selector");
const catchCropSelector = document.querySelector("#catch-crop-selector");
const factorSelector = document.querySelector("#factor-selector");

const selectElements = document.querySelectorAll("select");
const resetButton = document.querySelector("#reset");

const fertilizerDisplay = document.querySelector("#fertilizer-display");
const catchCropDisplay = document.querySelector("#catch-cop-display");
const reductionDisplay = document.querySelector("#reduction-display");
const factorDisplay = document.querySelector("#factor-display");
const mainDisplay = document.querySelector("#main-display");

const visitedElements = document.querySelectorAll("input, select");
visitedElements.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value) {
      this.classList.add("visited");
    } else {
      this.classList.remove("visited");
    }
  });
});

selectElements.forEach((select) => {
  select.addEventListener("change", function () {
    let soil = Number(soilSelector.value) || 0;
    let straw = Number(strawSelector.value) || 0;
    let fertilizer = Number(fertilizerSelector.value) || 0;
    let catchCrop = Number(catchCropSelector.value) || 0;
    let factor = Number(factorSelector.value) || 0;

    let fertilizerCalc = soil * fertilizer;
    let catchCropCalc = soil * catchCrop;
    let reductionCalc = fertilizerCalc + catchCropCalc + straw + soil;
    fertilizerDisplay.innerHTML = fertilizerCalc.toFixed(2);
    catchCropDisplay.innerHTML = catchCropCalc.toFixed(2);
    reductionDisplay.innerHTML = reductionCalc.toFixed(2);
    factorDisplay.innerHTML = (reductionCalc * factor).toFixed(2);
    mainDisplay.innerHTML = (reductionCalc - reductionCalc * factor).toFixed(2);
  });
});
