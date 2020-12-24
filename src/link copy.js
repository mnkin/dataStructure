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
  let x = list;
  let p = null;
  //当前传入的节点是list的第几个节点，如果不是第一个，就往下找
  while (x !== node) {
    //记住x的上一个节点
    p = x;
    x = x.next;
  }
  // console.log(x === node || x === null);
  // console.log(p === null || x的上一个节点);
  p.next = x.next;
  // if (list === node) {
  //   //如果删除的是第1个节点，即list === list
  //   //list指向第2个节点
  //   list = node.next;
  // } else {
  //   //如果删除的是第2个节点,即list.next === node2
  //   //第1个节点.next = 第2个节点.next = 第3个节点
  //   if (list.next === node) {
  //     list.next = node.next;
  //   } else {
  //     //如果删除的是第3个节点，list.next.next = node3
  //     //第2个节点的.next = 第3个节点.next = 第4个节点
  //     if (list.next.next === node) {
  //       list.next.next = node.next;
  //     }
  //   }
  // }
};
const list = createList(10);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
const node4 = appendList(list, 40);
console.log("list");
console.log(list);
console.log("node2");
console.log(node2);
removeFromList(list, node3);
