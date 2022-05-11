//DOM Manipulation

const element1 = document.getElementById("message");
console.log(element1);/// if we write this we get all document inside that id as it is.
console.log(element1.innerHTML);/// if we write this we get all the elements inside element1 id with the tags also
console.log(element1.innerText);/// if we write this we get all the elements inside element1 and inside the span tag also

const element2 = document.getElementsByClassName("impMessage"); // In getElementsByClassName we save elemets in the form of array
console.log(element2); // this will give us entire things 
console.log(element2[0].innerHTML); // this will give us all elements inside it with tags 
console.log(element2[0].innerText); // this will give us all elements inside it without tags 
console.log(element2[1].innerHTML); // this will give us all elements inside it with tags 
console.log(element2[1].innerText); // this will give us all elements inside it without tags 

//-----------getElementBytagName

const element3 = document.getElementsByTagName("h1");
console.log(element3);
console.log(element3[0].innerHTML); 
console.log(element3[0].innerText);  
console.log(element3[1].innerHTML); 
console.log(element3[1].innerText);

//making functiona

function changeText(){
    const changeText = document.getElementsByTagName("h1");
    // console.log(changeText[0].innerText); just to print the values
    changeText[0].innerText = "hello world";
}

//making function for color

function changeColor(){
    const changeColor = document.getElementsByClassName("impMessage");// similarly for tags and id
    changeColor[0].style.color = "red";
}















