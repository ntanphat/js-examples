//Inheritance is the main pillar in OOP
//One class can inherit/ acquire the properties, methods of another class
//The class which inherits the properties of other is known as subclass (derived class, child class)
//The class whose properties are inherited is known as superclass
const Person = require('./basic7')
class Pet extends Person{
    get location(){
        return "HoChiMinh"
    }

    constructor(firstName, lastName){
        //call the parent constructor
        super(firstName,lastName)
        // this.firstName = firstName
        // this.lastName = lastName
    }
}

let pet1 = new Pet("Pig","Ls")
pet1.fullName()
console.log(pet1.location)