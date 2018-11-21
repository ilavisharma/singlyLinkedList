function Node(data) {
    this.data = data;
    this.next = null;
}
Node.prototype.addNode = function (n) {
    if (this.next == null) {
        this.next = n;
    } else {
        this.next.addNode(n);
    }
};
Node.prototype.visit = function () {
    if (this != null) {
        console.log(this.data);
        if (this.next != null) {
            this.next.visit();
        }
    }
}

Node.prototype.delete = function (value) {
    var tempNode = this.next;
    if (tempNode.data == value) {
        this.next = tempNode.next;
        console.log('Node deleted');
    } else {
        this.next.delete(value);
    }
}