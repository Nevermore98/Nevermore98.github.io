--- 
  title: JS 编译执行过程
---

## 编译型语言与解释型语言

- 编译型语言：在代码执行前，预编译代码转换成机器语言，每次执行时不用重新编译。编译器生成的目标程序是面向特定平台。
- 解释型语言：不预编译代码，在执行代码前**先解释**转换成机器语言再执行，每次执行时都需要**先逐行解释再逐行运行**。解释器自己执行源程序，不依赖于某一平台。
- 解释型语言的执行速度要慢于编译型语言，但跨平台性好。

比如：最初的 C 和 C++ 都是编译型语言，而最初的 JavaScript 是解释型语言。编译器启动速度慢，执行速度快。而解释器的启动速度快，执行速度慢。不过随着即时编译（Just-in-time compilation，JIT)，一种混合使用编译器和解释器的技术的发展，大部分语言都可以即时编译了。

**现在应尽量避免将编程语言划分为编译型或解释型语言。** 详见[知乎提问](https://www.zhihu.com/question/19608553)

为了提高 JS 的执行效率，浏览器厂商都在不断努力。目前性能最高的 JS 引擎是 V8 引擎，它引入了 Java 虚拟机和 C++ 编译器的众多技术，实现了即时编译，V8 引擎属于 JIT 编译器。

## JS 编译执行过程

1. 编译过程：`Parser` 解析器编译 JS 代码，词法分析 → 语法分析 → 生成 `AST` → 确定作用域 → 生成字节码，
2. 执行过程：`Ignition` 解释器解释执行编译过程生成的字节码。

![](https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220725014621.png)

词法分析生成许多个词法单元 `tokens`

```js:no-line-numbers
let message = 'hi'
```

Tokens

```js:no-line-numbers
[
  {
    type: 'Keyword',
    value: 'let'
  },
  {
    type: 'Identifier',
    value: 'message'
  },
  {
    type: 'Punctuator',
    value: '='
  },
  {
    type: 'String',
    value: "'hi'"
  }
]
```

AST

```js:no-line-numbers
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "message"
          },
          "init": {
            "type": "Literal",
            "value": "hi",
            "raw": "'hi'"
          }
        }
      ],
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```

## 执行上下文

执行上下文栈（ Execution Context Stack，ECStack），又称执行栈、调用栈。将上下文压入栈中执行，执行完毕则将上下文弹出栈。

执行上下文有三种：

- 全局执行上下文（Global Execution Context，GEC）：代码运行会首先进入该环境
- 函数执行上下文（Function Execution Context，FEC）：当函数被调用执行时，会进入当前函数中执行代码
- eval（不建议使用）

执行上下文栈底永远都是全局上下文，而栈顶就是当前执行的上下文。

## ES5 变量对象

执行上下文中的**变量对象**（Variable Object，VO）保存了当前上下文中声明的变量和函数

JS 引擎在执行代码之前，先创建一个**全局对象** Global Object（GO）。全局对象可以被所有作用域访问，全局执行上下文中的变量对象就是全局对象

函数执行上下文中：

- 在分析阶段，函数执行上下文中的变量对象**初始化**当前上下文中声明的变量和函数；
- 在执行阶段，函数**接收传入的参数**并对函数内声明的变量进行**赋值**，变量对象被激活成**活动对象**（Activation Object，AO）

活动对象与变量对象的关系：

- **活动对象 AO = 变量对象 VO + 形式参数 + 实际参数列表 arguments**
- 变量对象 VO 保存使用 `var` 声明的变量和 `function` 声明的函数

ES5 执行上下文伪代码：

```js:no-line-numbers
ExecutionContext = {  
  ThisBinding = <this value>, // 确定 this 
  ScopeChain = { 当前 VO, 父级 VO }, // 作用域链
  VariableObject = { 当前 VO 使用 var 声明的变量和 function 声明的函数, 形参, 实参列表 }, // 变量对象
}
```

## ES6 词法环境

ES6 相较于 ES5，新增了词法环境，并将变量对象 VO 改为变量环境 VE

词法环境（Lexical Environment）包含了一个**环境记录**（Environment Record）和一个**指向外部词法环境的引用**，而这个引用的值可能为`null`。

ES6 执行上下文伪代码：

```js:no-line-numbers
ExecutionContext = {  
  ThisBinding = <this value>, // 确定 this 
  LexicalEnvironment = { 环境记录（即当前 LE）, outer（即父级 LE） }, // 词法环境
  VariableEnvironment = { 当前 LE 使用 var 声明的变量, outer（即父级 LE）}, // 变量环境
}
```

**词法环境与变量环境的区别：**

- 词法环境用于保存当前上下文中使用 `let`、`const`、`class`、`module`、`import` 声明的标识符引用和 `function` 声明的函数
- 变量环境用于保存使用 `var` 声明的标识符引用

**词法环境**有三种类型：

- 全局词法环境：全局执行上下文中，没有引用外部环境的词法环境
- 函数词法环境：函数执行上下文中的词法环境
- 变量环境：变量环境也是一种词法环境

## 变量提升

`var` 关键字声明的变量初始化被提前，赋值未被提前，如下：

```js:no-line-numbers
console.log(n) // undefined
var n = 1

// 变量提升后等价于下面代码
var n
console.log(n) // undefined
a = 1
```

## 函数提升

创建函数有两种方式：函数声明、函数表达式（又称函数字面量）

`function` 关键字声明的函数初始化被提前，**只有函数声明才存在函数提升**，如下：

```js:no-line-numbers
console.log(f1) // function f1() {}
console.log(f2) // undefined
function f1() {}
var f2 = function () {}

// 等价于
function f1() {}
var f2
console.log(f1) // function f1() {}
console.log(f2) // undefined
f2 = function () {}
```

**同名标识符，函数提升先于变量提升：**

```js:no-line-numbers
console.log(foo) // function foo() {}

var foo = 1
function foo() {}
var foo = 2
```

## 顶层对象与全局变量

顶层对象，在浏览器环境指的是`window`对象，在 Node 指的是`global`对象。ES5 之中，顶层对象的属性与全局变量是等价的。

顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言最大的设计败笔之一。

ES6 为了改变这一缺陷，同时为了兼容性，规定：

- `var`命令和`function`命令声明的全局变量，依旧是顶层对象的属性；

- `let`命令、`const`命令、`class`命令声明的全局变量，不属于顶层对象的属性。

```js:no-line-numbers
var a = 1
this.a // 1
window.a // 1

let b = 1
window.b // undefined
```

## 例题

例一：在函数外声明变量，在函数中可以访问并修改该变量值

```js:no-line-numbers
var n = 100
function foo() {
  n = 200
}
foo()

console.log(n) // 200
```

例二：函数声明中的变量提升，变量提升初始化到函数自己的作用域中（易错）

```js:no-line-numbers
// 作用域层级：foo({n: undefined -> 200}) -> Global({n: 100})
function foo() {
  console.log(n) // undefined
  var n = 200
  console.log(n) // 200
}

var n = 100
foo()
```

例三：函数嵌套调用函数

```js:no-line-numbers
var n = 100

// 作用域层级：foo1({n: 100}) -> Global({n: 100})
function foo1() {
  console.log(n) // 2: 100
}
// 作用域层级：foo2({n: 200}) -> Global({n: 100})
function foo2() {
  var n = 200
  console.log(n) // 1: 200
  foo1()
}

foo2()
// 作用域层级：Global({n: 100})
console.log(n) // 3: 100
```

例四：尽管 return 后的代码无法执行，但在编译阶段，return 后的代码中所有的**变量声明**和**函数声明**都会初始化到 AO。

```js:no-line-numbers
var n = 100
// 作用域层级：foo({n: undefined}) -> Global({n: 100})
function foo() {
  console.log(n) // undefined
  return
  var n = 200
}
foo()
```

如下是 return 前调用 return 后声明的函数，：

```js:no-line-numbers
var n = 100
// 作用域层级：foo({n: undefined}) -> Global({n: 100})
function foo() {
  console.log(n) // undefined
  bar()
  return
  var n = 200
  // 作用域层级：bar -> foo({n: undefined}) -> Global({n: 100})
  function bar() {
    console.log(n) // undefined
  }
}
foo()
```

但是 return 后的函数声明中的变量声明无法初始化，如下：

```js:no-line-numbers
var n = 100
function foo() {
  console.log(n) // undefined
  bar()
  console.log(m) // 报错：m 未定义
  return
  var n = 200
  function bar() {
    var m = 'm'
    console.log(n) // undefined
  }
}
foo()
```

例五：在函数中使用 `var`、`let`、`const`关键字声明的变量不会成为全局对象的属性

```js:no-line-numbers
// 作用域层级：foo({n: 100}) -> Global
function foo() {
  var n = 100
}

foo()
console.log(n) // 报错：n 未定义
```

然而，在函数中不使用 `var` 关键字声明变量：

```js:no-line-numbers
function foo() {
  // 去掉 var
  n = 100
}

foo()
console.log(n) // 100
console.log(window) // 可以发现 window 上有 n
```

不使用关键字声明变量（只初始化却不声明）如 `n = 100`，在严格意义上是错误语法，但 JS 引擎会把这个变量放到全局对象上。

使用关键字同时声明初始化变量，如 `var/let/const a = b = 100` 等价于 `var/let/const a = 100; b = 100`：

```js:no-line-numbers
function foo() {
  var a = b = 100
  // 等价于下面两行代码
  // var a = 100
  // b = 100
  let c = d = 200
}

foo()

console.log(b) // 100
console.log(d) // 200
// console.log(a) // 报错，a 未定义
// console.log(c) // 报错，c 未定义
```

## 参考资料

- [在线词法分析、语法分析](https://esprima.org/demo/parse.html)
- [JavaScript深入之执行上下文栈](https://github.com/mqyqingfeng/Blog/issues/4)
- [JS执行过程详解](https://segmentfault.com/a/1190000039380905)
- [执行栈可视化](https://ui.dev/javascript-visualizer?code=function%20a%20()%20%7B%0A%20%20console.log(%27In%20fn%20a%27)%0A%20%20%0A%20%20function%20b%20()%20%7B%0A%20%20%20%20console.log(%27In%20fn%20b%27)%0A%20%20%20%20%0A%20%20%20%20function%20c%20()%20%7B%0A%20%20%20%20%20%20console.log(%27In%20fn%20c%27)%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20c()%0A%20%20%7D%0A%0A%20%20b()%0A%7D%0A%0Aa())
- [【译】理解 Javascript 执行上下文和执行栈](https://juejin.cn/post/6844903704466833421)
- [深入JavaScript系列（一）：词法环境](https://juejin.cn/post/6844903733495595016)
- [Annotated ECMAScript 5.1 词法环境](http://es5.github.io/#x10.2)

- [JavaScript Guidebook 变量对象](https://tsejx.github.io/javascript-guidebook/core-modules/executable-code-and-execution-contexts/execution/variable-object)
