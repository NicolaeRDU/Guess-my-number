"use strict";

// Selectors
const showNumber = document.querySelector(".show--number");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const text = document.querySelector(".text");
const highscore = document.querySelector(".highscore");
const btnSubmit = document.querySelector(".submit");
const btnReset = document.querySelector(".reset");

// Logics
let s = 20;
const randomNumber = Math.trunc(Math.random() * 20 + 1);
number.value = "";

btnSubmit.addEventListener("click", () => {
  const yourChoise = Number(number.value);

  if (yourChoise > randomNumber) {
    text.classList.remove("hidden");
    text.textContent = "Too high 👆";
    s--;
    score.textContent = s;
  } else if (yourChoise < randomNumber) {
    text.classList.remove("hidden");
    text.textContent = "Too low 👇";
    s--;
    score.textContent = s;
  } else if (yourChoise === randomNumber) {
    text.classList.remove("hidden");
    text.textContent = "Correct";
  }
});

btnReset.addEventListener("click", () => {
  s = 20;
  score.textContent = s;
  text.classList.add("hidden");
  number.value = "";
});
