/** Node: node for a singly linked list. */
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */
class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  push(val) {
    this.insertAt(this.length, val);
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    this.insertAt(0, val);
  }

  /** pop(): return & remove last item. */
  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */
  shift() {
    return this.removeAt(0);
  }

  /** getNodeAt(idx): gets Node at idx. */
  getNodeAt(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if(idx===this.length-1) return this.tail;

    let node = this.head;
    for (var i = 0; i < idx; i++) {
      node = node.next;
    }
    return node;
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    const node = this.getNodeAt(idx);
    if (node) {
      return node.val;
    } else {
      throw "Invalid index!";
    }
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    const node = this.getNodeAt(idx);
    if (node) {
      node.val = val;
    } else {
      throw "Invalid index!";
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw "Invalid index!";

    const nextNode = this.getNodeAt(idx);
    const prevNode = this.getNodeAt(idx - 1);

    const newNode = new Node(val, nextNode);
    prevNode ? (prevNode.next = newNode) : (this.head = newNode);
    if(!nextNode) this.tail = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */
  removeAt(idx) {
    if (this.length <= 0) throw "List is empty!";

    const node = this.getNodeAt(idx);
    if (!node) throw "Invalid index!";

    const nextNode = node.next;
    const prevNode = this.getNodeAt(idx - 1);

    prevNode ? (prevNode.next = nextNode) : (this.head = nextNode);
    if (!nextNode) this.tail = prevNode;

    this.length--;

    return node.val;
  }

  /** average(): return an average of all values in the list */
  average() {
    let divideBy = this.length;
    let node = this.head;
    let total = 0;
    for (var i = 0; i < this.length; i++) {
      typeof node.val === "number" ? (total += node.val) : divideBy--;
      node = node.next;
    }

    const avg = total / divideBy;
    return avg ? avg : 0;
  }
}

module.exports = LinkedList;
