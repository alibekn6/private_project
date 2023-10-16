"use strict"

// function declaration 
// function expression
// -> functions


let foo = function() {
    console.log("Hello");
};


function logger(a, b) {
    console.log(a + b);
}



// -> function ->


const calc = (a, b) => {
    a * b
}

calc(1,2)

console.log(calc(5,2));