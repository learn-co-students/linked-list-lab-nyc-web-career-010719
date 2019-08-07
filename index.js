// let firstNode = {name: 'Alexandra', next: 135}
// let secondNode = {name: 'Kirstin', next: 833}
// let thirdNode = {name: 'Juliet', next: 543}
// let fourthNode = {name: 'Timmy', next: 627}
// let fifthNode = {name: 'Jacob', next: null}
//
// let linkedList = firstNode
// let collection = {0: firstNode, 135: secondNode, 833: thirdNode, 543: fourthNode, 627: fifthNode}
// let head = collection[0];

function getName(node) {
  return node.name
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(head, collection){
  let nextNode = head.next
  return collection[nextNode]
}

function nodeAt(index, linkedList, collection){
  let nextNode = collection[linkedList]
  for (var i = 0; i < index; i++) {
    nextNode = next(nextNode, collection)
  }
  return nextNode
}

function addressAt(index, linkedList, collection){
  if (index == 0){
    return linkedList
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    return node.next
  }
}

function indexAt(node, linkedList, collection){
  let index = 0
  let currentNode = collection[linkedList]
  while(currentNode != node){
    index++
    currentNode = next(currentNode, collection)
  }
  return index
}

function insertNodeAt(index, newAddress, linkedList, collection){
  let previousNode = nodeAt(index-1, linkedList, collection)
  let subsequentNode = nodeAt(index, linkedList, collection)

  let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)

  previousNode.next = newAddress
  let newNode = collection[newAddress]
  newNode.next = subsequentNodeAddress

}

function deleteNodeAt(index, linkedList, collection){
  let previousNode = nodeAt(index-1, linkedList, collection)
  let subsequentNode = nodeAt(index, linkedList, collection)

  previousNode.next = subsequentNode.next

}
