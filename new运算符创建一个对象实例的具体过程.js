// 举例说明
function Person() {
    this.name = name
}

const p = Person()

/* 
（1）第一步：创建一个新的空对象p
（2）第二步：将这个空对象的proto指向构造函数的prototype
（3）第三步：将this和arguments绑定到这个新对象p上
（4）第四步：执行构造函数内部代码
（5）第五步：如果没有返回值，将p返回
*/
