//  __proto__是每个JavaScript对象（除null外）都会有的一个属性，该属性指向该对象的原型、

function Person(name) {
    this.name = name
}

const p = new Person("AK-103")
console.log(p);

console.log(p.__proto__ === Person.prototype) // true
