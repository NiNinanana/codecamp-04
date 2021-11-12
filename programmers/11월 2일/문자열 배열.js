const number = "01012345678"
const newNumber = []

let arr = []

arr.push(number.slice(0,3))
arr.push(number.slice(3,7))
arr.push(number.slice(7,11))

console.log(arr) // ["010", "1234", "5678"]