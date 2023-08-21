// 举例说明

var a = 10

function test() {
    var b = 2
    console.log(a + b)
}

test()

/* 
当代码执行时：会产生两个上下文：
（1）全局执行上下文（包含全局的变量对象）（Global Execution Context）
（2）test函数执行上下文（Function Excution Context），这个上下文中的变量对象只有一个b变量
 */
