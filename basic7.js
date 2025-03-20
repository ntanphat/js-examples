module.exports = class Person{
    age = 25
    get location(){ //getter
        return "vietnam"
    }

    //constructor
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
        console.log(this.firstName+this.lastName)
    }
}

// let person = new Person("Felix","Nguyen")
// console.log(person.age)
// console.log(person.location)
// //person.fullName()
// console.log(person.fullName())

// let person2 = new Person("John","Dude")
// person2.fullName()