const user = {
    name: "Bala",
    age: 25,
    role: "Frontend Developer",
    address: {
        city: "Chennai"
    }
};

const {name,address,age,role} = user;
const getUserName = ()=>{
    return name;
}
console.log(getUserName());

const getUserLocation = ()=>{
    return address?.city;
}
console.log(getUserLocation());

 const getUserMessage = ()=>{
        return `${name} is a ${age} year old  ${role}from ${address?.city}.`;

}
console.log(getUserMessage());

const newUser = {...user}

const updateUser = ( newAge, newRole) => {
    newUser.age = newAge;
    newUser.role = newRole;
}


console.log(updateUser(26,"Senior Frontend Developer"));

const printUsers = () => {
    return newUser;
}
console.log(printUsers());