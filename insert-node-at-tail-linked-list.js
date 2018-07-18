'use strict'

function insertNodeAtTail(head, data) {
    const node = new Node(data);
    if (!this.head) {
        this.head = node;
        return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
};
