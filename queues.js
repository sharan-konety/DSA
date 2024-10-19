class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.items.length === 0) {
      return "Queue empty";
    }
    return this.items.shift();
  }
  print() {
    console.log(this.items);
  }
  peek() {
    if (this.items.length === 0) {
      return "Queue Empty";
    }
    return this.items[0];
  }
}

const nums = new Queue();
console.log(nums.dequeue());
nums.enqueue(0);
nums.dequeue();
nums.enqueue(1);
nums.enqueue(2);
console.log(nums.peek());
nums.print();
