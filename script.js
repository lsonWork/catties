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
const resultVND = document.querySelector("#resultVND");
const resultRetail = document.querySelector("#resultRetail");

const calculateNDT = () => {
  const res = Math.ceil(Number(inputNDT.value) * 3.7);
  resultVND.textContent = res;
  const resRetail = Math.ceil(
    Number(inputNDT.value) * 3.7 + 15 + 5 + (res / 100) * 20
  );
  let final = 0;
  if (res <= 200) {
    final = resRetail + 30;
  } else {
    final = resRetail + (resRetail / 100) * 15;
  }
  resultRetail.textContent = final;
};

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && document.activeElement === inputNDT) {
    calculateNDT();
  }
});

btnCalculate.addEventListener("click", () => {
  calculateNDT();
});
