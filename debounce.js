//debouncing in js //This method is also used in scrolling event
let counter = 0;
const getData = () => {
    //calls an api and get data
    console.log("Fetch Data...", counter++);
}

const doSomeMagic = function (fn, d) {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments);
        }, d);
    }
}

const betterFunction = doSomeMagic(getData, 300);