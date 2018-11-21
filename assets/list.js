function LinkedList() {
    this.start = null;
}

LinkedList.prototype.add = function (value) {
    var n = new Node(value);
    if (this.start == null) {
        this.start = n;
    } else {
        this.start.addNode(n);
    }
}

LinkedList.prototype.traverse = function () {
    this.start.visit()
}

LinkedList.prototype.delete = function (value) {
    if (this.start.data == value) {
        var tempNode = this.start;
        this.start = tempNode.next;
    } else {
        this.start.delete(value);
    }
}

var list = new LinkedList();
for (var i = 0; i < 5; i++) {
    list.add(Math.floor(Math.random() * 100));
}
console.log(list);