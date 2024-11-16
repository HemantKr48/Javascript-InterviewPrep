//this keyword in javascript (Implicit Binding)
//Explain this javascript?

// this.a=5;
// console.log(this.a);


//function
// this.a=5;
// function getParam(){
//     console.log(this.a);
// }

// getParam();

//Arrow Function 
//Normal function and arrow function has same behaviour
// this.a=5;
// const getParam=()=>{
//     console.log(this.a);
// }

// getParam();

//Inside an Object //Normal function will point only to  its immediate parent
// let user={
//     name:"Hemant",
//     age:24,
//     getDetails(){
//         console.log(this.name);
//     }
// }

// user.getDetails();

// let user = {
//     name: "Hemant",
//     age: 24,
//     childObject: {
//         newName: "Anshu",
//         getDetails() {
//             console.log(this.name,this.newName);
//         }
//     }

// }

// user.childObject.getDetails();

//Arrow function inside object(Exception VVI) 
// let user = {
//     name: "Hemant",
//     age: 24,
//     getDetails: () => {
//         console.log(this);
//     }
// }

// user.getDetails();

// Arrow function inside normal function(This arrow function inside normal fn will point to its immediate parent)
// let user = {
//     name: "Hemant",
//     age: 24,
//     getDetails() {
//         const nestedArrow=()=>console.log(this.name);
//         nestedArrow();
//     }
// }

// user.getDetails();

//this in class
class user {
    constructor(n){
        this.name=n;
    }

    getName(){
        console.log(this.name);
    }
}

const User= new user("Hemant");
User.getName();



