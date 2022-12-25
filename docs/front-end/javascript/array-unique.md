---
  title: 实现数组去重
---

## Set

Set 类似于数组，但是成员的值都是唯一的，没有重复的值。它可以接收一个数组。形如 `{ x, y }`

```js:no-line-numbers
let set1 = new Set()

// add 与 has：
set1.add(1) // Set(1) {1}
set1.add(2) // Set(2) {1, 2}
set1.add(2) // Set(2) {1, 2} 值唯一
set1.add('2')

let obj = { a: 1, b: 2 }
set1.add(obj) // 变量名唯一
set1.add({ a: 1, b: 2 }) // 对象引用，即使值相同，也不会被认为是同一个对象
console.log('set1', set1) // Set(5) {1, 2, '2', {…}, {…}}
console.log(set1.has({ a: 1, b: 2 })) // false 对象引用，即使值相同，也不会被认为是同一个对象
console.log(set1.has(obj)) // true

// 类型转换：
// 1.数组转 Set
let set2 = new Set([1, 2, 3])
console.log('set2', set2) // Set(3) {1, 2, 3}
console.log([...set2]) // [1, 2, 3]

// 2.String 转 Set
let set3 = new Set('hello')
console.log('set3', set3) // Set(4) {'h', 'e', 'l', 'o'}
```

## Map

Map 的键映射值，形如`{ x => y }`

```js:no-line-numbers
let map1 = new Map()

// set、has、get、delete、size
map1.set('key1', 1)
map1.set('key2', 2)
map1.set(3, 'value3')
console.log(map1) // Map(3) {'key1' => 1, 'key2' => 2, 3 => 'value3'}
console.log(map1.get('key1')) // 1
console.log(map1.has('key1')) // true
console.log(map1.size) // 3
map1.delete(3)
console.log(map1) // Map(2) {'key1' => 1, 'key2' => 2}

// 类型转换：
let arr = [
  ['key1', 'value1'],
  ['key2', 'value2'],
]
// 1.二维数组转 Map
let mapArr = new Map(arr)
console.log(mapArr) // Map(2) {'key1' => 'value1', 'key2' => 'value2'}

// 2.Map 转二维数组
let outArr = Array.from(mapArr) // 等价于 [...mapArr]
console.log(outArr) // [['key1', 'value1'], ['key2', 'value2']]
```

## 实现数组去重

Set、Map 均可以对 String、Boolean、 Number、undefined、null、NaN（即使 NAN 严格不等于 NAN）去重，唯独不能对 Object 去重。

```js:no-line-numbers
let arr = [
  1,
  1,
  '1',
  '1',
  NaN,
  NaN,
  'NAN',
  'NAN',
  undefined,
  undefined,
  'undefined',
  'undefined',
  null,
  null,
  'null',
  'null',
  true,
  true,
  'true',
  'true',
  {},
  {}, // 对引用类型的去重是按照地址值判断的，对象的创建总是重新开辟内存空间
]

// 1.最简单的方式：Set
function unique1(arr) {
  return Array.from(new Set(arr))
}
console.log(unique1(arr))

// Set + 展开运算符...
function unique2(arr) {
  return [...new Set(arr)]
}
console.log(unique2(arr))

// 2.Map：
function unique3(arr) {
  let map = new Map()
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    // map 以 arr 值为键，map 上不存在某个键，就 set 该键，并 push 到新数组
    if (!map.has(arr[i])) {
      map.set(arr[i])
      newArr.push(arr[i])
    }
  }
  console.log(map) // Map(12) {1 => undefined, '1' => undefined, NaN => undefined, 'NAN' => undefined, undefined => undefined, …}
  return newArr
}
console.log(unique3(arr))
```
