class Stack {
  constructor() {
    this.items = [];
  }
  add(element) {
    this.items.push(element);
  }
  remove(element) {
    if (this.items.length === 0) {
      return "stack underflow";
    }
    return this.items.pop();
  }
  peek() {
    if (this.items.length === 0) {
      return "stack empty";
    }
    return this.items[this.items.length - 1];
  }
  print() {
    if (this.items.length === 0) {
      return "stack empty";
    }
    console.log(this.items);
  }
}

const books = new Stack();
console.log(books.remove());
books.add("Whispers in the wind");
books.add("Echoes of Time");
books.add("The Last LightKeeper");
console.log(books.peek());
console.log(books.remove());
books.print();
