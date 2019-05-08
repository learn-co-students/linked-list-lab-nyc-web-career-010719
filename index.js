function getName(node) {
  return node.name;
};

function headNode(linkedList, collection) {
  return collection[linkedList];
};

function next(head, collection) {
  return collection[head.next];
};

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);

  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  };

  return node;
};

function addressAt(index, linkedList, collection) {
  let address = linkedList;

  for (let i = 0; i < index; i++) {
    address = collection[address].next;
  };

  return address;
};

function indexAt(node, collection, linkedList) {
  let currentNode = collection[linkedList];
  let i = 0;

  while (currentNode !== node) {
    i++;
    currentNode = next(currentNode, collection);
  };

  return i;
};

function insertNodeAt(index, address, linkedList, collection) {
  let nodeBefore = nodeAt(index - 1, linkedList, collection);
  let node = collection[address];

  node.next = nodeBefore.next;
  nodeBefore.next = address;
};

function deleteNodeAt(index, linkedList, collection) {
  let nodeBefore = nodeAt(index - 1, linkedList, collection);
  let addressAfter = addressAt(index + 1, linkedList, collection);

  nodeBefore.next = addressAfter;
};
