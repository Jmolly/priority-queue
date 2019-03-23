const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		const node = new Node(data, priority);
		insertNode(node);
		shiftNodeUp(node);
	}

	pop() {

	}

	detachRoot() {
		this.root = null;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		return
	}

	isEmpty() {
		return this.parentNodes === [];
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (this.root === null)
			this.root = node;
		// else this.root.
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;