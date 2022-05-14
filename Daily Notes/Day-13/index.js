//first Class Function, Higher Order Functins ,CallBack Function

console.log("Working..");

a();//hoisting 
// ----------------------------------------------------------------------creating normal function --------------------------------------------------------------------
function a(){
    console.log("I am fn A");
}
//function support hoisting but not all kind of function
//function bodies called function statement/defination
//fn statement supports hoisting, i.e calling the function even before declaring the function.

// ----------------------------------------------------------------- making anonymous funciton-----------------------------------------------------------------------

//b();
var b = function(){//this is function expression/anonymous fn//function without name
    console.log("I am fn B");
}
//since here this fn is anonymous, it won't support hoisting.function expression don't support hoisting
console.log(b);
b();
//A function expression is a unnammed function assigned to the variable, The variable receives the function defn,which
//in turn can call the function by calling the variable name{ a() }

// -------------------------------------------------------------------------- function in scope ----------------------------------------------- 

{
    let d = function abc(){
        console.log("This is function")
    }
    d();
}
// d();//will throw not defined error as not in the scope
//the fn can only be called inside the scope and not outside the scope.

//---------------------------------------------------arrow function // Introduced in ES6(2015)

let f = () => {
    console.log("I am Function F")
}
f();//calling function



//--------------------------------------------------------------------------First class Function(FCF)------------------------------------------------------
//First class Function - The function can be passed as values(as arguments) into another function or can be returned from
//another function as values. This unique feature of function makes them called as first class functin / First class citizen

let g = function(param){//HOF
    console.log("I am fn G"); // Normal text
    console.log(param); // Here we are writing all the elements in function h 
    param(); // Here we are not calling function h
}
function h(){//FCF
    console.log("i am fn h");
}
g(h);       // If we write this we are calling both function g and h
//g();      //If we write this then we get error because we are not calling function h here we are calling only g function

//Higher Order function(HOF) - The function which accept the FCF or return them are called as Higher Order Function


//--------------------------------------------How to written the function --------------------------------------------------

let i = function(){//HOF
    return function j(){//FCF
        console.log("I am fn j");
    }
}

// let returnVal = i();
// console.log(returnVal);
console.log(i());

//---------------------------------------------------call back fuction-------------------------------------------------------------

setTimeout(() => {
   console.log("hello Everyone"); 
}, 4000);

//----------------------------------------------------------------call back functio----------------------------------------
const sayHi = (nameOfFriend) => {//Callback function
    console.log("Hello",nameOfFriend);
}

const greeting = (friend, callBackFUnction) => {
    callBackFUnction(friend);//sayHi(friend);
}

greeting("Bala",sayHi);

//function sayHi(arg3){//arg3=Bala
    // log("hello",arg3)//hello Bala
// }

//function greeting(arg1, arg2){//HOF
    // arg1 = "Bala",
    // arg2 = sayHi,
    // arg2(Bala); => sayHi(Bala);//calling a function
// }

// greeting("Bala",sayHi)













// let element = document.createElement("span");
// element.className = "child";
// element.innerText = "Good Morning";
// document.querySelector("div.owner").appendChild(element);

// let element1 = document.createElement("img");
// element1.className = "child2";
// element1.setAttribute("src","download.jpg");
// document.querySelector("div.owner").appendChild(element1);