//var vs let vs const
//Scope

// {
//Block Scope
// }

// const a=5;
// console.log(a);

// Variable Shadowing
//1st example 
// function test(){
//     let a="Hello";

//     if(true){
//         let a="hi";
//         console.log(a);
//     }

//     console.log(a);
// }

// test();

//2nd Example(We can shadow var by using let but reverse is not true )
// function test(){
//     var a="Hello";
//     let b="Bye";

//     if(true){
//         let a="Hi";
//         var b="Goodbye";
//         console.log(a,b);
        
//     }
// }

// test();


//Hoisting

function abc(){
    console.log(a);

    var a=10;
}
abc();

