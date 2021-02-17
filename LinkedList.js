class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  _length() {
    let length = 0;
    let currNode = this.head;
    while (currNode !== null) {
      length++;
      currNode = currNode.next;
    }
    return length;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
    return this._length();
  }

  insertLast(item) {
    const newItem = new _Node(item, null);
    let currNode = this.head;

    if (this.head === null) {
      this.head = new _Node(item, this.head);
      return this._length();
    }

    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    currNode.next = newItem;
    return this._length();
  }

  insertAt() {}

  find(item, node = this.head) {
    let currNode = node;
    if(!currNode) {
      return null;
    }
    if (currNode.value === item) {
      return currNode;
    }
    if (currNode.next === null) {
      return null;
    }

    currNode = currNode.next;
    return this.find(item, currNode);
  }

  remove(item) { 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

}

module.exports = LinkedList;