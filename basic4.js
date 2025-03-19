//block of code
//var - global level / functional
//let - global leve / block level {}
//const - 
//var greet = "evening"
const greet = "evening"
//greet = "night"

if(1==1){
    //var greet = "afternoon"
    let greet = "afternoon"

}

function add(a, b){
    //var greet = "morning"
    let greet = "morning"
    return a + b
}

let sum = add(2,3)
console.log(sum)
console.log(greet)

//do not have name => Anonymous function -- Function expressions
let sumOfIntegers = function (c,d){
    return c+d
}

let sumOfNumbers = (c,d)=>c+d

console.log(sumOfIntegers(2,3))
console.log(sumOfNumbers(2,3))