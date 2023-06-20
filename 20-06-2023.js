var array = [{ id: 1, name: "Sameer", age: 30, surname: "Mhatre" },
{ id: 2, name: "Rakesh", age: 24, surname: "Katkar" },
{ id: 3, name: "Shubham", age: 24, surname: "Patil" },
{ id: 4, name: 'Saharsh', age: 29, surname: "Mhatre" }];

array.map((name) => {
    var userName = "Saharsh";
var index = array.find((obj) => obj.name == userName);
console.log(index);
    //  console.log(object)
})


// array.map((object)=>{
//     console.log(object)
// })

//FindIndex 
// var userName = "Saharsh";
// var index = array.findIndex((obj) => obj.name == userName);
// console.log(index);

// var userSurname="Mhatre";
// var selectedUser=array.find((obj)=>obj.surname==userSurname);
// console.log(selectedUser);

// var userId = 2;
// // find user from array by id
// var selectedUser = array.find((object) => swaraj.id == userId)
// console.log(selectedUser);
// var userAge = 25;
// var selectedUser = array.find((object) => object.age == userAge);
// console.log(selectedUser)


// var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
// console.log(numbers.sort())

// var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
// console.log(numbers.sort((a, b) => b - a))

// var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
// console.log(numbers.sort((a, b) => a - b))

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length < 6);

// console.log(result);
// // Expected output: Array ["exuberant", "destruction", "present"]
