/*
 * @Author: {zhengzhuang}
 * @Date: 2023-02-23 22:50:43
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2023-02-23 23:01:09
 * @Description:
 */

// 没有元素的空数组
const empty = [];
// 存储三个字符串的数组
const courses = ["Solidity", "Etherjs", "JavaScript"];
// 存储不同数据类型的数组
const mix = [1, "WTF", true];

// complex是一个数组，包含两个元素，每个元素都是另外一个数组
const complex = [courses, mix];
const nested = [
  [1, 2],
  [1, 1, 1],
];

console.log(nested);

const arr = [1, 2, 3, ["Solidity", true]];
// 读取第 0 个元素
console.log(arr[0]); // 1
// 读取嵌套数组第 0 个元素
console.log(arr[3][0]); // "Solidity"
// 读取没有当前下标的元素
console.log(arr[5]); // undefined

// 修改数组的第1个元素
arr[1] = 6;
console.log(arr); //[1, 6, 3, Array(2)]

const numArr = [5, 8, 9, 11, 55];
let average = 0;
for (let i = 0; i < numArr.length; i++) {
  average += numArr[i] / numArr.length;
}
console.log(`平均值为: ${average}`); // 17.6
