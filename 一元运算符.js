// var a = 123
// a = +a
// console.log(a) // 123

// var b = 123
// b = -b
// console.log(b) // -123

// var c = 123
// c = true
// c = -c
// console.log(typeof c) // number
// console.log(c) // -1

// function isOu(num) {
//     return num % 2 === 0
// }

// // console.log(isOu(100))

// function test(x) {
//     console.log(x);
//     return x + 1
// }

// console.log(test(isOu(100)));

// function fun3() {
//     function fun4() {
//         console.log("我是fun4")
//         return null
//     }
//     return fun4
// }

// console.log(fun3()())

var obj = {
    name: "AK-103",
    age: 22,
    gender: "male"
}

for(var e in obj){
    console.log(e);
}
