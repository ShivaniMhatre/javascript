// VAR Keyword

// myName="shivani";//assign
// myName="sameer" //reassign is possible
// var myName="mhatre"// redeclare is possible
// console.log(myName);
// var myName;//hoisting is applicable
//In Var keyword - There is hoisting method reassign redeclare all are possible


// LET Keyword
// let myAge;
// myAge=24;//assign
// myAge=25;//reassign is possible
// let myAge=26;//redeclare not possible 
// console.log(myAge)
// In LET keyword - There is only reassign is possible but redeclare and hoisting both are not possible 

//CONST Keyword
// const myCity="Mumbai";//assign
// myCity="pune"//reassign not possible
// const myCity="pune"//redeclare not possible
// console.log(myCity)
//In CONST Keyword - There is reassign redeclare and hoisting all are not possible,and assign the value whenever you declare 


function outter() {
    var myMarks = 90;
    console.log("Inside Outter Function");
    function inner() {
        console.log("Inside Inner Function", myMarks);
    }
    return inner;
}

const res = outter()
console.log(res())
// res ke andar function store hoga with value

// var myFun=(props)=>{
//     console.log(props)
// }
// myFun("shivani")

// var myFun=props=>console.log(props)
// myFun("Hi")

// var myFun=(props1,props2)=>{
//     console.log(props2,props1)
// }
// myFun("Shivani","Sameer")