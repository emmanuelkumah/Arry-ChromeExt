const setColors = () => {
  const bgColors = ["#000505", "#2B3A67", "#2E294E", "#091540", "#210124"];
  return bgColors;
};

const generateBackgroundColor = (colors) => {
  const indexColor = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[indexColor];
};

const displayArrayMethod = () => {
  console.log("Array method here");
};

export { setColors, generateBackgroundColor, displayArrayMethod };
