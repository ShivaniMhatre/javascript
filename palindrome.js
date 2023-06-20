// let value = 9099;
// const myRev = () => {
//     let rev = value.toString().split("").reverse().join("")
//     let val = value.toString();
//     if (val == rev) {
//         console.log("It is Palindrome");
//     }
//     else {
//         console.log("It is Not a Palindrome");
//     }
// }
// myRev()


// let nums = [1, 2, 3, 4,5]
// k = 3
// function maximizeSum(nums,k) {
//     let max = Math.max(...nums);
//     console.log(max)
//     // sum = max;
//     for (let i = 0; i < k; i++) {
//         sum += max + i;
//         // console.log(sum)
//     }
//     return sum;
// }
// console.log(maximizeSum(nums,k))


var nums1=[1,2,3];
var nums2=[2,4,6];
var m;
var n;
var merge = function(nums1, m, nums2, n) {
    let n2 = n;
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[n2 - 1];
        while (n2 < 0) {
            return;
        }
        n2--;
    }
    nums1.sort((a, b) => a - b);
};
console.log(merge(nums1,m,nums2,n))