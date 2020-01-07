// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.list = [];
  }

  add(number) {
    this.list.unshift(number);
  }

  remove(number) {
    const popped = this.list.pop();
    return popped;
  }
}

module.exports = Queue;
