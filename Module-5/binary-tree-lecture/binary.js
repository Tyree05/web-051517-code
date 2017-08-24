/*
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(headNode) {
        this.head = headNode
    }
}

let newNode = new Node("a")
let myLinkedList = new LinkedList(newNode)
*/

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(rootNode) {
        this.rootNode = rootNode
    }

    insert(newNode) {
        let currentNode = myTree.rootNode
        let success = false
        while(!success){
            if (newNode.value < currentNode.value) {
                //go left
                if (currentNode.left === null) {
                    currentNode.left = newNode
                    success = true
                } else {
                    currentNode = currentNode.left
                }
            } else {
                //go right
                if (currentNode.right === null) {
                    currentNode.right = newNode
                    success = true
                } else {
                    currentNode = currentNode.right
                }
            }
        }
    }

    search(searchValue) {
        let currentNode = myTree.rootNode
        while(true){
            if (currentNode === null) {
                return false
            }

            if (currentNode.value === searchValue) {
                return true
            }

            if (searchValue < currentNode.value) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }

        }
    }
}

let five = new Node(5)
let myTree = new BinarySearchTree(five)


let four = new Node(4)
let seven = new Node(7)
myTree.insert(four)
myTree.insert(seven)



let six = new Node(6)
myTree.insert(six)

console.log("Is 10 in my Tree")
console.log(myTree.search(10))


