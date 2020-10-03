// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentation.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.
​
// Use the following helper functions in your solution
​
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}
​
function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}
​
function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}
​
function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}
​
//=============================================================================
/*                              Q1                                           */
//=============================================================================
// write a function that takes an array of numbers as an input and returns an array
// containing if the number is odd or even.
// solve it using the most appropriate helper functions(reduce,each,map,filter).
// wordLengths([1, 3, 4, 5, 9, 10]) // [false, false, true, false, false, true]
​
function oddOrEven(arr) {
 return map(arr, function(element, index){
 	if(element%2===0){
 		return "even" 
 	}return "odd"
 })
}
​
//=============================================================================
/*                                  Q2                                    */
//=============================================================================
// Write a function that accepts one parameter: an array,
// and returns the total amount that needs to be paid.
// solve it using the most appropriate helper functions(reduce,each,map,filter).
// totalPrice(lineItems); // // 17.5
const lineItems = [
  { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
  { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
  { description: 'Butter', quantity: 2, price: 6, total: 12 }
];
function totalPrice(arr) {
  return reduce(arr, function(acc,element, index){
  	return element.total+acc
  },0)
}
​
//=============================================================================
/*                                  Q3                                    */
//=============================================================================
// write a function that takes an array of numbers as an input and returns an array
// with only numbers that are strictly bigger than the average of that array
// solve it using the most appropriate helper functions(reduce,each,map,filter).
// moreThanAverage([1, 5, 3, 6, 10]) // [6, 10]
function average(array){
var sum=0
var aver
   each(array,function(element,index){
    sum=sum+element 
    aver=sum/array.length})
return aver}

function morethan (array){
return filter(array,function(element, index){
return element>average(array)})
}
​

​
//=============================================================================
/*                                  Q5                                       */
//=============================================================================
/*
 using closures create a function called makePizza that has the following properties and methods
 crust a property represented by a string. ex "thin","thick".
 size a property represented by a string. ex "M","L".
 numberOfSlice a property that hold the number of slice, ex: 8

 ** the values of all properties will be provided as arguments in the function invocation.
 addIngredients a function that add a new ingredient to the ingredients property.
 displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
 bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done"
 eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
 */
//Example:
// var pizza = makePizza("thin", "M", 2);
// pizza.addIngredients("tomato");
// pizza.addIngredients("mushroom");
// pizza.addIngredients("meat");
// console.log(pizza.displayIngredients());
// pizza.bakePizza();
// pizza.eatSlice();
// pizza.eatSlice();
// pizza.eatSlice();
​
// Write your code here .....

var pizza=function makePizza(crust , size , slice){
return {
crust:crust,
size:size, 
slice:slice,
}
}


 function addIngredients(str){
pizza.ingredient=str
 }

function displayIngredient(){
	return pizza.ingredient
}

setTimeout(function bakePizza (pizza){
	return "your"+pizza.crust+pizza.size+pizza.slice+"is done"
},2000)
​
//=============================================================================
/*                                  Q6                                      */
//=============================================================================
/*
    Create a ReadingList class by using OOP concept, where:
    Your class should has:
    "read" for the number of books that finish reading
    "unRead" for the number of books that still not read
    "toRead" array for the books names that want to read in the future
    "currentRead" for the name of the book that is reading currently
    "readBooks" Array of the names of books that finish read
    "AddBook" function that:
    a- Accept the book name as parameter
    b- Add the new book to "toRead" array
    c- Increment the number of the unread books.
    d- Create a "finishCurrentBook" function that:
      a- Add the "currentRead" to the "readBooks" array
      b- Increment the "read" books
      c- Change the "currentRead" to be the first book from "toRead" array
      d- Decrement the number of "unread" books
*/
​
// Now, to make sure that you are actually reading, make a comment below this and type: Yes I am
​
// Write your code here .....
​
//=============================================================================
/*                                  Q7                                       */
//=============================================================================
// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6.
// This means that: a = 1, b = 2, c = 3 ....z = 26.
// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list.
// For our purpose, position begins with 1.
// nameValue(["abc","abc abc"]) => [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.
// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.
// Input will only contain lowercase characters and spaces.
//   Good luck!
function nameValue(arr) {
	var sum=0
for (i=0; i<arr.length ;i++){

for (var j=1 ; j<=arr[i].length; j++) {
sum=sum+charCodeAt(j)
}
}return sum
}
//=============================================================================
/*                                  Q8                                       */
//=============================================================================
​
//Create HTML, CSS & JS files and connect them together
//Add Two text input fields, one with a placeholder input, and another with color
//Add a button below them and an empty unordered list below the button
//Create 3 CSS classes (red, yellow, blue)
//Create a javascript function that adds an item list to the unordered list
//If the color value is red, yellow or blue
//Add the CSS class to the item accordingly
//Do not add a list item if the color value is non of the colors
​
//DO NOT USE JQUERY
​
//================================================================================
/*                              Q9                                            */
//================================================================================
​
//Create HTML, CSS & JS files
//Link jQuery
//Create an empty unordered list
//Create three input elements of type checkbox
//Create two buttons "create" & "remove"
//Create 7 classes in CSS each with the appropriate color (black, purple, green, orange, red, yellow, blue)
//Using jQuery run a function that gets called using the button's id (#create)
//The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
//If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
//If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
//If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it
​
//Using jQuery call a function from the button's id (#delete)
//The function removes all the elements from the unordered list based on the checkboxes as the previous function
//Use jQuery as much as you can in selecting elements and other tasks
​
//================================================================================
/*                              Q10                                           */
//================================================================================
// Theoretical questions.
// 1- Is javascript a compiled or an interpreted language?
// Your Answer Here:
 ==>javascript is a compiled language
// 2- In OOP, what does "this" refer to ?
// Your Answer Here:
 ==> in OOP "this" refers to the funcion to execute
// 3- What is jQuery?
// Your Answer Here:
jquery is a javascript library, that makes the use of javascript much easier when it comes to websites
// 4- What are the three ways that we can add css to HTML file
// Your Answer Here:  ==>
1/Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.
2/ inside the <style> element, inside the head section
3/add the style attribute to the relevant element