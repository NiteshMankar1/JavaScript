//Objects = Objects are collection of propeties and methods.
//Objects have keys which are converted to string types, 
//The prperties and methods donot follow the  insertion order.
//backtick=``
//creating an objects
//first methods to creat object 
let mobile = {
    brand: "Samsung",
    weight : 200 ,
    isWorking : true,
    11 : "Android Version",
    displayInfo : function(){
        console.log(`The brand of my mobile is ${mobile.brand} and the weight is ${this.weight} which is in the workingcondition ${this.isWorking} , also with a android of${mobile["11"]}`);
            //WE can write Mobile and this keyword also
    }//we can have multiple methods giving cooma , here
}
console.log(mobile);
console.log(mobile.displayInfo());

//delete= delete mobile.isWorking;
//has for searching = console.log(mobile.hasOwnProperty("brand"));

mobile.camera = "32px";
console.log(mobile);

//---------------------------------second method 
let mobile1 = {};
//now start assigning properties using objectName.properties
mobile.brand ="Onepluse";
mobile1.weight = 99;
mobile1.camera = "3px3";

// 3rd method to creat objects

function Mobile(brand,weigh,camera){////////////Object/Fuction Constructer creation
    this.brand = brand;
    this.weight = this.weight;
    this.camera = camera;//-------We are writing "this" because still we havent creat any object but whenever we creat any object it will directly points toward the parent Object Construter  
}
//this keyword
// I an objectwe this refers to th object
//When we use this keyword alone, then it points to global Objects
//In a functionn , this referes to parent Object


let apple = new Mobile("Apple" , 190 , "13px"); //creating a object=apple for constructor Mobile
let vivo = new Mobile("Vivo" , 210 , "108px");  //creating a object
console.log(apple);
console.log(vivo);

console.log(apple.brand);

console.log(Object.keys(apple));
console.log(Object.values(apple));  //Here Object is predefined, we have to 

for(const[key,value] of Object.entries(apple)){
    console.log(key, value);
}

values = 23;//always give a keyword like let, const,var otherwise you  are creating a property to the window object
console.log(value);
console.log(y=this)

//spred operator

let arr1 = [1,2,3,4,5];
let arr2 = [7,8,9,10,11];

console.log(arr1.concat(arr2))
let arr3 = [...arr1,...arr2];
console.log(arr3);

//Create two students having properties as name, rollno, class, showDetails using Object Constructor.
