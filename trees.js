class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new TreeNode(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(current, newNode) {
    if (newNode.data < current.data) {
      if (!current.left) {
        current.left = newNode;
      } else {
        this.insertNode(current.left, newNode);
      }
    } else {
      if (!current.right) {
        current.right = newNode;
      } else {
        this.insertNode(current.right, newNode);
      }
    }
  }

  bfs() {
    if (!this.root) {
      return;
    }
    const queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.data);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  dfsPreOrder() {
    if (!this.root) return;
    const stack = [];
    stack.push(this.root);

    while (stack.length > 0) {
      let node = stack.pop();

      console.log(node.data);

      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }
}

const tree1 = new BinaryTree();
tree1.insert(10);
tree1.insert(5);
tree1.insert(15);
tree1.insert(3);
tree1.insert(7);
tree1.insert(12);
tree1.insert(20);
console.log("BFS:");
tree1.bfs();
console.log("DFS:");
tree1.dfsPreOrder();
