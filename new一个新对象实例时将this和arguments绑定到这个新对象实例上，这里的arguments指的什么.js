// 在使用new运算符创建一个对象实例时，会将this和arguments绑定到新创建的对象实例上

// arguments指的是构造函数的参数数组，也就是调用new时传递给构造函数的参数

function Person(name, age) {
    console.log(this) // Person{}
    console.log(arguments) // Arguments["AK-103",22]
}

const p = new Person("AK-103", 22)
