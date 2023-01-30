"use strict";
const clear = document.querySelector(".clear-btn");
const display = document.querySelector(".display");
let num = document.querySelectorAll(".num");
let op = document.querySelectorAll(".op");
let equal = document.querySelector(".equal");
const power = document.querySelector(".power-btn");

let num1 = "";
let num2 = "";
let state = 0;
let pwr = 0;
let output;
let operation;

// // calculate part
// const calculate = function (op, num1, num2) {
//   // output=`${num1} $operation num2}`;

//   switch (op) {
//     case "+":
//       output = num1 + num2;
//       break;
//     case "-":
//       output = num1 - num2;
//       break;
//     case "*":
//       output = num1 * num2;
//       break;
//     case "/":
//       output = num1 / num2;
//       break;
//     case "%":
//       output = num1 % num2;
//       break;
//     default:
//       console.log("No Operation");
//   }
// };
// // reset
// function reset() {
//   num1 = "";
//   num2 = "";
//   state = 1;
// }
// //on/off
// power.addEventListener("click", function () {
//   if (pwr == 0) {
//     document.querySelector(".main-box").classList.add("active");
//     document.querySelector(".on").classList.toggle("power_on");
//     document.querySelector("body").style.background =
//       "linear-gradient(rgba(36, 255, 127, 0.8), rgb(128, 128, 128, 0.9)),url(./img/bg.png)";
//     display.style.backgroundColor = "grey";
//     state = 1;
//     pwr = 1;
//   } else {
//     document.querySelector(".main-box").classList.remove("active");
//     document.querySelector(".on").classList.toggle("power_on");
//     document.querySelector("body").style.background =
//       "linear-gradient(rgba(0, 0, 0, 0.8), rgb(128, 128, 128, 0.9)),url(./img/bg.png)";
//     display.style.backgroundColor = "rgb(31, 31, 31)";
//     pwr = 0;
//     display.textContent = "";
//     num1 = "";
//     num2 = "";
//     state = 1;
//   }
// });

// // clear
// clear.addEventListener("click", function () {
//   display.textContent = "";
//   reset();
// });
// // num enter
// for (let i = 0; i < num.length; i++) {
//   num[i].addEventListener("click", function () {
//     if (pwr == 1) {
//       state == 1 ? (num1 += num[i].textContent) : (num2 += num[i].textContent);
//       display.textContent = state == 1 ? num1 : `${num1}${operation}${num2}`;
//     }
//   });
// }

// // operator
// for (let i = 0; i < op.length; i++) {
//   op[i].addEventListener("click", function () {
//     if (pwr == 1) {
//       num1 = Number(num1);
//       operation = op[i].textContent;
//       display.textContent = `${num1}${operation}`;
//       console.log(`${num1}`);
//       state = 2;
//     }
//   });
// }

// // equal

// equal.addEventListener("click", function () {
//   if (pwr == 1) {
//     num2 = Number(num2);
//     console.log(num2);
//     calculate(operation, num1, num2);

//     display.textContent = Number.isInteger(output)
//       ? `${output}`
//       : `${output.toFixed(4)}`;

//     console.log(`The answer= ${output.toFixed(2)}`);
//     reset();
//   }
// });

// calculate part
const calculate = function () {
  let str = display.textContent;
  output = eval(str);
};

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
// num enter
for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", function () {
    if (pwr == 1) {
      display.textContent += num[i].textContent;
    }
  });
}

// operator
for (let i = 0; i < op.length; i++) {
  op[i].addEventListener("click", function () {
    if (pwr == 1) {
      display.textContent += op[i].textContent;
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
