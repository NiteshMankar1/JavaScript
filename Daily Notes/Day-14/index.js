// ------------------------------------- Inheritance --------------------------------------------------
let student = {
    fname: "Nitesh",
    lname: "Mankar",
    age: 23,
}

let student2 = {
    fname: "Raju"
}
student2.__proto__=student;

console.log(student2);
console.log(student2.lname);

let arr1 = [1,2,3,4];///---------------------------------------array

//---------------------------------------------------------creating objects
let employee = {
    name: "Arjun",
    resignation: "No",
    id: 32,
    showDetails: function(param){
        console.log(this.name,this.id,this.resignation);
    }
}
let employee1 = {
    name: "Vikram",
    resignation: "No",
    id: 32,
    // showDetails: function(param){
    //     console.log(this.name,this.id,this.resignation)
    // }
}
let employee2 = {
    name: "Ashu",
    resignation: "No",
    id: 32
}
console.log(employee);
///-------------applying call function----------------

employee.showDetails.call(employee1);

////-------------------bind---------------------------

let res1 = employee.showDetails.bind(employee1);
let res2 = employee.showDetails.bind(employee2);
res1();
res2();

///---------------------prototype---------------------------
console.log(arr1.__proto__);
console.log(arr1.__proto__.__proto__);
console.log(arr1.__proto__.__proto__.__proto__);

