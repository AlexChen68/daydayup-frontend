const sum = function (a, b) {
  return a + b
}
const subtract = function (a, b) {
  return a - b
}
const multiply = function (a, b) {
  return a * b
}
const divide = function (a, b) {
  return a / b
}

// 导出

// 导出成员：
module.exports = {
  sum: sum,
  subtract: subtract,
  multiply: multiply,
  divide: divide
}