//closure
//lexical scope:It means a variable defined outside a function can be accessible inside of anothe fn but the opposite is not true.

//global scope
function subscibe(){
    //inner scope 2
    var name="subscribe coder";
    function displayName(){
        //inner scope
        alert(name);
    }
    displayName();
}

subscibe();

//Read mdn docs
//quest1

let count=0;
(function printCount(){
    if(count==0){
        let count=1;//shadowing
        console.log(count);
    }
    console.log(count);
})();

//Ques 2: Write a function that would allow you to do this

function createBase(num){
    return function addSix(innerNum){
        console.log(num+innerNum);
    }
}

var addSix=createBase(6);
addSix(10);//returns 16
addSix(21);//returns 27


//Quest 3
//Time Optimisation
//Again see the video as I was not able to understand
function find(index){
    let a=[];
    for(let i=0;i<1000000;i++){
        a[i]=i*i;
    }
    console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");
console.log("12");
find(12);
console.timeEnd("12");


//Block scope and setTimeout
for(var i=0;i<3;i++){
    setTimeout(function log(){
        console.log(i);
    },1000);
}