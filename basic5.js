let day = 'tuesday '
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