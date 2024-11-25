let name1={
    firstName:"Hemant",
    lastName:"Kumar"
}

let printFullName=function(){
    console.log(this.firstName+ " " + this.lastName);
}

//like this bind method, I want to make my own mybind method
let printMyName=printFullName.bind(name1);
printMyName();

Function.prototype.mybind=function(...args){
    //this->printFullName
    let obj=this;
    params=args.slice[1];
    return function(){
        obj.apply(args[0],params);
    }
}

let printMyName2=printFullName.mybind(name1);
printMyName2();