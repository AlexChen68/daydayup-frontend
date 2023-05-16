// 1. 作用域
for (let i = 0; i < 10; i++) {
  // ...
}
// console.log(i);
// ReferenceError: i is not defined


// 2. 不存在变量提升
// var 的情况
console.log(foo); // 输出 undefined
var foo = 2;

// let 的情况
// console.log(bar); // 报错 ReferenceError
// let bar = 2;

// 3. 暂时性死区
var tmp = 123;
if (true) {
  // tmp = 'abc'; // ReferenceError
  let tmp;
}

// 4. 不允许重复声明
// function func() {
//   let a = 10;
//   var a = 1;
// }

// 5. const 不可修改
const PI = 3.1415;
PI // 3.1415

// PI = 3;
// TypeError: Assignment to constant variable.