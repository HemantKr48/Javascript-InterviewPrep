let name1={
    firstName:"Akshay",
    lastName:"Saini"
}

let printFullName=function(hometown,state){
    console.log(this.firstName + " " + this.lastName + " from " + hometown + state);
}

printFullName.call(name1,"Dehradun","Uttarakhand");

//Function borrowing then we will use call method

let name2={
    firstName:"Hemant",
    lastName:"Kumar"
}

printFullName.call(name2,"Gaya","Bihar");

//In apply method, arguments will be passed in list
printFullName.apply(name2,["Gaya","Bihar"]);

//Bind method is just like call but it binds first then we can call it later
//Mainly it gives you a copy and we can invoke it later.
let printMyName=printFullName.bind(name2,"Gaya","Bihar");
console.log(printMyName);//this will be function
printMyName();

