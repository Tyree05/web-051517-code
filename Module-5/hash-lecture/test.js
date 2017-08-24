let stringHash = require('string-hash')
let LinkedList = require('linkedlist')


// console.log(stringHash("jasdfkljb"))

let mapArray = [null,null,null,null,null,null,null,null,null]

// console.log(mapArray.length)

let thingToInsert = "a"
let insertHash = stringHash(thingToInsert)
let insertIndex = insertHash % mapArray.length

mapArray[insertIndex] = thingToInsert

console.log(mapArray)

function myIncludes(searchItem) {
    let searchHash = stringHash(searchItem)
    let searchIndex = searchHash % mapArray.length

    return mapArray[searchIndex] === searchItem
}

console.log("Is b in the hashMap?")
console.log(myIncludes("b"))
