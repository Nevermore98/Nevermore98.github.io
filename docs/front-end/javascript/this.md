---
title: this 指向
---

## 1.默认绑定

自执行函数，作为独立函数被调用（默认是挂载到 window 上所以是 window 调用）??

非严格模式下：this 指向 window 对象

严格模式下：this 为 undefined

浏览器会擅自把未明确指明调用者的函数由 `undefined` 改为 `window`，可以使用 `'use strict'` 告诉浏览器严肃点，别瞎改。

```js:no-line-numbers:no-line-numbers
// 案例一：
function foo() {
  console.log(this)
}

foo() // window

// 案例二：
function foo1() {
  console.log(this) // window
}

function foo2() {
  console.log(this) // window
  foo1()
}

function foo3() {
  console.log(this) // window
  foo2()
}

foo3()


// 案例三：
var obj = {
  name: "nevermore",
  foo: function() {
    console.log(this)
  }
}

var bar = obj.foo
bar() // window


// 案例四：
function foo() {
  console.log(this)
}
var obj = {
  name: "nevermore",
  foo: foo
}

var bar = obj.foo
bar() // window

// 案例五：
function foo() {
  function bar() {
    console.log(this)
  }
  return bar
}

var fn = foo()
fn() // window

// 案例六：
function foo(func){
  func()
}
var obj = {
  name: "nevermore",
  bar: function(){
    console.log(this)
  }
}
foo(obj.bar) // window
```

## 2.隐式绑定

作为对象的方法被调用

案例一：

```js:no-line-numbers
var obj = {
  name: 'obj',
  foo: function() {
    console.log(this)
  }
}
obj.foo() // {name: 'obj', foo: ƒ}
```

案例二：

```js:no-line-numbers
var obj1 = {
  name: "obj1",
  foo: function() {
    console.log(this)
  }
}

var obj2 = {
  name: "obj2",
  bar: obj1.foo
}

obj1.foo() // {name: 'obj1', foo: ƒ}
obj2.bar() // {name: 'obj2', bar: ƒ}

// bar 只是保存了 obj1.foo 函数的地址
// obj2 调用了这个地址上的函数
// 另见 规则之外：间接函数引用
```

案例三：

```js:no-line-numbers
var obj = {
  foo: function(){
    console.log(this)
  }
}

var bar = obj.foo // bar 保存 obj.foo 函数的地址
obj.foo() // 转换为 obj.foo.call(obj)，this 就是 obj
bar() // window 独立函数调用

```

案例四：（刁钻）

```js:no-line-numbers
let arr = [0, function(){console.log(this)}, 2]
arr[1]() // [0, ƒ, 2] 即 arr
// 可假想为 arr.1() => arr.1.call(arr)
```

## 3.显式绑定

bind、call、apply 显式绑定调用者

> 三个都是显式地指定函数的调用者。
bind 绑定 this，返回一个函数，但不执行函数。
call 绑定 this 并立即执行函数，参数为一个个值。
apply 绑定 this 并立即执行函数，参数为参数列表伪数组。

```js:no-line-numbers
function foo() {
  console.log(this)
}

foo.bind(window)() // window
foo.bind({ name: 'obj' })() //{name: 'obj'}
foo.bind(123)() // Number {123}
foo.bind('123')() // String {'123'}
// 等价于
foo.call(window)
foo.call({ name: 'obj' })
foo.call(123)
foo.call('123')
// 等价于
foo.apply(window)
foo.apply({ name: 'obj' })
foo.apply(123)
foo.apply('123')
```

```js:no-line-numbers
// 解决了上面案例三的问题
const obj = {
  name: 'obj',
  add: function(x, y) {
    console.log(x + y, this)
  }
}

const myAdd = obj.add.bind(obj) // 中间变量指向这个函数，再显式绑定 obj
myAdd(1, 1) // 2 {name: 'obj', add: ƒ}
// 上面两句等价于下面一句
obj.add.bind(obj)(1, 1) // 立即执行函数

obj.add.call(obj, 2, 2) // 4 {name: 'obj', add: ƒ}

obj.add.apply(obj, [3, 3]) // 6 {name: 'obj', add: ƒ}
```

## 4.new 绑定

作为类的方法被调用

指向 new 创建的实例对象

使用new关键字来调用函数是，会执行如下的操作：

1. 在内存中创建一个空的临时对象
2. 将这个临时对象的隐式原型 `[[Prototype]]` 指向构造函数显式原型 `prototype`
3. 绑定 `this` 到这个临时对象上
4. 执行构造函数内部的代码（给新对象添加属性）
5. 返回这个临时对象

```js:no-line-numbers
// ES5
function Person(name) {
  this.name = name
  this.fn = function () {
    console.log(this)
  }
}
var person = new Person('nevermore')
person.fn() // Person {name: 'nevermore', fn: ƒ}

// ES6
class Person {
  constructor(name){
    this.name = name
  }
  fn(){
    console.log(this)
  }
}
const person = new Person('nevermore')
person.fn() // Person {name: 'nevermore'} 没有 fn

// 使用 new 调用对象的方法
var obj = {
  name: 'obj',
  fn: function () {
    console.log(this)
  },
}

// new 绑定的优先级高于隐式绑定
var f = new obj.fn() // fn {}
```

## 5.箭头函数

[详解箭头函数和普通函数的区别以及箭头函数的注意事项、不适用场景](https://juejin.cn/post/6844903801799835655#heading-13)

[ES6 系列之箭头函数](https://juejin.cn/post/6844903616231260174#heading-3)

1.没有`prototype`(原型)，所以箭头函数本身没有 `this`、`super`

```js:no-line-numbers
let a = () =>{};
console.log(a.prototype); // undefined
```

2.如果箭头函数被非箭头函数包含，this 指向 **定义时所在的** 最近一层**非箭头函数**（即上层作用域），与调用位置无关。如果箭头函数外层没有普通函数（即上层作用域为全局），严格模式和非严格模式下它的 this 都会指向 `window`

```js:no-line-numbers
let a // 声明全局变量 a

let obj1 = { name: 'obj1' }
fn1.call(obj1)

let obj2 = { name: 'obj2' }
fn2.call(obj2)

function fn1() {
  a = () => {
    console.log(this.name) // 'obj1'
  } // 在 fn1 中将箭头函数赋值给 a
}

function fn2() {
  a() // 在 fn2 中 调用全局变量 a 所指向的箭头函数 
}
```

上面说到，**this 值只有在函数执行时才能确定调用者，而不是在函数定义时确定**，箭头函数就是要打破这一规则，方便开发，比如在 setTimeout 中使用箭头函数：

```js:no-line-numbers
const name = 'window' // 挂载到 window 上

// 默认绑定
const obj1 = {
  name: 'obj1',
  delay() {
    setTimeout(function() {
      console.log(this.name)
    }, 0) // setTimeout 传入普通函数，则是独立函数调用，指向 window
  }
}
obj1.delay() // 'window'

// 箭头函数外层有普通函数
const obj2 = {
  name: 'obj2',
  delay() {
    setTimeout(() => {
      console.log(this.name)
    }, 0)
  }
}
obj2.delay() // 'obj2'

// 箭头函数外层没有普通函数
const fn = () => console.log(this.name)
fn() // 'window'
```

3.没有 `arguments`，可以使用 `rest参数…` 获取参数列表

```js:no-line-numbers
// 普通函数
function fn1(args){
  console.log(arguments)
}
fn1(1,2,3)// [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// rest参数...
let fn2 = (num1, num2, ...args) => {
  console.log(args)
}
fn2(1,2,3,4,5) // [3,4,5]
```

4.不能通过 `call、apply、bind` 改变 `this` 指向

5.不能通过 `new` 调用，箭头函数不能作为构造函数使用，所以也没有 `new.target`

`new.target`是ES6新引入的属性，普通函数如果通过`new`调用，`new.target`会返回该函数的引用。此属性主要：用于确定构造函数是否为new调用的。

6.不支持重命名函数参数，普通函数的函数参数支持重命名

普通函数的函数参数支持重命名，后面出现的会覆盖前面的，箭头函数会抛出错误：

```js:no-line-numbers
function fn1(a, a) {
  console.log(a, arguments) // 2 [1,2]
}

let fn2 = (a, a) => {
  console.log(a) // 报错：在此上下文中不允许重复参数名称
}
fn1(1, 2)
fn2(1, 2)
```

## 内置函数的this

1. setTimeout

相当于独立函数调用

```js:no-line-numbers
setTimeout(function () {
  console.log(this) // window
}, 0)
```

2. 监听点击

目标元素

```js:no-line-numbers
const boxDiv = document.querySelector('.box')
boxDiv.onclick = function () {
  console.log(this) // <div class="box"></div>
}

boxDiv.addEventListener('click', function () {
  console.log(this) // <div class="box"></div>
})
```

3. 数组的方法forEach、map、filter

可以自己指定

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220402021324.png)

```js:no-line-numbers
var nums = [1, 2, 3]
var obj = { name: 'obj' }

nums.forEach(function (item) {
  console.log(item, this)
}, obj)
// 1 {name: 'obj'}
// 2 {name: 'obj'}
// 3 {name: 'obj'}

nums.map(function (item) {
  console.log(item, this)
}, obj)
// 1 {name: 'obj'}
// 2 {name: 'obj'}
// 3 {name: 'obj'}
```

```js:no-line-numbers
function foo() {
  console.log(this)
}

var obj = {
  name: 'obj',
  foo: foo.bind('aa')
}

obj.foo() // String {'aa'}
```

2.new 绑定高于隐式绑定

```js:no-line-numbers
var obj = {
  name: 'obj',
  foo: function () {
    console.log(this)
  }
}

var f = new obj.foo() // foo {}
```

3.new 绑定高于显式绑定

```js:no-line-numbers
// 结论: new 不能和 apply/call 一起使用

// new 的优先级高于 bind
function foo() {
  console.log(this)
}

var bar = foo.bind('aa')

var obj = new bar() // foo {}
```

4.bind 高于 call

有点反常理，理应后面覆盖前面。

bind 后就不能再更改绑定了。

```js:no-line-numbers
function foo() {
  console.log(this)
}
foo.bind('aa').call('bb') // String {'aa'}

// foo.call('aa').bind('bb') 报错：call 绑定后执行返回 undefined，无法 bind
```

## 特殊规则

1.忽略显式绑定

apply、call、bind: 当传入null/undefined 时，自动将  this  绑定成全局对象 window

```js:no-line-numbers
function foo() {
  console.log(this)
}
foo.apply('a') // String {'a'}

// 以下均输出 window
foo.bind(null)()
foo.bind(undefined)()
// 上面一行等价于下面两行
var temp = foo.bind(undefined)
temp()

foo.call(null)
foo.call(undefined)

foo.apply(null)
foo.apply(undefined)
```

2.间接函数引用

```js:no-line-numbers
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this)
  },
}

var obj2 = {
  name: 'obj2',
}

obj1.foo() // {name: 'obj1', foo: ƒ}

obj2.bar = obj1.foo
obj2.bar() // {name: 'obj2', bar: ƒ}

;(obj2.bar = obj1.foo)() // window
// 赋值表达式 (obj2.foo = obj1.foo) 的结果是 obj1 的 foo 函数
// foo 函数被 window 直接调用，默认绑定
```

## 面试题

this 即当前函数所在的作用域？

区分：代码块与对象字面量。代码块有块级作用域，对象无作用域。

```js:no-line-numbers
{
  
}
let obj1 = {}

let obj2 = {
  name: 'obj2',
  foo: function () {
    console.log(this) // {name: 'obj2', foo: ƒ}
    // foo 所在的作用域是 obj2
    // foo 上层作用域是全局
  },
}
obj2.foo()

function Person() {
  this.foo = function() {
    console.log(this) // Person {foo: ƒ}
  }
}
let person1 = new Person()
person1.foo()
```

### 面试题一

```js:no-line-numbers
var name = 'window'

var person = {
  name: 'person',
  sayName: function () {
    console.log(this.name)
  }
}

function sayName() {
  var foo = person.sayName
  foo() // window: 独立函数调用
  person.sayName() // person: 隐式调用
  (person.sayName)() // person: 隐式调用
  ;(b = person.sayName)() // window: 赋值表达式(独立函数调用)
}

sayName()
```

### 面试题二

通过对象字面量创建对象，字面量是一种语法糖。

对象没有作用域

作用域链：全局→

```js:no-line-numbers
var name = 'window'

var person1 = {
  // this {name: 'person1', foo1: ƒ, foo2: ƒ, foo3: ƒ, foo4: ƒ}
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    console.log(this) // {name: 'person1', foo1: ƒ, foo2: ƒ, foo3: ƒ, foo4: ƒ}
    return () => {
      console.log(this.name)
    }
  },
}

var person2 = { name: 'person2' }

person1.foo1() // person1：隐式绑定
person1.foo1.call(person2) // person2：显示绑定优先级大于隐式绑定

person1.foo2() // window：上层作用域是全局，对象无作用域
person1.foo2.call(person2) // window：箭头函数无法通过 call 更改 this

person1.foo3()() // window：foo3()得到普通函数，再独立函数调用
person1.foo3.call(person2)() // window：foo3 绑定 person2 并执行得到普通函数，再独立函数调用
person1.foo3().call(person2) // person2：foo3()得到普通函数，再显式绑定

person1.foo4()() // person1：箭头函数 this 指向上层作用域 person1
person1.foo4.call(person2)() // person2：foo4 绑定 person2 并执行得到箭头函数，上层作用域为 person2
person1.foo4().call(person2) // person1：foo4()得到箭头函数无法通过 call 更改 this
```

### 面试题三

通过构造函数创建对象

函数有作用域

相比于面试题二，只有 `person1.foo2()` 、`person1.foo2.call(person2)` 输出不同

作用域链：全局→Person（foo1~4所在）

```js:no-line-numbers
var name = 'window'

function Person (name) {
  console.log(this) // Person {}
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    console.log(this) // Person {}
    return () => {
      console.log(this.name)
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() // person1：隐式绑定
person1.foo1.call(person2) // person2：显示绑定优先级大于隐式绑定

person1.foo2() // person1：上层作用域中是 person1，函数有作用域，对象无作用域
person1.foo2.call(person2) // person1：箭头函数无法通过 call 更改 this

person1.foo3()() // window：foo3()得到普通函数，再独立函数调用
person1.foo3.call(person2)() // window：foo3 绑定 person2 并执行得到普通函数，再独立函数调用
person1.foo3().call(person2) // person2：foo3()得到普通函数，再显式绑定

person1.foo4()() // person1：箭头函数 this 指向上层作用域 person1
person1.foo4.call(person2)() // person2：foo4 绑定 person2 并执行得到箭头函数，上层作用域为 person2
person1.foo4().call(person2) // person1：foo4()得到箭头函数无法通过 call 更改 this

```

### 面试题四

相较于面试题三，

作用域链：全局→Person→obj（foo1、foo2所在）→foo1、foo2返回函数

```js:no-line-numbers
var name = 'window'

function Person(name) {
  console.log(this) // Person{}
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      console.log(this) // {name: 'obj', foo1: ƒ, foo2: ƒ}
      return () => {
        console.log(this.name)
      }
    },
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() // window：foo1()得到普通函数，再独立函数调用
person1.obj.foo1.call(person2)() // window：foo1 绑定 person2 并执行得到普通函数，再独立函数调用
person1.obj.foo1().call(person2) // person2：foo1()得到普通函数，再显式绑定

person1.obj.foo2()() // obj：箭头函数 this 指向上层作用域 obj
person1.obj.foo2.call(person2)() // person2：该箭头函数的上层作用域被显式绑定了 person2
person1.obj.foo2().call(person2) // obj：foo2()得到箭头函数无法通过 call 更改 this
```

## 手写 bind

手写 bind

3 个要求：绑定 this、绑定参数、return 无误

```js:no-line-numbers
Function.prototype.myBind = function(caller, ...args) {
  // ES6 扩展运算符把伪数组变为一个个数值
  // 将显式调用者赋值给 fn
  const fn = this
  // 无参数则置空数组
  args = args ? args : []
  // newFnArgs 为 new 绑定的参数
  return function newFn(...newFnArgs) {
    // 因为 new 绑定优先级高于显式绑定，所以需要判断调用者是不是 new 出来的
    if (this instanceof newFn) {
      return new fn(...args, ...newFnArgs)
    }
    return fn.apply(caller, [...args, ...newFnArgs])
  }
}

function fn1(a, b, c) {
  console.log(this)
  console.log(a, b, c)
  return 'fn1 返回值'
}

// bind 绑定后立即执行
const result = fn1.myBind({ x: 100 }, 10, 20, 30)()
console.log(result)
// { x: 100 }
// 10 20 30
// 'fn1 返回值'


// new 绑定
class People {
  constructor(name) {
    this.name = name
    this.age = age
  }
  fn() {
    console.log(this)
  }
}
const person = new People('nevermore', 23)
person.fn.myBind(person)()
// {name: 'nevermore', age: 23}
```
