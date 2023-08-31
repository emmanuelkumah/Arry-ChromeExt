import { generateBackgroundColor } from "./src/backgroundColor.js";
import { arrayMethods } from "./src/arrMethods.js";

const arrHeading = document.querySelector("#arrMethod");
const arrDesc = document.querySelector(".arrDesc");
const arrUseCase = document.querySelector(".arrUseCase");
const arrIllustration = document.querySelector(".arr_illus");

generateBackgroundColor();

const showArrCheatSheet = (arr) => {
  const randomNum = Math.floor(Math.random() * arr.length + 1);

  arrHeading.textContent = arr[randomNum].method;
  arrDesc.textContent = arr[randomNum].description;
  arrUseCase.textContent = arr[randomNum].usecase;
  arrIllustration.innerHTML = arr[randomNum].illustration;
};

showArrCheatSheet(arrayMethods);
