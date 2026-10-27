const arr= [10, 20, 30, 40]
//1
let aboveThirtyFive=arr.some((value) => value > 35);
console.log(aboveThirtyFive); 
//2
let allAbove50 = arr.every((value) => value > 50);
console.log(allAbove50);
//3
let arrOfRoles= [`admin`, `user`, `superuser`]

console.log(arrOfRoles.includes(`admin`));
//4
let arrOfSalary = [1000, 2000, 3000, 4000,89000,900000,100000]

let totalSalary = arrOfSalary.reduce((acc,value)=>{
    return acc + value;
},0)
console.log(totalSalary);
//5
let objOfcart = [{name:"apple",price:100,quantity:2},{name:"banana",price:50,quantity:3},{name:"orange",price:80,quantity:1}]

let cart =objOfcart.reduce((acc,value)=>{
    return acc+value.price*value.quantity;
},0)
console.log(cart)
//6
// Find employees earning more than ₹30,000 using filter().

let empAboveThirty = arrOfSalary.filter((value)=> value> 30000);
console.log(empAboveThirty);

//7 

let students = [
    {name: "John", marks: 85,id:1},
    {name: "Jane", marks: 92,id:2},
    {name: "Jim", marks: 78,id:3},
    {name: "Jill", marks: 95,id:4}
];

console.log(students.find((student) => student.id ===3));

console.log(students.findIndex((student) => student.id ===3));
//8 Sort products by price from low to high
let sortdProducts = objOfcart.sort((a, b) => a.price - b.price);
console.log(sortdProducts);


//9 map
let employee = [
    {name: "Alice", salary: 50000},
    {name: "Bob", salary: 60000},
    {name: "Charlie", salary: 70000}
];

let empName = employee.map((emp) => emp.name);
console.log(empName);
