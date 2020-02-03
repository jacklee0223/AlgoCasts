// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node && node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    let node = this.head;

    if (!node) return node;

    if (!node.next) {
      this.head = null;
      return;
    }

    while (node.next.next) {
      node = node.next;
    }

    node.next = null;
  }

  insertLast(data) {
    let last = this.getLast();

    last.next = new Node(data);
  }
}

module.exports = { Node, LinkedList };
