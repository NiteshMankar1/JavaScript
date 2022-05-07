// map preserves the order of insertion of key value pairs
// map also preserves the data type of keys  i.e it doesnot converts the key to string by default like what
//objects does So, MAPS can store keys of any data types

//how to convert a map
let map = new Map();

//how do we set values to map
map1.set("name","Ravi");//--------------map1.set(key,value)
map1.set("age","29");
map1.set("1","one");
map1.set("phone","9874560122");
map1.set("true","true");

//get is use to take a particullar elements
console.log(map1.get("1"));
console.log(map1.get(1));
console.log(map1.get("name"));

//has is use to check the element is there are not
console.log(map1.has(1));

//delete- to delete the elements
map1.delete(1);

// clear--to clear all 
// map1.clear

console.log(map1);
console.log(map1.size);

for(let key of map1.keys()){
    console.log(key);
}

for(let value of map1.values()){
    console.log(value);
}

for(let entry of map1.entries()){
    console.log(entry);
}

map1.forEach(function(value,key){
    console.log(key,value);
})

//-----------------------------------Sets---------------------------------------
//Sets has no keys but stores only UNIQUE Values...
//in set we can not pick one values 
let set1 = new Set();

set1.add("Apple");
set1.add("Banan");
set1.add("Oranges");
set1.add("Mangoes");
set1.add("Lichies");

console.log(set1);

console.log(set1.values());




