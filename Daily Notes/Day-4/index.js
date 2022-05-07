//Bitwise Oparater
//console.log(1&1); //1// AND->   T AND T = T   //  1 AND 1 = 1
//console.log(0|0); //0//OR->    F OR  F = F   //  0 OR  0 = 0
//console.log(1^0); //1//XOR->   T XOR F = T   //  1 XOR 0 = 1
//console.log(2<<3); //Means we have to shift 2 by 3 positions to the left//
//console.log(5>>3); //Means we have to shift 5 by 3 positions to the right//

//------------------------------------------------------------------------------
//Ternary operators
let x = 2;
let y = 3;
// x > y ? consol.log("2 is greter than three") : consol.log("2 is less than three");
x > y ? x++ : x-- ;//1
console.log(x); //1

//----------------------------------------------------------------------------
//if else blocks
//if else if and else blocks
// switch

let g = 3;

// if a certain condition wrtten inside the parenthesis() of if blocks is true then we enter inside
//the body of if basically enters inside the curly bracs of if loop
// if can be use alone but else is used with if blocks only, not alone
//only if the IF block condition is true, it will enter inside the if block otherwise it will automatically enter inside the else blocks 

if(g>2){
    console.log(g);
}
else if(g==3){
    console.log("Enter inside the else block");
}
else{
    console.log("Entered inside the else block");
}

//-----------------------------------------------------------------------------
//Switch case

let number = 4 ;
switch(number)
{
    case 1:
        console.log("I am one");
        break;
    case 2:
        console.log("I am one");
        break; // if we cut any break statement then it will directy fall in the inside of another statements 
    case 3:
        console.log("I am one");
        break;
    case 4:
        console.log("I am one");
        break;
    case true:
        console.log("I am true");
    default:
        consol.log("I am greter than four");
        break;
}