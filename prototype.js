// prototype是函数才具有的一个属性（对象类型），它用来实现基于原型的属性或方法的继承与共享

// 属性或方法的继承举例：
function Animal(name) {
    this.name = name
}

Animal.prototype.eat = function () {
    console.log(`${this.name} is eating`)
}

function Dog(name) {
    this.name = name
}

Dog.prototype = new Animal()

const dog = new Dog("Machine")

dog.eat()


