数组（Array)。它可以把多个数据有序的存储在一起。

### 定义
数组类型支持在单个变量名下存储多个元素。创建数组最简单的方式，就是在一对中括号 [] 内部用逗号 , 分割的列表，例如：

```JavaScript
// 没有元素的空数组
const empty = [];
// 存储三个字符串的数组
const courses = ["Solidity", "Etherjs", "JavaScript"];
// 存储不同数据类型的数组
const mix = [1,'WTF',true];
```

数组中的元素可以使基础类型，也可以是另外一个数组。你可以通过数组存储比较复杂的嵌套数据。下面，complex 数组包含了 courses 和 mix 两个数组：

```JavaScript
// complex是一个数组，包含两个元素，每个元素都是另外一个数组
const complex = [courses, mix];
const nested = [[1, 2], [1, 1, 1]];
```

### 读取
我们可以在变量上使用索引（中括号 []）来读取数组元素。注意数组的索引是从 0 开始计算的：

```JavaScript
const arr = [1,2,3,["Solidity",true]]
// 读取第 0 个元素
console.log(arr[0])  // 1
// 读取嵌套数组第 0 个元素
console.log(arr[3][0]) // "Solidity"
// 读取没有当前下标的元素
console.log(arr[5]) // undefined
```

### 写入
你可以利用索引对某个元素进行赋值，从而修改数组：

```JavaScript
// 修改数组的第1个元素
arr[1] = 6
console.log(arr) //[1, 6, 3, Array(2)]
```

数组变量还有一些属性可以读取，例如 length 属性会返回数组的长度：

```JavaScript
// 输出数组长度
console.log(arr.length) // 4
```

### 遍历数组
一个数组存储着多个数据，我们可以用循环来遍历数组内部的所有元素。下面的例子中，我们使用 for 循环来计算 numArr 数组的平均值。

```JavaScript
const numArr = [5, 8, 9, 11, 55];
let average = 0;
for(let i = 0; i < numArr.length; i++){
  average += numArr[i] / numArr.length
}
console.log(`平均值为: ${average}`) // 17.6
```