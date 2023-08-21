var a = 1

function foo() {
    var b = 2

    function bar() {
        var c = 3
        console.log(a, b, c) // 1 2 3
    }

    bar()
}

foo()

/* 
   对于bar函数来说，它的作用域链是：
   bar作用域 -> foo作用域 -> 全局作用域
 */
