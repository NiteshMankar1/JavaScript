// for - for , while , do while , for each , for-in
//-----------------------------for---------------------------------------------------
// In for loop we can go in the loop till the condition is not satisfied
// We cannot take variable as a const in this and taking var is also not good  in this
for (let i = 10 ; i < 20 ; i++){
    console.log(i);
}

//---------------------------while-------------------------------------------------------
let a = 10;
while(a>0){
    console.log(a);
    a--;
}


//Examples---------------------------
for( x=0 ; x<=10 ; x++){
    console.log(x*2);
}

let y=0;
while(y<=10){
    console.log(y*2)
    y++;
}
//Examples-----------------------------

//do while loops--------------------------------------------------------------------------
//In do while loop first it check the
let c=2;
do{
    console.log(c);
    c=c+2;
}while(c <= 20);

//for in loop --------------------------------------------------------------------------------------------
//array = to declare array we use [] 


let tourists = ["Kishan" , "Lakhi" , "Ravi" , "Sid"];
for(let a in tourists){ //a = keyboard, in = giving index values to a one by one from tourists
    console.log(a);
}

//for of loop ---------------------------------------------------------------------------------------------

for(let values of tourists){ // values = keyboard, of = giving the values of tourists array
    console.log(values);
}

//forEach loop
//Here forEach is a method here

tourists.forEach((values,index)=>{/// The first parameters always accepts the values of the array and the second parameters accepts the index of the array
    console.log(index,values)
})