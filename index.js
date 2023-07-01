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
    method: "Array.slice()",
    usecase: "Clone an array, Copy a portion of an array",
    description: `The general use of the slice() method is to copy a portion of an array without modifying the source array. 
    It can also be used to clone an array, and extract subset of array into a new array`,
    illustration: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.9%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%252F%252F%2520Egs.1%253A%2520Clone%2520an%2520array%2520%250A%250Aconst%2520fruits%253D%2520%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2586%27%252C%27%25F0%259F%258D%258B%27%255D%250Aconst%2520newFruits%2520%253D%2520fruits.slice%28%29%250A%250A%252F*%2520Copies%2520the%2520existing%2520array%2520into%2520a%2520new%2520Array%2520*%252F%250A%250A%252F%252FEgs.2%253A%2520Extract%2520a%2520portion%2520of%2520an%2520%2520existing%2520array%250A%250Aconst%2520fruits%253D%2520%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2586%27%252C%27%25F0%259F%258D%258B%27%255D%250Aconst%2520copiedFruits%2520%253D%2520fruits.slice%282%29%250A%2520%252F*%250Acopies%2520portion%2520of%2520an%2520array%2520into%2520a%2520new%2520array%2520starting%2520from%2520index%25202%250A%2520*%252F%250A%255B%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2586%27%252C%27%25F0%259F%258D%258B%27%255D%250A%2520%2520%250A%2520%2520%250A%2520"
    style="width: 698px; height: 521px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
  },
  {
    method: "Array.toString()",
    usecase: "Converts an array into string",
    description: `Converts an array into a string of comma-separated array value`,
    illustration: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.9%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%252F%252F%2520Egs.1%253A%2520Converts%2520an%2520array%2520to%2520string%250A%250Aconst%2520arrayFruits%2520%253D%2520%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2586%27%252C%27%25F0%259F%258D%258B%27%255D%250A%250Aconst%2520arrayToString%2520%253D%2520arrayFruits.toString%28%29%253B%250A%250Aconsole.log%28arrayToString%29%250A%250A%252F%252FExpected%2520output%253A%250A%250A%2522%25F0%259F%258D%2593%252C%25F0%259F%258D%2589%252C%25F0%259F%258D%258F%252C%25F0%259F%258D%2586%252C%25F0%259F%258D%258B%2522%250A%250A%2520"
    style="width: 529px; height: 428px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
  },
  {
    method: "Array.join()",
    usecase: "Joining array elements into a string",
    description: `Joins all the elements of an array into a string`,
    illustration: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.9%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%252F%252F%2520Egs.1%253A%2520Converts%2520an%2520array%2520to%2520string%250A%250Aconst%2520arrayFruits%2520%253D%2520%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2586%27%252C%27%25F0%259F%258D%258B%27%255D%250A%250Aconsole.log%28arrayFruits.join%28%29%29%250A%250A%252F%252FExpected%2520output%253A%250A%250A%2522%25F0%259F%258D%2593%252C%25F0%259F%258D%2589%252C%25F0%259F%258D%258F%252C%25F0%259F%258D%2586%252C%25F0%259F%258D%258B%2522%250A%250Aconsole.log%28arrayFruits.join%28%27-%27%29%29%250A%2520%2520%250A%252F%252FExpected%2520output%253A%250A%250A%2522%25F0%259F%258D%2593-%25F0%259F%258D%2589-%25F0%259F%258D%258F-%25F0%259F%258D%2586-%25F0%259F%258D%258B%2522%250A%250A%2520"
    style="width: 524px; height: 503px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
  },
  {
    method: "Array.from()",
    usecase:
      "Creates a new, shallow-copied array instance from an iterable or array-like object ",
    description: `Creates an Array from a String`,
    illustration: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.9%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%250Aconsole.log%28Array.from%28%27%25F0%259F%258D%2593%25F0%259F%258D%2589%25F0%259F%258D%258F%25F0%259F%258D%2586%25F0%259F%258D%258B%27%29%29%253B%250A%250A%252F%252F%2520Expected%2520output%250A%250A%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2586%27%252C%27%25F0%259F%258D%258B%27%255D%250A%250A%250A%250A%2520"
    style="width: 456px; height: 372px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
  },
  {
    method: "Array.isArray()",
    usecase: "Checks if the passed value is an Array",
    description: `Array.isArray() checks if the passed value is an Array. It returns true for any value that was created using array literal syntax or the Array constructor.`,
    illustration: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.9%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%250Aconsole.log%28Array.isArray%28%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2586%27%252C%27%25F0%259F%258D%258B%27%255D%29%29%253B%250A%250A%252F%252F%2520Expected%2520output%253A%2520true%250A%250Aconsole.log%28Array.isArray%28%255B%255D%29%29%250A%250A%252F%252F%2520Expected%2520output%253A%2520false%250A%2520"
    style="width: 599px; height: 354px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
  },
  {
    method: "Array.of()",
    usecase: "Create a new Array instance from the given arguments",
    description: ` Array.of() method always creates an array that contains the values that you pass to it regardless of the types or the number of arguments`,
    illustration: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.9%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%250Aconsole.log%28Array.of%28%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2586%27%252C%27%25F0%259F%258D%258B%27%29%29%253B%250A%250A%252F%252F%2520Creates%2520a%2520new%2520array%2520with%2520provided%2520elements%250A%250A%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2586%27%252C%27%25F0%259F%258D%258B%27%255D%250A%250A%250A%250A%2520"
    style="width: 540px; height: 372px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
  },
  {
    method: "Array.copyWithin()",
    usecase: "Copy array elements",
    description: `The copyWithin() method copies array elements from one position to another in the same array and returns it without modifying its length.`,
    illustration: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.9%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%252F%252F%2520Egs.%25201%250Aconst%2520%2520array1%2520%253D%2520%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2586%27%252C%27%25F0%259F%258D%258B%27%255D%250A%252F%252F%2520Copy%2520from%2520index%25201%2520all%2520elements%2520from%25200%2520to%2520the%2520end%250A%250Aconsole.log%28array1.copyWithin%281%252C0%29%29%250A%250A%252F%252FExpected%2520output%250A%250A%255B%27%25F0%259F%258D%2593%27%252C%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2586%27%255D%250A%2520%250A%2520%252F%252F%2520Egs.%25202%250A%2520%250A%2520const%2520%2520array1%2520%253D%2520%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2586%27%252C%27%25F0%259F%258D%258B%27%255D%250A%250A%252F%252F%2520Copy%2520from%2520%2520index%25200%2520all%2520elements%2520from%2520index%25201%2520to%2520the%2520end%2520but%2520not%2520including%25204%250A%250Aconsole.log%28array1.copyWithin%280%252C1%252C4%29%29%250A%252F%252FExpected%2520output%250A%250A%255B%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2586%27%252C%27%25F0%259F%258D%2586%27%252C%27%25F0%259F%258D%258B%27%255D%250A%250A%250A%2520"
    style="width: 808px; height: 614px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
  },
  {
    method: "Array.filter()",
    usecase: "Filter array elements",
    description: `The filter() method creates a new array with all the elements that pass the test implemented by the callback() function`,
    illustration: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.9%29&t=seti&wt=none&l=javascript&width=684&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=const%2520%2520arrayFruits%2520%253D%2520%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%258B%27%255D%250A%250Aconsole.log%28arrayFruits.filter%28%28fruit%29%2520%253D%253E%2520fruit%2520%253D%253D%253D%2520%27%25F0%259F%258D%2593%27%29%29%250A%252F%252F%2520filter%2520out%2520element%2520with%2520fruit%2520equals%2520%25F0%259F%258D%2593%250A%250A%252F%252Fexpected%2520output%250A%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2593%27%255D%250A%250A%250A%250A%2520"
    style="width: 684px; height: 391px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
  },
  {
    method: "Array.fill()",
    usecase: "Fill array elements",
    description: `The fill() method returns an array by filling all elements with a specified value.`,
    illustration: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.9%29&t=seti&wt=none&l=javascript&width=684&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%252F%252FEgs%25201%250Aconst%2520%2520arrayFruits%2520%253D%2520%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%258B%27%255D%250A%250Aconsole.log%28arrayFruits.fill%28%27%25F0%259F%258D%258B%27%252C1%29%250A%252F%252F%2520fill%2520array%2520with%2520%25F0%259F%258D%258B%2520from%2520index%25201%2520%250A%250A%252F%252Fexpected%2520output%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%258B%27%252C%27%25F0%259F%258D%258B%27%252C%27%25F0%259F%258D%258B%27%252C%27%25F0%259F%258D%258B%27%255D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%252F%252F%2520Egs%25202%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250Aconst%2520%2520arrayFruits%2520%253D%2520%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%2589%27%252C%27%25F0%259F%258D%258F%27%252C%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%258B%27%255D%250A%250Aconsole.log%28arrayFruits.fill%28%27%25F0%259F%258D%258B%27%252C1%252C%25203%29%250A%252F%252F%2520Fill%2520with%2520%25F0%259F%258D%258B%2520from%2520position%25201%2520but%2520not%2520including%25203%250A%250A%2520%252F%252F%2520Expected%2520outuput%250A%255B%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%258B%27%252C%27%25F0%259F%258D%258B%27%252C%27%25F0%259F%258D%2593%27%252C%27%25F0%259F%258D%258B%27%255D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%250A%250A%250A%2520"
    style="width: 684px; height: 614px; border:0; transform: scale(1); overflow:hidden;"
    sandbox="allow-scripts allow-same-origin">
  </iframe>`,
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

  method.textContent = arrayMethods[randNum].method;
  desc.textContent = arrayMethods[randNum].description;
  useCase.textContent = arrayMethods[randNum].usecase;
  egs.innerHTML = arrayMethods[randNum].illustration;
};

displayArrMethods();
