let arr = [1, 3, 4];

let newArr = arr.map((v) => v);
console.log(newArr);

let res = arr.reduce((a, b) => {
  return a + b;
})
console.log(res);
