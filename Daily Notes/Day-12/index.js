console.log("Working..")


// Here we are making a function for the button which we are writing in html file
// here we are first making a element then we are assigning values to it by using getElementsByClassName function
//Then again we are changing its direction to column by using style attribute  


//--------------------------------------------------change to column by using changeDirection fuction ---------------------------------------------------

function changeDirection(){
    const element = document.getElementsByClassName("owner");
    element[0].style.flexDirection = "column";  
}

//--------------------------------------------------change in images by using changeImg fuction ----------------------------------------------------------

function changeImg(){
    const image = document.getElementsByTagName("img");
    image[0].src = "./sun.jpg"
//Instead of this we can write it directly
// document.getElementsByTagName("img")[0].src="./sun.jpg"
//-------if we want to add new img in any part-------
// changeImg.innerHTML = `<img src = "./sun.jpg"/>`;

}

//--------------------------------------------------change in color by using changeColor fuction ----------------------------------------------------------

function changeColor(){
    const changeColor = document.getElementsByClassName("impMessage");
    changeColor[0].style.color ="Brown"
//-------if we want to add few lines in any part-------
    // changeColor[0].innerHTML = `<div> Good Night</div>`;
}


//-------------------------------------------Creating a new tag and its class and elemets, all in JavaScript ----------------------------------------------

let element5 = document.createElement("div");
element5.className  = "newDiv";
element5.id = "newdiv";
element5.setAttribute("for","value");
element5.innerText = "Hello Welcome to new Era";
console.log(element5);
//apending this to documents
document.querySelector("p.impMessage").appendChild(element5);
