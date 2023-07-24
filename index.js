import { generateBackgroundColor } from "./src/backgroundColor.js";
import { arrayMethods } from "./src/arrMethods.js";

const arrHeading = document.querySelector("#arrMethod");
const arrDesc = document.querySelector(".arrDesc");
const arrUseCase = document.querySelector(".arrUseCase");
const arrIllustration = document.querySelector(".arr_illus");

generateBackgroundColor();

const showArrCheatSheet = (arr) => {
  const randomNum = Math.floor(Math.random() * arr.length + 1);

  arrHeading.textContent = arr[0].method;
  arrDesc.innerHTML = arr[0].description;
  arrUseCase.textContent = arr[0].usecase;
  arrIllustration.innerHTML = arr[0].illustration;
};

showArrCheatSheet(arrayMethods);
