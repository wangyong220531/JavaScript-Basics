function Person(name) {
    this.name = name
}

const p = new Person("AK-103")

console.log(p.name) // AK1-103

Person.prototype.sayHello = function () {
    console.log("Hello")
}

p.sayHello() // Hello 继承自其原型的方法

console.log(p.toString()) // [object Object] 继承自Object的方法

// 解析：p通过原型链继承了Person.prototype和Object.prototype上的属性和方法
