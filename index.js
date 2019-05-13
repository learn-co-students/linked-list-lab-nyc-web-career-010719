function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(head, collection) {
  let nextHead = head.next
  return collection[nextHead]
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection)
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    return node.next
  }
}

function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection)
  let index = 0
  while (node !== currentNode) {
    index++
    currentNode = next(currentNode, collection)
  }
  return index
}

function insertNodeAt(index, address, linkedList, collection) {
  let prevNode = nodeAt(index - 1, linkedList, collection);
  let node = collection[address];

  node.next = prevNode.next;
  prevNode.next = address;
}

function deleteNodeAt(index, linkedList, collection) {
  let prevNode = nodeAt(index - 1, linkedList, collection)
  let nextNodeAddress = addressAt(index + 1, linkedList, collection)
  prevNode.next = nextNodeAddress
}
