// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;

// class Queue {
//   constructor() {
//     this.data = new Stack();
//     this.temp = new Stack();
//   }

//   add(el) {
//     this.data.push(el);
//   }

//   remove() {
//     let removedVal;
//     while (this.data.peek()) {
//       this.temp.push(this.data.pop());
//     }
//     removedVal = this.temp.pop();
//     while (this.temp.peek()) {
//       this.data.push(this.temp.pop());
//     }
//     return removedVal;
//   }

//   peek() {
//     let peekedVal;
//     while (this.data.peek()) {
//       this.temp.push(this.data.pop());
//     }
//     peekedVal = this.temp.peek();
//     while (this.temp.peek()) {
//       this.data.push(this.temp.pop());
//     }
//     return peekedVal;
//   }
// }