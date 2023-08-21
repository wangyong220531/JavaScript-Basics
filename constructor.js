// constructor是原型（prototype）的一个属性

// constructor指向该原型关联的构造函数

function Person() {}

console.log(Person.prototype.constructor === Person) // true
