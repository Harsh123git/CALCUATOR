"use strict";
const clear = document.querySelector(".clear-btn");
const back = document.querySelector(".back-btn");
const display = document.querySelector(".display");
let btn = document.querySelectorAll(".btn");
let equal = document.querySelector(".equal");
const power = document.querySelector(".power-btn");

let state = 0;
let pwr = 0;
let output;
let str;
// calculate part
const calculate = function () {
  let str = display.textContent;
  output = eval(str);
};
// square

//power
power.addEventListener("click", function () {
  if (pwr == 0) {
    document.querySelector(".main-box").classList.add("active");
    document.querySelector(".on").classList.toggle("power_on");
    document.querySelector("body").style.background =
      "linear-gradient(rgba(36, 255, 127, 0.8), rgb(128, 128, 128, 0.9)),url(./img/bg.png)";
    display.style.backgroundColor = "grey";
    pwr = 1;
  } else {
    document.querySelector(".main-box").classList.remove("active");
    document.querySelector(".on").classList.toggle("power_on");
    document.querySelector("body").style.background =
      "linear-gradient(rgba(0, 0, 0, 0.8), rgb(128, 128, 128, 0.9)),url(./img/bg.png)";
    display.style.backgroundColor = "rgb(31, 31, 31)";
    pwr = 0;
    display.textContent = " ";
  }
});

// clear
clear.addEventListener("click", function () {
  display.textContent = "";
});
// sqroot
document.querySelector(".sqrt").addEventListener("click", function () {
  if (pwr == 1 && str) {
    calculate();
    display.textContent = Number(output) ** 0.5;
  }
});
// square
document.querySelector(".square").addEventListener("click", function () {
  if (pwr == 1 && str) {
    calculate();
    display.textContent = Number(output) ** 2;
  }
});
// enter
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (
      pwr == 1 &&
      btn[i].textContent !== "√" &&
      btn[i].textContent !== "()²"
    ) {
      console.log(btn[i].textContent);
      display.textContent += btn[i].textContent;
      str = display.textContent;
    }
  });
}

// Output
equal.addEventListener("click", function () {
  if (pwr == 1) {
    calculate();
    display.textContent = Number.isInteger(output)
      ? `${output}`
      : `${output.toFixed(2)}`;

    console.log(`The answer= ${output.toFixed(2)}`);
  }
});

// clear
back.addEventListener("click", function () {
  let str = String(display.textContent);
  str = str.slice(0, -1);
  display.textContent = str;
});
