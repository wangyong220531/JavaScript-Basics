// call()、apply()和bind()都是JS中函数的方法，用于改变函数体内this的指向/函数的执行上下文

function greet() {
    console.log(this.name)
}

const obj = { name: "AK-103" }

greet.call(obj) // AK-103
