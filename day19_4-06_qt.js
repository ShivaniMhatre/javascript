// Q 1. Find subtraction of give two numbers by using function. 

// var number1 = 9876;
// var number2 = 5678;
// function subtraction(no1,no2){
//     var sub = no1-no2;
//     // console.log(sub)
//     return sub;
// }
// console.log(subtraction(number1,number2));

// Q 2. Find multiplication of give two numbers by using function. 

// var number3 = 9876;
// var number4 = 5678;
// function multiplication(no3,no4){
//     var mul = no3 * no4;
//     return mul;
// }
// console.log(multiplication(number3,number4));

// Q 3. Find dividation of give two numbers by using function. 

// var number5 = 9876;
// var number6 = 5678;
// function divid(no5,no6) {
//         var div = no5 / no6;
//         return div;
//     }
// console.log(divid(number5, number6));

// Q 4. Find three numbers from given array who's addition is equal to target.


var array = [34, 45, 56, 67, 78, 34, 76, 234, 567, 7834, 56, 34];
var target = 849;

function additionOfThreeNumber(arr, target) {
    var flag = false;
    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = i + 1; j < arr.length - 1; j++) {
            for (var k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == target) {
                    console.log(arr[i], arr[j], arr[k]);
                    flag = true;
                }

            }
        }
    }
    if (flag == false) {
        console.log("Number Not Found!!!!")
    }

}
additionOfThreeNumber(array, target);