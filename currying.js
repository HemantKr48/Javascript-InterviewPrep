//Currying
//Example of f(a,b) into f(a)(b)


//1st Example
// function f(a) {
//     return function f(b) {
//         console.log(a, b);
//     }
// }

// console.log(f(5)(6));


//2nd Example
//why should we use currying
//Currying- Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).

//Read from link-https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more

//1st question-sum(2)(6)(1)

// function sum(a){
//     return function(b){
//         return function(c){
//             return (a+b+c);
//         }
//     }
// }
// console.log(sum(2)(6)(1));

//question2
//evaluate("sum")(4)(2)
//evaluate("multiply")(4)(2)
//evaluate("divide")(4)(2)
//evaluate("subtract")(4)(2)

// function evaluate(operation){
//     return function(a){
//         return function(b){
//             if(operation=="sum") return a+b;
//             else if(operation=="multiply") return a*b;
//            else if(operation=="divide") return a/b;
//            else if(operation=="subtract") return a-b;
//            else return "Invalid Operation";
//         }
//     }
// }

// const mul=evaluate("multiply");

// console.log(mul(4)(2));


//Infinite Currying Sum
//sum(1)(2)(3)....(n)
// How you will implement console.log(add(5)(4)(2)(5)());

// function add(a){
//     return function(b){
//         if(b) return add(a+b);
//         return a;
//     }
// }

// console.log(add(5)(4)(2)(5)());

//Currying vs Partial Application

//Partial Application
// function sum(a){
//     return function(b,c){
//         return a+b+c;
//     }
// }
// console.log(sum(5)(6,7));

//Question 5 
//Practical use of Currying in Manipulating DOM


function updateElementText(id){
    return function(content){
        document.querySelector("#"+id).textContent=content;
    }
}

const updateHeader=updateElementText("header");
updateHeader("Hello Rajvikram");

//Implement Curry
//See the code again and again I was not able to understand.
