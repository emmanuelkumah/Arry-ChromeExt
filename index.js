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
//array Methods
const arrayMethods = [
  {
    method: "Array.concat()",
    usecase: "Join Two Arrays Together",
    description: `The concat() method is used to join two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    `,
    illustration: `
    <iframe
    src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=17px&lh=133%25&si=false&es=2x&wm=false&code=let%2520fruits%2520%253D%2520%255B%27%25F0%259F%258D%258C%27%252C%2520%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%2593%27%255D%253B%250Alet%2520pasteries%2520%253D%2520%255B%27%25F0%259F%258D%259E%27%252C%2520%27%25F0%259F%258D%2595%27%255D%253B%250A%250Alet%2520allMeals%2520%253D%2520fruits.concat%28pasteries%29%253B%250A%250Aconsole.log%28allMeals%29%250A%250A%252F%252F%2520%255B%27%25F0%259F%258D%258C%27%252C%2520%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%259E%27%252C%2520%27%25F0%259F%258D%2595%27%255D"
    style="width: 560px; height: 378px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>
    `,
  },
  {
    method: "Array.prototype.copyWithin()",
    description: `The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
    `,
  },
  {
    method: "Array.prototype.entries()",
    description: `The entries() method returns a new array iterator object that contains the key/value pairs for each index in the array.
    `,
  },
  {
    method: "Array.prototype.every()",
    description: `The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    `,
  },
  {
    method: "Array.prototype.fill()",
    description: `The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
  `,
  },
  {
    method: "Array.prototype.filter()",
    description: `The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.`,
  },
];

const randNum = Math.floor(Math.random() * 10 + 1);

const heading = document.querySelector(".arrHeading");

const generateRandomBackgroundColor = () => {
  const selectedBgColor = bgColors[randNum];

  document.body.style.backgroundColor = selectedBgColor;
};

generateRandomBackgroundColor();

const displayArrMethods = () => {
  const randNum = Math.floor(Math.random() * 5 + 1);

  const method = document.querySelector(".arrMethod");
  const desc = document.querySelector(".arrDesc");
  const useCase = document.querySelector(".arrUseCase");
  const egs = document.querySelector(".arrEgs");

  method.textContent = arrayMethods[0].method;
  desc.textContent = arrayMethods[0].description;
  useCase.textContent = arrayMethods[0].usecase;
  egs.innerHTML = arrayMethods[0].illustration;
};

displayArrMethods();
