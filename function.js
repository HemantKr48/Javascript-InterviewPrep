//what are functions?

//function declaration
//function statement or function definition
// function sum(num) {
//     return num + num;
// }

//function expression
// const square = function (num) {
//     return num * num;
// }
// console.log(square(5));

//What are first class functions?
// function square(num) {
//     return num * num;
// }

// function displaySquare(fn) {
//     console.log("square is", fn());
// }
// displaySquare(square);

//IIFE(Immediately Invoked Function Expression)
// (function square(num) {
//     return num * num;
// }(5));

//Output Based questions (IIFE)

(function (x) {
    return (function (y) {
        console.log(x);//1  due to closure
    })(2);
})(1);


//question 1
//Function scope //VVVI
// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }

// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000)
// }

//Hoisting output based questions
//when we will have that variable in local scope then we will not check in global scope.
// var x=21;
// var fun=function (){
//     console.log(x);
//     var x=20;
// }

// fun();

//Params vs arguments
// function square(num){ //num is params
//     console.log(num*num);
// }
// square(5);//5 is argument

//Rest operator and Spread operator
// function square(...nums) { //rest operator
//     console.log(nums[0] * nums[1]);
// }
// var arr = [5, 6];
// console.log("rest", square(...arr));//spread operator

//Params and args output based question
//Q11

// const fn = (a, x, y, ...numbers) => { //Rest Params must be last params
//     console.log(x, y);
// }

// fn(5, 6, 3, 7, 8, 9);

//this output based question
let user = {
    username: "Roadside coder",
    rc1: () => {
        console.log("come" + this.username);
    },

    rc2() {
        console.log("come" + this.userame);
    }
}

user.rc1();
user.rc2();
