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
];

export { arrayMethods };
