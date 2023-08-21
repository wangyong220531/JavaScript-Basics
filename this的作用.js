// this的作用主要有：
// （1）引用函数所属对象的属性和方法

const obj = {
    name: "AK-103",
    printName() {
        console.log(this.name)
    }
}

obj.printName() // AK-103

// （2）确定在事件处理函数中触发该事件的DOM元素

/* 
   <button>按钮</button>
   <script type="text/javascript">
      const btn = document.querySelector("button")
      btn.addEventListener("click", function(){
          console.log(this) // <button>
      })
   </script>
 */
