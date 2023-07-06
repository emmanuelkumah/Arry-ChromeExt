const heading = document.querySelector(".arrUseCase");
const setColors = () => {
  return ["#000505", "#2E294E", "#091540", "#210124"];
};

const generateBackgroundColor = () => {
  const colors = setColors();
  const indexColor = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[indexColor];
};

export { generateBackgroundColor };
