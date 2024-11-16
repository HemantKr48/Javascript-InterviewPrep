//map,filter,reduce


//filter syntax
// const nums=[1,2,3,4];
// //i is the index of each element and arr is nums
// const moreThanTwo=nums.filter((num,i,arr)=>{
//     return num>2;
// })

// console.log(moreThanTwo);

//reduce
// const nums=[1,2,3,4];

// const sum=nums.reduce((acc,curr,i,arr)=>{
//     return acc+curr;
// },0);

// console.log(sum);

// //Polyfill for map()
// Array.prototype.myMap=function(cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i],i,this));
//     }

//     return temp;
// }

// //Polyfill for filter
// Array.prototype.myFilter=function(cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//        if(cb(this[i],i,this)){
//         temp.push(this[i])
//        }
//     }

//     return temp;
// }

// //Polyfill for reduce
// Array.prototype.myReduce=function(cb){
//     var accumulator=initialValue;

//     for(let i=0;this.length;i++){
//         accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];
//     }

//     return accumulator;
// }

//Output based question
//Question 1: Return only name of students in capital
let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Hemant", rollNumber: 15, marks: 90 },
    { name: "Anshu", rollNumber: 20, marks: 45 },
    { name: "Ronik", rollNumber: 78, marks: 55 }
];

let studentsInfo = students.map((st) => {
    return st.name.toUpperCase();
})

console.log(studentsInfo);

//Question 2 : Return only details of those who scored more than 60 marks
let studentsmore60 = students.filter((st) => {
    return st.marks > 60;
})

console.log(studentsmore60);

//sum of marks of all students
let totalmarks = students.reduce((acc, st) => {
    return acc + st.marks;
}, 0)

console.log(totalmarks);

//Return only names of students who scored more than 60]
let names = students.filter((st) => {
    return st.marks > 60;
}).map((st) => st.name);

console.log(names);


//Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
let stmore60 = students.filter((st) => st.marks < 60).map((st) => st.marks + 20);
console.log("stmore60", stmore60);
let marks1 = stmore60.filter((m) => m > 60).reduce((acc, m) => {
    return acc + m
}, 0)
console.log("stud", marks1);

let marks2=students.filter((st)=>st.marks>60).map((st)=>st.marks).reduce((acc,m)=>{
    return acc+m;
},0);
console.log("marks2",marks2);

let totalMarks=marks1+marks2;

console.log("totalMarks",totalMarks);
