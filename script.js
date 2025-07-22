const btnConvert = document.querySelector("#btnConvert");
const inputCatties = document.querySelector("#inputCatties");
const result = document.querySelector("#result");
const copyBtn = document.getElementById("copyBtn");

const calculate = () => {
  const res = Number(inputCatties.value) * 0.6;
  result.textContent = res;
};

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && document.activeElement === inputCatties) {
    calculate();
  }
});

btnConvert.addEventListener("click", () => {
  calculate();
});

copyBtn.addEventListener("click", () => {
  const textToCopy = result.textContent;
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy);
  }
});

//////////////////////

const btnCalculate = document.querySelector("#btnCalculate");
const inputNDT = document.querySelector("#inputNDT");
const noship = document.querySelector("#noship");
const shipMaterial = document.querySelector("#shipMaterial");
const interest = document.querySelector("#interest");
const rose = document.querySelector("#rose");
const retail = document.querySelector("#retail");
const mkt = document.querySelector("#mkt");

const calculateNDT = () => {
  noship.textContent = Math.ceil(Number(inputNDT.value) * 3.7);
  const shipMaterialValue = Math.ceil(Number(inputNDT.value) * 3.7) + 15 + 5;
  shipMaterial.textContent = shipMaterialValue;

  let estInterest = 0;
  if (shipMaterialValue < 150) {
    estInterest = 40;
  } else {
    estInterest = Math.ceil((shipMaterialValue / 100) * 30);
  }
  interest.textContent = estInterest;

  const mktValue = Math.ceil((Number(shipMaterialValue) / 100) * 15);
  mkt.textContent = mktValue;

  retail.textContent = Math.ceil(
    (Math.ceil(Number(inputNDT.value) * 3.7) +
      15 +
      5 +
      estInterest +
      mktValue) /
      (1 - 0.3)
  );
};

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && document.activeElement === inputNDT) {
    calculateNDT();
  }
});

btnCalculate.addEventListener("click", () => {
  calculateNDT();
});
