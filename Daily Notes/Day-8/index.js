
//------------------------------Methods for String--------------------------------------------------
//if lenght is suppose 16 then index value will be 0 to 15
// index = 0 to lenght-1


let str = "Lakhwindr Singh";
// ----------Method = length --which gives us length of string
console.log(str.length);
// ----------Method = charAt --which gives us the letter at the index value 2
console.log(str.charAt(2));

//endWith
console.log(str.endsWith)

//includes
let sentence = "Hello World";
console.log(sentence.includes("world"));

//indexOf,lastIndexOf

console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));

//replace
//Not going to manipulate the original string
console.log(str.replace("Lakhwinder","Lucky"));

//spilt

let email ="Siddhant.gupta@prepbytes.com";
let values = email.split("@");
console.log(values);