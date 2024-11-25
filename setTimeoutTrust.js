console.log("start");

setTimeout(() => {
    console.log("Callback")
}, 5000);

//millions line of code

let startDate = new Date().getTime();
console.log(startDate);
let endDate = startDate;

while (endDate < startDate + 10000) {

    endDate = new Date().getTime();
}

console.log("end");