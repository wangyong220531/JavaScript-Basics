// 如果构造函数没有返回值，会将新创建的实例对象返回

// 举例说明

function Person(name, age) {
    this.name = name
    this.age = age
}

const p = new Person()

/* 
   具体执行过程如下：
   （1）创建一个空对象p
   （2）将this和arguments绑定到p上
   （3）执行构造函数内部代码
   （4）构造函数无返回值，将p作为结果返回
 */

// 如果构造函数有返回值，则该返回值会将new创建的对象实例覆盖

function Person(name, age) {
    this.name = name
    this.age = age
    return {
        sex: "male",
        role: "刺客"
    }
}

const q = new Person()

console.log(q) // { sex: 'male', role: '刺客' }
