//object is collection of properties

let person = {
    firstName:'Felix',
    lastName:'Nguyen',
    age: 31,
    fullName: function(){
        console.log(this.firstName+this.lastName)
    }
}

console.log(person.firstName)
console.log(person['lastName'])
console.log(person.fullName())

person.firstName = 'John'
console.log(person.firstName)

person.gender = 'male'
console.log(person)

delete person.gender
console.log(person)

console.log('gender' in person)

for(let key in person){
    console.log(key)
    console.log(person[key])
}