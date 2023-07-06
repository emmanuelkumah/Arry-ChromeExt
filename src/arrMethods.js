const arrayMethods = [
  {
    method: "Array.concat()",
    usecase: "Join Two Arrays Together",
    description: `The concat() method is used to join two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    `,
    illustration: `
    var dayTimeMeals = ['breakfast', 'lunch'];
    var nightTimeMeals = ['merienda', 'dinner'];

    var allTheMeals = dayTimeMeals.concat(nightTimeMeals); 
    ['breakfast', 'lunch', 'merienda', 'dinner']
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
