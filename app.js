"use strict";

const ratingNum = document.querySelectorAll(".rating-container .rcircle");

const sumbit = document.querySelector(".button");

const beforeElement = document.querySelector(".container");

const afterElement = document.querySelector(".container-after");

let ratingSelected = false;
let ratingNumSelcted = 0;

const ratingNumElement = document.querySelector(".rate");

for (let elm of ratingNum)
  elm.addEventListener("click", function () {
    if (ratingSelected) {
      for (let selElm of ratingNum) {
        if (selElm.classList.contains("ratingSelected"))
          selElm.classList.remove("ratingSelected");
        ratingSelected = false;
      }
      elm.classList.add("ratingSelected");
      // Storing rating Number

      ratingNumSelcted = Number(elm.textContent);

      ratingSelected = true;
    } else {
      elm.classList.add("ratingSelected");
      // Storing rating Number
      ratingNumSelcted = Number(elm.textContent);
      // Setting number is selected now
      ratingSelected = true;
    }
  });

sumbit.addEventListener("click", function () {
  if (ratingNumSelcted != 0) {
    ratingNumElement.textContent = ratingNumSelcted;
    beforeElement.classList.add("hide");
    afterElement.classList.remove("hide");
  } else {
    sumbit.classList.add("bounce");
    setTimeout(function () {
      //remove the class so animation can occur as many times as user triggers event, delay must be longer than the animation duration and any delay.
      sumbit.classList.remove("bounce");
    }, 1000);
  }
});
