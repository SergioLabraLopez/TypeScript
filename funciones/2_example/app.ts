// let combineValues: (a: number, b: number) => number;
// para hacer una función que siempre tenga ese formato
let combineValues: Function;

function add(a: number, b: number = 1): number {
    return a + b;
}

function sayHello() {
    console.log("hola")
}

let user = "Bob";
if ( user === "Pep"){
combineValues = add;
} else{
    combineValues = sayHello
}

combineValues(1, 2) 