/*if (true === false) {
  console.log("truth")
} else {
  console.log("not truth")
}
*/
/*let numbers = [1,2,3,4]
let sum = 0
for (let i=0;i<numbers.length;i++) {
  sum += numbers[i]
}

let person = {"name": "Joe",
              "height": 74}
function sayHello(message) {
  console.log(`The message is ${message}`)
  //return message
}


sayHello("Roosevelt")
console.log(sum)

*/

function add(left, right) {
  return left + right
}

function subtract(left, right) {
  return left - right
}

function multiply(left, right) {
  return left * right
}

function print(number) {
  if (number > 200) {
    return "greater"
  } else {
    return "less than"
  }
}
function inc(number) {
  if (number >300) {
  } else {
    number = 500
  }
  debugger;
  print(234)
  for (let i=0;i<5;i++) {
    console.log("Asdf")
  }
  debugger;
  return number+1
}

person = {"name": "joe", "height": 74}
console.dir(person)
