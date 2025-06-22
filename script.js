const btn = document.querySelector('input[type="button"]');
const input = document.querySelector('input[type="number"]');
const result = document.querySelector("#result");
const copyBtn = document.getElementById("copyBtn");

const calculate = () => {
  const res = Number(input.value) * 0.6;
  result.innerHTML = res;
};

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calculate();
  }
});

btn.addEventListener("click", () => {
  calculate();
});

copyBtn.addEventListener("click", () => {
  const textToCopy = result.textContent;
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy);
  }
});
