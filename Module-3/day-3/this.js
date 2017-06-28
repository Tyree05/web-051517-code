//console.log("Outside of the function")
//console.log(this)

function doSomething(firstArgument) {
  console.log("Inside of the function")
//  console.log(firstArgument)
  console.log(this)
}

function Person(name) {
  this.name = name
}

let joe = new Person("Joe")

//doSomething.call(joe,"this will be passed through to the function")
//console.log(this)
let joeDoSomething = doSomething.bind(joe)

//joeDoSomething()















/*
function printStuff(item) {
  console.log(this)
}

*/

function ThingPrinter(array) {
  this.myArray = array
  this.firstItem = array[0]
  this.printStuff = function printStuff(item) {
    console.log(this.firstItem)
  }

  this.boundPrintStuff = this.printStuff.bind(this)

  this.showArray = function showArray() {
    this.myArray.forEach(this.boundPrintStuff)
  }
}

let myArray = [1,2,3]

let myPrinter = new ThingPrinter(myArray)

//myPrinter.printStuff("things")
myPrinter.showArray()

//myArray.forEach(printStuff)
//console.log(`from function:${printStuff("asdf")}`)
