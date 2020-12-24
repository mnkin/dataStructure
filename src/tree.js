const createTree = (value) => {
  return {
    data: value,
    children: null,
    parent: null,
  };
};
const addChild = (node, value) => {
  const newNode = {
    data: value,
    children: null,
    parent: node,
  };
  node.children = node.children || [];
  node.children.push(newNode);
  return newNode;
};
const travel = (tree, fn) => {
  fn(tree);
  if (!tree.children) {
    return;
  }
  for (let i = 0; i < tree.children.length; i++) {
    travel(tree.children[i], fn);
  }
};
const removeFromTree = (tree, node) => {
  const siblings = node.parent.children;
  let index = 0;
  for (let i = 1; i < siblings.length; i++) {
    if (siblings[i] === node) {
      index = i;
    }
  }
  siblings.splice(index, 1);
};
const tree = createTree(10);
const node2 = addChild(tree, 20);
const node3 = addChild(tree, 30);
addChild(tree, 40);
addChild(tree, 50);
addChild(node2, 100);
addChild(node2, 200);
addChild(node2, 300);
console.log(tree);
// travel(tree, (node) => console.log(node.data));
const newTree = removeFromTree(tree, node3);
console.log(tree);
