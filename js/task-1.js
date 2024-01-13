"use strict";

const items = document.querySelectorAll("li.item");
console.log("Number od categories: " + items.length);

items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("ul li");
  console.log("Category: " + categoryName);
  console.log("Elements: " + categoryElements.length);
});
