// import { arrayMethods } from "./arrMethods";

const bgColors = [
  "#9c88ff",
  "#000505",
  "#2B3A67",
  "#2E294E",
  "#273c75",
  "#091540",
  "#3D518C",
  "#210124",
  "#3C1742",
  "#093824",
];
const randNum = Math.floor(Math.random() * 10 + 1);

const heading = document.querySelector(".arrHeading");

const generateRandomBackgroundColor = () => {
  const selectedBgColor = bgColors[randNum];

  document.body.style.backgroundColor = selectedBgColor;
};

generateRandomBackgroundColor();

// const generateArrMethods = () => {
//   const content = arrayMethods[randNum];
//   console.log(content);
//   heading.textContent = content.heading;
// };

// generateArrMethods();
