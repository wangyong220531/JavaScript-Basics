function Person(){
}

Person.prototype.name = "AK-103"

const person = new Person()

person.name = "AK-102"

console.log(person.name); // AK-102

delete person.name
console.log(person.name); // AK-103