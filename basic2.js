const flag = true

if (!flag) {
    console.log("condition satisfied")
} else {
    console.log(flag)
    console.log("condition not satisfied")
}

let i = 0
while (i < 5) {
    i++
    console.log(i)
}

do {
    i++
} while (i<5);
console.log(i)

console.log("start for loop")
for (let index = 0; index < 10; index++) {
    console.log(index)
}

//from 1 to 10 give common multiple values of 2 and 5
for(let i=1; i<=10; i++){
    if(i%2 == 0 && i%5 == 0){
        console.log("The number from 1 to 10 is multiple values of 2 and 5: " + i)
    }
}