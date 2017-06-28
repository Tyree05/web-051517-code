let person = {"name": "Joe",
              "height": 74}

/*
class Person
 def say_hello
   puts "hello"
 end
end
*/
function Person(name, height) {
  this.name = name
  this.height = height

  this.shirtColor = "black"
  this.sayHello = function sayHello() {
    console.log(`Hello, my name is ${name}`)
  }

//  sayHello()
}

let joe = new Person("joe",74)

//console.log(joe.shirtColor)
joe.sayHello()
console.log(joe.name)
/*
Bank Account class
   * Current Total
   * Array of transactions
   * calculate income tax. Income tax is 8%
   * When you create the object is just takes in the array of transactions
   */
function Transaction(description, amount) {
  this.description = description
  this.amount = amount

  this.bankAccount

  this.setBankAccount = function setBankAccount(bankAccount) {
    this.bankAccount = bankAccount
  }
}

function BankAccount(transactions) {
  this.transactions = transactions

  /*this.total = transactions.reduce(function(initial,nextValue){
    return initial+nextValue
  })
  */


}

BankAccount.prototype.company = "Bank of Joe"



BankAccount.prototype.total = function total() {
  return transactions.reduce(function(initial,transaction){
    return initial+transaction.amount
  });
}

BankAccount.prototype.currentIncomeTax = function currentIncomeTax(){
  return this.total() * 1.08
}

let firstTransaction = new Transaction("honey", 45)
let secondTransaction = new Transaction("shoes", 60)
let joesMoney = [firstTransaction,secondTransaction]

let joesAccount = new BankAccount(joesMoney)

//let yomisAccount = new BankAccount([5,3,2])

console.log(joesAccount.company)
//console.log(yomisAccount.company)
//console.log(joesAccount.transactions)
//joesAccount.transactions.push(8234)

//console.log(`What is in joesMoney: ${joesMoney}`)



//joesAccount.addTransaction(52)
//console.log("after")
//console.log(joesAccount.transactions);
//console.log(joesAccount.total)
