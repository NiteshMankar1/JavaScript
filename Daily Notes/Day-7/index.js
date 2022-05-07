//----------------------------------------Arrays-----------------------------

// Array is combination os strings, numbers and boolean values
// Array looks like -- a borectangle box divided by divider 
// In array there are indexs through which we can acces those strings and numbers.
// index -- refrences to the data which is stored in Arrays
// to represent array we have to write square brackets..........

//---------------------Method-1------------------ :- creating and assigning values to an array.
// eg --> let Div = ["String" , 2 , 4.5];

//---------------------Method-2 -----------------:- Creat an empty array, and then start assigning values to them as per the index position 

let name2 = [];

name2[0] = "Rudoff";
name2[1] = "onoff";
name2[2] = "off";
name2[3] = "Rud";
name2[8] = "No";

console.log(name2);

//----------------------------Method-3------: Create an array using Constructor
let name3 = new Array("Raju","Shyam","Baburao");
console.log(name3);

// let Run = ["String" , 44 , 8.4];
// console.log(Run);

//------------------------------------------------------------------------------------------------------------

//Methods---------Push, Pop , Unshift, length, indexof, lastIndexof

//push - Addition of values at the last position only 

name2.push("shyam");
name2.push(7);
console.log(name2);

//pop - pop helps us to remove the values from last position

name2.pop();
name2.pop();
console.log(name2);

//shift-- Shift removes from first position and unShift adds on the first position

name2.shift();
console.log(name2);

name2.unshift("Hrithik");
console.log(name2);

//length
console.log(name2.length);

//---------------------------------------------------------------------------------------------------------

//indexOf, LastIndexof, join, concat , reverse , sort , slice , splice

let num1 = [1,2,3,4,4,5,5,8];
let num2 = [6,7,8,9,10];

console.log(num1.indexOf(5));
console.log(num1.lastIndexOf(8));

//concat donot changes the original array

// num1.concat(num2);
// console.log(num1);
// console.log(num2);

console.log(num1.concat(num2));
console.log(num1.join(" * "));//it joins with *

//reverse--// sort---//reverse

console.log(num1.reverse());

let num3 = [5,2,6,5,4,3,8]
// console.log(num3.sort());

//console.log(names.sort());

// console.log(names.sort().reverse());// using sort followed by reverse gives u values arranged in descending order

// splice , slice

//splice
// first value gives the index and second values gives the num of values to be removed

// num3.splice(2,23,5,6,8);
console.log(num3);

//slice
//starting index is inclusive and end index is exclusive  i.e not include
console.log(num3.slice(2,6));


// // map , filter , reduce
// //they are known as one linear functions
// //map,filter,reduce never modifies the original array....
// //map,filter,reduce returns a new array.

// //-------------------------------map-----------------------------------------------------
// map() - creates a new array from calling a function for every array element
// map() - calls a function once for each elements in an array
// map() - does not execute te function for empty elements
// map() - does not change the original array
// let number = (2,3,4,5,6,7);
// number.map((item)=>{console.log(item)})

// //------------------------------filter---------------------------------------------------
// filter() - method creats a new array filled with elements that pass a test provides by a function
// filter() - method does not execute the function for empty elements
// filter() - methods does not change the original array
// let res = number.filter((item)=>{
//     return item > 3
// })
// console.log(res);

// //-----------------------------------------reduce--------------------------------------------------------------

// reduce - method execute a reducer function for array elements
// reduce - method returns a single value : the function accumulated result
// reduce - method does not execute the function fo empty array elements
// reduce - method does not change the original array
// let res1 = number.reduce((accumulator,current)=> accumulator += current,0);
// console.log(res1)

//-----------------------example-------------------
let A=[1,2,3,4,5,6]

let B = A.reduce((acc,cur)=>acc = acc * cur,1);
console.log(B);
