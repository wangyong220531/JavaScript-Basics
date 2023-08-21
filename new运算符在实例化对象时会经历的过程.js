// 举例说明
function Person() {
    this.name = name
}

const p = Person()

/* 
（1）第一步：创建一个新的空对象p
（2）第二步：p对象被链接到Person.prototype对象上
（3）第三步：this被绑定新对象p
（4）第四步：函数体执行p，对象被赋予name属性
*/
