let day = 'tuesday'
console.log(day.length) //8
console.log(day.slice(0,4)) //tues
console.log(day[1]) //u
//split: tue  day
let splitDay = day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length) //day

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
console.log(diff.toString())

let newQuote = day + " is funday"
console.log(newQuote)
let val = newQuote.indexOf("day")
console.log(val)

//count number of "day"
let count = 0
val = newQuote.indexOf("day")
while(val!==-1){
    count++
    val = newQuote.indexOf("day",val+1)
}
console.log(count)
//==========================
const Person = require('./basic7')
let person = new Person("Mickey","Mouse")
console.log(person.firstName)
person.fullName()