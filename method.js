// var start = 656;
// var end = 872;
// var filteredarray = [];
// var result = [];
// function twoStage(start, end) {
//     for (var i = start; i <= end; i++) {
//         if (i % 2 == 0 && i % 5 == 0 && i % 10 == 0) {
//             // console.log(i);
//             filteredarray.push(i);
//         }
//     }
//     console.log(filteredarray)
//     for (var j = 0; j < filteredarray.length; j++) {
//         //    console.log(filteredarray[j]);
//         result.push(filteredarray[(j += 1)]);
//     }
//     console.log(result);
// }
// twoStage(start, end);


// var arr=[1,2,3,4,5,6,7,8];
// arr.push(9);
// console.log(arr);//push element in last to an array

// var arr=[1,2,3,4,5,6,7,8];
// arr.pop()
// console.log(arr)//pop element from last in array

// var arr=[1,2,3,4,5,6,7,8];
// arr.shift()
// console.log(arr)//pop element from 1st pos in array
// var arr=[1,2,3,4,5,6,7,8];
// arr.unshift(90)
// console.log(arr)//push element in 1st element in array
var arr=[1,2,3,4,5,6,7,8];
// arr.unshift(0)
// arr.unshift(11)
// arr.unshift(12)
arr.unshift(0,11,12)
console.log(arr)
