// function Person() {
//     console.log(arguments) // Arguments(2) ['AK-103', 22, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// }

// const p = new Person("AK-103", 22)

// const foo = () => {
//     console.log(arguments) // arguments is not defined
// }

// foo(1, 2, 3, 4)

const foo = (x, y, ...rest) => {
    console.log(x, y, rest) // 1 2 [ 3, 4 ]
}

foo(1, 2, 3, 4)
