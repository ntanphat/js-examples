var marks = Array(6)
var marks = new Array(20,40,35,55,100,200)

var marks = [20,40,35,55,100,200]
console.log(marks[0]) //20

marks[3] = 14 //55
console.log(marks)
console.log(marks.length) //6

marks.push(65)
console.log(marks)

marks.pop()
console.log(marks)

marks.unshift(12)
console.log(marks)

console.log(marks.indexOf(100))

//Verify number in the array or not
console.log(marks.includes(120))

//sub-array
console.log(marks.slice(2,5))
subArr = marks.slice(2,5)
console.log(subArr)

var sum=0
for(let i=0; i<marks.length; i++){
    //console.log(marks[i])
    sum += marks[i]
}
console.log(sum)

//reduce filter map
let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)

var scores = [12,13,14,16]
//create new array with even numbers of the scores array
var evenScores = []
for(let i=0; i<scores.length; i++){
    if(scores[i]%2==0){
        evenScores.push(scores[i])
    }
}
console.log(evenScores)
let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)

//map
//create new array with even numbers of the scores array and multiply with 3
let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)
let totalVal = mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)

//write in one line
var scores1 = [12,13,14,16]
console.log(scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0))

let fruits = ["banana","mango","pomegrante","apple"]
console.log(fruits.sort())
console.log(fruits.reverse())

var scores1 = [12,003,19,16,14]
// console.log(scores1.sort())
// scores1.sort(function(a,b){
//     return a-b
// })
console.log(scores1.sort((a,b)=>a-b))
console.log(scores1.sort((a,b)=>b-a))