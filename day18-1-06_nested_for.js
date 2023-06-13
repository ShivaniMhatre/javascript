// Q 1. Find Two Number From Array Which Has Addition Is Equal To Target
// var i, j;
// var arr = [3, 54, 65, 32, 2, 23, 56, 76, 17,18];
// var target = 20;
// for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j]==target) {
//              console.log(arr[i],arr[j],"Got It!!");
//         }
//     }
// }

// Q 2. Find Two Number From Array Which Has Subtraction Is Equal To Target
// var a,b;
// var arr = [3, 54, 34, 32, 2, 23, 39, 76, 17,18,55];
// var target = 21;
// for (a = 0; a < arr.length; a++) {
//     for (b = a + 1; b < arr.length; b++) {
//         if (arr[b] - arr[a]==target) {
//              console.log(arr[b],"-",arr[a],"=", arr[b]-arr[a]);
//         }
//         if(arr[a] - arr[b]==target){
//             console.log(arr[a],"-",arr[b],"=",arr[a]-arr[b]);
//         }
//     }
// }

//  OUTPUT
// 55 - 34 = 21
// 23 - 2 = 21
// 39 - 18 = 21
// 76 - 55 = 21

// Q 3. Find Three Number Which Has Addition Is Equal To Target
// var x, y, z;
// var target = 93;
// var arr = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7, 91, 1,1];
// for (var x = 0; x < arr.length - 2; x++) {
//     for (var y = x + 1; y < arr.length - 1; y++) {
//         for (var z = y + 1; z < arr.length; z++) {
//             // console.log(arr[x], "arr[x]", arr[y], "arr[y]", arr[z], "arr[z]")
//             if (arr[x] + arr[y] + arr[z] == target) {
//                 console.log(arr[x], arr[y], arr[z], "got it..")
//             }
//         }
//     }
// }
// OUTPUT
// 1 + 3 + 89 = 93
// 1 + 91 + 1 = 93
// 3 + 89 + 1 = 93


var target = 25;
var a, b, c, d;
var arr = [2, 3, 5, 5, 32, 54, 23, 12, 45, 23, 43, 1, 34, 65, 1, 54, 6, 33, 4, 9, 7];
for (var a = 0; a < arr.length - 3; a++) {
    for (var b = a + 1; b < arr.length - 2; b++) {
        for (var c = a+ 2; c < arr.length - 1; c++) {
            for (d = a + 3; d < arr.length; d++) {
                if (arr[a] + arr[b] + arr[c] + arr[d] == target) {
                    console.log(arr[a], arr[b], arr[c], arr[d], "got it..");
                    //   console.log(arr[a],"+",arr[b],"+",arr[c],"+",arr[d],"=",arr[a]+arr[b]+arr[c]+arr[d]);
                }
            }
        }
    }
}