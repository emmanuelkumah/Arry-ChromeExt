const arrayMethods = [
  {
    method: "Array.concat()",
    usecase: "Join two arrays together",
    description: `<p>
    The concat() method is used to join two or more arrays. This method does
    not change the existing arrays, but instead returns a new array
    </p>`,
    illustration: `<p>
    let fruits = ['🍌', '🍉','🍓']; <br/>
    let pasteries = ['🍞', '🍕']; <br/>
    
    let allMeals = fruits.concat(pasteries); <br/>
    
    console.log(allMeals) <br/>
    
    output:  ['🍌', '🍉','🍓','🍞', '🍕'] </p>`,
  },
  {
    method: "Array.slice()",
    usecase: "Copy a portion of an array into a new array object",
    description:
      "The slice() method copies a portion of an array into a new array without modifying the original array. It can also be used to clone an array, and extract subset of array into a new array",
    illustration: `<p>
   Eg.1: Clone an array <br><br>

  const fruits= ['🍓','🍉','🍏','🍆','🍋'] <br>
  const newFruits = fruits.slice() <br>
  console.log(newFruits) <br><br>

  output: ['🍓','🍉','🍏','🍆','🍋'] 
  <br>
  <br>

   Eg.2: Copy portion of an array into a new array starting from index 2 
   <br>
   <br>

  const fruits= ['🍓','🍉','🍏','🍆','🍋'] <br>
  const copiedFruits = fruits.slice(2) </br><br>
 
  output: ['🍏','🍆','🍋']
 
    </p>`,
  },
  {
    method: "Array.toString()",
    usecase: "Converts an array into a string",
    description:
      "The toString method will return a string representation of all the elements in the array",
    illustration: `<p
     Egs.1: Converts an array to string <br><br>

    const arrayFruits = ['🍓','🍉','🍏','🍆','🍋']<br>
    
    const arrayToString = arrayFruits.toString();<br>
    
    console.log(arrayToString)<br><br>
    
    Output: "🍓,🍉,🍏,🍆,🍋"
    
     </p>`,
  },
  {
    method: "Array.join()",
    usecase: "Join array elements into a string",
    description:
      "The join() method connects all the elements of an array and returns a string representation of the array. It accepts an optional separator parameter that indicates what to connect the array elements with. For instnace, if the separator is a (-) dash, all the array elements will be connected by a (-). If the separator is an empty string, all the elements are joined without any characters in between them.",
    illustration: `<p>
    Egs.1: Converts an array to string

    const arrayFruits = ['🍓','🍉','🍏','🍆','🍋']<br><br>

    console.log(arrayFruits.join(""))<br><br>

    Output: "🍓🍉🍏🍆🍋" <br><br>

    Egs.2: Join array elements by a dash(-)<br><br>

    console.log(arrayFruits.join('-'))<br><br>
      
    Output: "🍓-🍉-🍏-🍆-🍋"
    </p>`,
  },
  {
    method: "Array.from()",
    usecase: "Creates an Array from a String",

    description:
      "Creates a new, shallow-copied array instance from an iterable or array-like object ",
    illustration: `<p>

      console.log(Array.from('🍓🍉🍏🍆🍋')); <br><br>

      output: ['🍓','🍉','🍏','🍆','🍋']
    </p>`,
  },
  {
    method: "Array.isArray()",
    usecase: "Check if the passed value is an Array",
    description:
      "The isArray() method checks whether the passed argument is an array or not. It returns true if the the value is an array; otherwise false",
    illustration: `<p>

      console.log(Array.isArray(['🍓','🍉','🍏','🍆','🍋']));<br><br>

       Output: true

      console.log(Array.isArray([]))<br><br>

      Output: false
 
    </p>`,
  },
  {
    method: "Array.of()",
    usecase: "Create a new array from the given arguments",
    description:
      "The Array.of() method always creates an array that contains the values that you pass to it regardless of the types or the number of arguments",
    illustration: `<p>
       Egs. Creates a new array with provided elements <br><br>

        console.log(Array.of('🍓','🍉','🍏','🍆','🍋')); <br><br>

       output: ['🍓','🍉','🍏','🍆','🍋']
 
       </p>`,
  },
  {
    method: "Array.copyWithin()",
    usecase: "Copy array elements",
    description:
      "The copyWithin() method copies array elements from one position to another in the same array and returns it without modifying its length.",
    illustration: `<p>
    Eg. Copy from index 1 all elements from 0 to the end <br><br>
     const  array1 = ['🍓','🍉','🍏','🍆','🍋']<br><br

      console.log(array1.copyWithin(1,0))<br><br>

      output: ['🍓',🍓','🍉','🍏','🍆']<br><br>
 
    Eg. Copy from  index 0 all elements from index 1 to the end but not including 4 <br><br>

 
      const  array1 = ['🍓','🍉','🍏','🍆','🍋']<br><br> 
      console.log(array1.copyWithin(0,1,4))<br><br>
      output: ['🍉','🍏','🍆','🍆','🍋']
    </p>`,
  },
  {
    method: "Array.filter()",
    usecase: "Filter array elements",
    description:
      "The filter() method returns a new array containing all the elements that passed a test that was defined in a given function.",
    illustration: `<p>
    Eg. filter out element with fruit equals 🍓 <br><br>
    const  arrayFruits = ['🍓','🍉','🍏','🍓','🍋']<br><br>

    console.log(arrayFruits.filter((fruit) => fruit === '🍓'))<br><br>
   
    
    Output: ['🍓','🍓']
    
    
    
     </p>`,
  },
  {
    method: "Array.fill()",
    usecase: "Fill all array elements with another item",
    description:
      "The fill() method changes all the elements in an array with a specified value",
    illustration: `<p>
    Eg. fill array with 🍋 from index 1 <br><br> 
    const  arrayFruits = ['🍓','🍉','🍏','🍓','🍋']<br><br>

    console.log(arrayFruits.fill('🍋',1)<br><br>

    Output: ['🍓','🍋','🍋','🍋','🍋']<br><br>
                     
   Eg.2 Fill with 🍋 from position 1 but not including 3<br><br>          
  const  arrayFruits = ['🍓','🍉','🍏','🍓','🍋']

  console.log(arrayFruits.fill('🍋',1, 3) <br><br>

   Outuput: ['🍓','🍋','🍋','🍓','🍋']
            



 </p>`,
  },
  {
    method: "Array.indexOf()",
    usecase: "Find the position of an element in an array",
    description:
      "The indexOf() method finds the position of an element in an array. It returns the index of the first occurrence of the element that you want to find, or -1 if the element is not found",
    illustration: `<p>
    
    Egs. Find the position of  '🍏' in the array <br><br>

   const fruits = ['🍓','🍉','🍏','🍓','🍋'] <br><br>
   console.log(fruits.indexOf('🍏')) <br><br>

   Output:  2        
 </p>`,
  },
  {
    method: "Array.findIndexOf()",
    usecase:
      "Returns the first index of the element in a given array that satisfies the provided test function",
    description:
      "The findIndex() executes a test function on every element in the array until it finds the one where test function returns a truthy value.Once the findIndex() finds such element, it returns the element's index. If no data is found then the value of -1 is returned",
    illustration: `<p>
    Egs. Return the index of the first element that satisfies the provided testing <br><br>

    console.log(['🍉','🍏','🍓','🍋'].findIndex((fruit) => fruit === '🍋')) <br><br>

   Output:  3
          
    </p>`,
  },
  {
    method: "Array.forEach",
    usecase: "Loops through any array",
    description:
      "The forEach() array method circles through any array, executing a provided function once for each array element in ascending index order",
    illustration: `<p>
    Egs. Circle through array elements

    const arrFruits = ['🍉','🍏','🍓','🍋']
    arrFruits.forEach((fruit) => console.log(fruit + 1))
    
    Output: 
    "🍉1"
    "🍏1"
    "🍓1"
    "🍋1"
          
    </p>`,
  },
  {
    method: "Array.map",
    usecase:
      "map() is used to transform an array into a new array with different values.",
    description:
      "The  map() method applies a function we provide to each element of an array and creates a new array with the results.",
    illustration: `<p>
    Egs. Modify array elements <br>

    const arrFruits = ['🍉','🍏','🍓','🍋'] <br><br>
    const transformedFruit = arrFruits.map((fruit) => "my "+fruit) <br><br>

    console.log(transformedFruit)<br>
    Output: ["my 🍉", "my 🍏", "my 🍓", "my 🍋"]

          
    </p>`,
  },
  {
    method: "Array.every()",
    usecase:
      "Use the every() method to test whether all elements in an array pass the test provided by a test function",
    description:
      "The every() method considers all the elements of an array and checks whether all the elements of the array satisfy the given condition. It returns a Boolean value (true or false)",
    illustration: `<p>
    Egs. Check if every item is an '🍏'

    const arrFruits = ['🍉','🍏','🍓','🍋']
    const allApples = arrFruits.every((fruit) => fruit === '🍏')
    
    console.log(allApples)
    
    Output: false 
    </p>`,
  },
  {
    method: "Array.some()",
    usecase:
      "Use the some() method to test if at least one element in the array passes a test.",
    description:
      "The some() methods checks if at least a single array element passes the provided test function. If the test is passed, it returns true. Else, returns false.",
    illustration: `<p>
    Egs. Check if at least an item is an '🍏' <br><br>

    const arrFruits = ['🍉','🍏','🍓','🍋'] <br><br>
    const anyApple = arrFruits.some((fruit) => fruit === '🍏') <br><br>
  
    console.log(anyApple) <br><br>
    
    Output: true 
    </p>`,
  },
  {
    method: "Array.pop()",
    usecase: "Remove the last element from an array",
    description:
      "The pop() method removes the last element from an array and returns that element. This method changes the length of the array",
    illustration: `<p>
    Egs. Remove the last item from the array <br><br>

    const arrFruits = ['🍉','🍏','🍓','🍋'] <br><br>
    const removeLast = arrFruits.pop() <br><br>
    
    console.log(removeLast) <br><br>

    Output: "🍋"
    </p>`,
  },
  {
    method: "Array.push()",
    usecase: "Add an element to the end of the array",
    description:
      "The push() method adds the specified elements to the end of an array and returns the new length of the array",
    illustration: `<p>
    Egs. Add element to the last item in the array <br><br>

    const arrFruits = ['🍉','🍏','🍓','🍋'] <br><br>
    const addElements = arrFruits.push('🍊') <br><br>
    
    console.log(addElements) <br><br>

    Output: 5
    </p>`,
  },
  {
    method: "Array.shift()",
    usecase: "Remove the first element from an array",
    description:
      "The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.",
    illustration: `<p>
    const arrFruits = ['🍉','🍏','🍓','🍋'] <br><br>
    const removedFruit = arrFruits.shift() <br><br>
    console.log(removedFruit) <br><br>
    Output: "🍉"
    </p>`,
  },
  {
    method: "Array.unshift()",
    usecase:
      "Add a new element to the beginning of an array and returns the new length",
    description:
      "The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.",
    illustration: `<p>
    const arrFruits = ['🍉','🍏','🍓','🍋'] <br><br>
    const numberOfFruits = arrFruits.unshift('🍑',"🍒") <br><br>
    console.log(numberOfFruits) <br><br>
    Output: 6 <br><br>
    
    console.log(arrFruits) <br><br>

    Output: ["🍑", "🍒", "🍉", "🍏", "🍓", "🍋"]
    </p>`,
  },
  {
    method: "Array.reduce()",
    usecase: "Reduce the array to a single value",
    description:
      "The reduce() method executes a provided callback function on each element of the array, passing in the return value from the calculation on the next element till it finally produces a  single value.",
    illustration: `<p>
    const arrFruits = ['🍉','🍏','🍓','🍋'] <br><br>
    const singleValue = arrFruits.reduce((accumulator, currentFruit) => accumulator + currentFruit, "🍒") <br><br>
    
    console.log(singleValue); <br><br>
    Output: "🍒🍉🍏🍓🍋"
    </p>`,
  },
  {
    method: "Array.reverse()",
    usecase:
      "Reverse the elements array. The first element becomes the last, and the last element becomes the first",
    description:
      "The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first.",
    illustration: `<p>
    const arrFruits = ['🍉','🍏','🍓','🍋'] <br><br>
    const reversedFruits = arrFruits.reverse()<br><br>
    
    console.log(reversedFruits);<br><br>

    Output: ["🍋", "🍓", "🍏", "🍉"]
    </p>`,
  },
  {
    method: "Array.splice()",
    usecase: "Add or remove element from an array",
    description:
      "The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",
    illustration: `<p>
    Eg.1 Add element at index 1    
    const arrFruits = ['🍉','🍏','🍓','🍋'] <br><br>
    arrFruits.splice(1,0,'🍒') <br><br>
    console.log(arrFruits) <br><br>
    Ouput: ["🍉", "🍒", "🍏", "🍓", "🍋"]

    Eg.2 Replace element at index 1 with a new element
    const arrFruits = ['🍉','🍏','🍓','🍋']<br><br>
    arrFruits.splice(1,1,'🍒')<br><br>
    console.log(arrFruits)<br><br>
    Output: ["🍉", "🍒", "🍓", "🍋"]


    </p>`,
  },
  {
    method: "Array.find()",
    usecase: "Find the first element in an Array that meets a criteria",
    description:
      "The find() method returns the first element in the provided array that satisfies the provided testing function",
    illustration: `<p>
    const arrFruits = ['🍉','🍏','🍓','🍋'] <br><br>
    const foundFruit =  arrFruits.find((fruit) => fruit === '🍏') <br><br>
    console.log(foundFruit)<br><br>
    Output: "🍏"
    </p>`,
  },
];

export { arrayMethods };
