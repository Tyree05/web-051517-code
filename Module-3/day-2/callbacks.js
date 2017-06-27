/*
def my_method(passed_in_method)

 // do something with passed_in_method

end
my_method(
  def ()
puts "ASDF"
end
)



myArray.forEach(

function(item) {
  console.log(item)
}
)
*/
let myArray = [1,2,3,4]
let printer = function(item) {
  console.log(item)
}





myArray.forEach(printer)








function hello(messageFunction) {
  console.log(messageFunction())
}

let name = "joe"

let talker = function() {
  return "BLAH BLAH BLAH"
}

let nyStateTax = function(price, category) {
  if (category === "CLOTHES") {
    return price * 1.08
  } else {
    return price * 1.02
  }
}

let clothesPrices = [3,5,6,2,45]

function calculateTax(prices,taxCalculator){
  let sum=0
  for(let i=0;i<prices.length;i++) {
    sum += taxCalculator(prices[i],"CLOTHES")
  }
  return sum
}

//console.log(calculateTax(clothesPrices,nyStateTax))

//console.log(nyStateTax(5.00,"FOOD"))
//hello(talker)













//hello(name)
// Why is talker getting called before line 24?


//hello("hello" + "joe")
//console.log(name)
//console.log(myArray.forEach)

//hello("joe is awesome")


















function add(a,b) {
  return function(b) {
    return a + b
  }
}

let addFive = add(5)

console.log(addFive(5))
console.log(addFive(3))
console.log(addFive(6))
console.log(addFive(55678))
console.log(addFive(2))
console.log(addFive(90))

let addTen = add(10)

console.log(addTen(234))
