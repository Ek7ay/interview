// 1
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// var twoSum = function (nums, target) {
//   for(var i = 0; i < nums.length; i++ ) {
//     let index2 = nums.indexOf(target - nums[i])
//     if(index2 > -1 && index2 !== i){
//       return [i, index2]
//     }
//   }
// };
// console.log(twoSum([2,7,11,15],  9))

// 2
// 例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]
// function randomArr() {
//   const arr = []
//   while(arr.length < 10) {
//     let num = Math.floor(Math.random()*100)
//     if(!arr.includes(num)) {
//       arr.push(num)
//     }  
//   }
//   arr.sort((a, b) => {
//     return a - b
//   })
//   return arr;
// }

// function fn(arr) {
//   const resultArr = []
//   let newArr = [arr[0]]
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i+1] - arr[i] == 1) {
//       newArr.push(arr[i+1])
//     } else {
//       resultArr.push(newArr)
//       newArr = [arr[i+1]]
//     }
//   }
//   return resultArr;
// }

// console.log(fn(randomArr())) 


// 3
// 给你一个字符串 s ，请你反转字符串中 单词 的顺序。
// 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
// 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
// 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
// 示例 1：

// 输入：s = "the sky is blue"
// 输出："blue is sky the"
// 示例 2：

// 输入：s = "  hello world  "
// 输出："world hello"
// 解释：反转后的字符串中不能存在前导空格和尾随空格。
// 示例 3：

// 输入：s = "a good   example"
// 输出："example good a"
// 解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。

// let str = "  a good   example  ";

// (function (str = '') {
//   let a = str.split(' ').filter(item => item).reverse().join(' ')
//   console.log(a)
// })(str)


// 4
// 编程题-如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc'
// let a = 'AbCdEfffDE';

// function fn(str = '') {
//  let b = str.split('')
//  const arr = []
//  b.map(item => {
//   if(item.toLowerCase() === item) {
//     arr.push(item.toUpperCase())
//   } else {
//     arr.push(item.toLowerCase())
//   }
//  })
//  return arr.join('')
// }
// console.log(fn(a))

// 5
// 给你两个正整数 low 和 high 。
// 返回在 [low, high] 范围内的 对称整数 。

// function fn(low, high) {
//   const arr = Array.from({ length: high - low + 1 }, (v, i) => low + i)
//   const result = arr.filter(item => {
//     const reverseNum = item.toString().split('').reverse().join('')
//     return reverseNum == item
//   })
//   return result;
// }

// console.log(fn(1, 10000))

//6
// 2843. 统计对称整数的数目
// 给你两个正整数 low 和 high 。
// 对于一个由 2 * n 位数字组成的整数 x ，如果其前 n 位数字之和与后 n 位数字之和相等，则认为这个数字是一个对称整数。
// 返回在 [low, high] 范围内的 对称整数的数目 。
// 示例 1：
// 输入：low = 1, high = 100
// 输出：9
// 解释：在 1 到 100 范围内共有 9 个对称整数：11、22、33、44、55、66、77、88 和 99 。
// 示例 2：
// 输入：low = 1200, high = 1230
// 输出：4
// 解释：在 1200 到 1230 范围内共有 4 个对称整数：1203、1212、1221 和 1230 。

// function fn(low, high) {
//   const arr = Array.from({ length: high - low + 1 }, (v, i) => low + i)
//   const result = arr.filter(item => {
//     if (item.toString().length % 2 == 0) {
//       const a = item.toString().split('')
//       let harf = item.toString().length / 2
//       let left = a.splice(0, harf)
//       leftTotal = left.reduce((total, cur) => {
//         return total + Number(cur)
//       }, 0)
//       rightTotal = a.reduce((total, cur) => {
//         return total + Number(cur)
//       }, 0)
//       if(leftTotal == rightTotal) {
//         return item
//       }
//     }
//   })
//   return result.length;
// }

// console.log(fn(1, 100))

// 7
// 给定一个数组 nums，编写一个函数将所有 0 移动到数  组的末尾，同时保持非零元素的相对顺序。
//  示例:
//  输入: [0,1,0,3,12]
//  输出: [1,3,12,0,0]

// const arr = [0,1,0,3,12]
// function fn(arr = []) {
//   arr1 = arr.filter(item => item)
//   le = arr.length - arr1.length
//   for(let i = 0; i < le; i++) {
//     arr1.push(0)
//   }
//   return arr1
// }

// console.log(fn(arr))


// 8
// 1122. 数组的相对排序
// 给你两个数组，arr1 和 arr2，arr2 中的元素各不相同，arr2 中的每个元素都出现在 arr1 中。
// 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
// 示例 1：
// 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// 输出：[2,2,2,1,4,3,3,9,6,7,19]
// 示例  2:
// 输入：arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// 输出：[22,28,8,6,17,44]
// const arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// function fn(arr1 = [], arr2 = []) {  
//   const result = []
//   arr2.map(item => {
//     arr1.map(v => {
//       if(v == item) {
//         result.push(v)
//       }
//     })
//   })

//   const s = arr1.filter(item => !arr2.includes(item)).sort((a, b) => a - b)
//   s.forEach(item => result.push(item))
//   return result;
// }
// console.log(fn(arr1, arr2))

// 9
// 请实现一个 add 函数，满足以下功能
//  add(1);      // 1
//  add(1)(2);    // 3
//  add(1)(2)(3)；// 6
//  add(1)(2, 3); // 6
//  思路：函数柯里化
//  返回累加函数，接受n个参数

// function argsSum(arg = []) {
//   return arg.reduce((sum, pre) => {
//     return sum + pre
//   }, 0)
// }


// const add = (...args) => {
//   const sum1 = argsSum(args)
//   const fn = (...args2) => {
//     const sum2 = argsSum(args2)
//     return add(sum1 + sum2)
//   }

//   fn.toString = () => {
//     return sum1
//   }
//   return fn;
// }
// console.log(Number(add(1,2)(3)))








