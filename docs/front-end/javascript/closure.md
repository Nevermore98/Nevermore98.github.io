---
icon:
title: 闭包
---

## 定义

闭包是一种函数内部可以访问到外部自由变量的语法特性，在头等函数（函数是一等公民）的编程语言中都支持。

变量分为：

1. 全局变量：在全局定义的变量，所有作用域都可以访问
2. 局部（本地）变量：在某个函数内部定义的变量，只能在当前**函数**作用域及其子作用域访问
3. 自由变量：既不是全局变量也不是某函数的局部变量就是自由变量，只能在当前作用域及其子作用域访问

闭包 = 函数 + 自由变量

```js:no-line-numbers
let global = 'global' // 全局变量
{
  let free = 'free' // 自由变量
  function foo() {
    let local = 'foo local' // foo 的局部（本地）变量
    console.log(free) // free
    console.log(local) // foo local
    console.log(global) // global

    function bar() {
      console.log(free) // free
      console.log(local) // foo local
      console.log(global) // global
    }
    bar()
  }
}
foo()
// console.log(free) // free is not defined
// console.log(local) // local is not defined
```

## 应用

声明一个变量等于一个立即执行函数，在函数内定义一个变量，并返回一个引用了该变量的函数

```js:no-line-numbers
const foo = function () {
  let n = 'foo n'
  return function bar() {
    console.log(n)
  }
}()
foo()
```

## 作用

1. 隐藏数据，实现私有成员（变量或方法），只提供对外的接口

```js:no-line-numbers
function createCache() {
  const data = {} // 闭包中被隐藏的数据，外界无法访问
  // 返回一个有 getter 和 setter 的对象
  return {
    set: (key, val) {
      data[key] = val
    },
    get: function (key) {
      return data[key]
    }
  }
}

const cache = createCache()
cache.set('age', 22)
console.log(cache.get('age')) // 22
```

2. 在内存中维持变量。（废话，对于需要用到的变量，垃圾回收机制本应维持该变量）对于普通函数执行后销毁内部作用域

3. 避免全局污染（废话，因为用的就是局部变量）

## 内存泄露谣言

内存泄漏：系统进程不再用到的内存，没有及时释放或被回收

闭包不会造成内存泄漏，老浏览器（主要是 IE6）由于垃圾回收的 bug，导致容易出现内存泄漏。

滥用闭包才会造成内存泄漏，因为闭包包含其父函数的作用域，比普通函数占有更多的内存空间。
