"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const userBox = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBoxes);
destroyBtn.addEventListener("click", onDestroyBoxes);

function createBoxes(amount) {
  userBox.innerHTML = "";

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    userBox.appendChild(box);

    size += 10;
  }
}
function onCreateBoxes() {
  const amount = parseInt(userInput.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    userInput.value = "";
  }
}

function onDestroyBoxes() {
  userBox.innerHTML = "";
}
