const createList = (value) => {
  return createNode(value);
};
const appendList = (list, value) => {
  const node = createNode(value);
  let x = list;
  while (x.next) {
    x = x.next;
  }
  // x.next = null  //x是最后一个节点
  x.next = node;
  return node;
};
const createNode = (value) => {
  return {
    data: value,
    next: null,
  };
};
const removeFromList = (list, node) => {
  // debugger;
  let x = list;
  let p = node;
  //当前传入的节点是list的第几个节点，如果不是第一个，就往下找
  //如果x不在list中，x可能为null
  while (x !== node && x !== null) {
    //记住x的上一个节点
    p = x;
    x = x.next;
  }
  //如果x为null，则不需要删除，直接return， false表示无法删除不在list中的节点
  if (x === null) {
    return false;
  } else if (x === p) {
    //说明删除的是第一个节点
    p = p.next;
    return p; //如果删除的是第一个节点，需要把新list的头节点p返回给外面，即 newList = removeFromList(list, list)
  } else {
    p.next = x.next;
    return list; // 如果删除的不是第一个节点，返回原来的 list 即可
  }
};
const travelList = (list, fn) => {
  let x = list;
  while (x !== null) {
    fn(x);
    x = x.next;
    index += 1;
  }
};
const getIndex = (list, node) => {
  let x = list;
  let index = 0;
  while (x !== node) {
    x = x.next;
    index += 1;
  }
  return index;
};
const list = createList(10);
const node = list;
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
const node4 = appendList(list, 40);
// console.log("list");
// console.log(list);
const newList = removeFromList(list, node);
console.log(newList);
// console.log("node2");
// console.log(node2);
// removeFromList(list, node3);
// travelList(list, (node) => {
//   console.log(node.data);
// });
// const nodeIndex = getIndex(list, node4);
// console.log(nodeIndex);
