# Singly Linked List
A linked list is a linear collection of data elements, each element points to the next.<br>
Singly linked lists contain **nodes** which have a **data** field as well as **next** field, which points to the next node in line of nodes.<br>
Operations that can be performed on singly linked lists include *insertion, deletion and traversal.*<br>
<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/408px-Singly-linked-list.svg.png"><br>
A singly linked list whose nodes contain two fields: an integer value and a link to the next node
</p>
<i>The next field of last node is set to <b>null</b></i>

## Operations
### Creation
A linked list can be created by just creating a new object using the LinkedList constructor.
```javascript
// Constructor function for creating the Linked list 
function LinkedList() {
    this.start = null;
    // it also contains the reference to the starting node
}
```
```javascript
// Constructor function for creating the Nodes 
function Node(data) {
    this.data = data;
    this.next = null;   // reference to the next node
}
```
creating a new Linked List
```javascript
var list = new LinkedList();
// populating  the list with random values
for (var i = 0; i < 7; i++) {
    list.add(Math.floor(Math.random() * 100));
}
console.log(list);
```
![List](https://github.com/ilavisharma/singlyLinkedList/blob/master/assets/images/list.PNG)

### Traversing
Once the linked list has been created, its nodes can be retrieved by just processing the starting node, then referening to the next node and repeating the process **recursively**.
```javascript
LinkedList.prototype.traverse = function () {
    this.start.visit()
}
```
```javascript
Node.prototype.visit = function () {
    if (this != null) {
        console.log(this.data);
        if (this.next != null) {
            this.next.visit();
        }
    }
}
```
![List](https://github.com/ilavisharma/singlyLinkedList/blob/master/assets/images/list_traverse.PNG)

### Insertion of new node
If the first node is null then it becomes the starting node.
```javascript
LinkedList.prototype.add = function (value) {
    var n = new Node(value);
    if (this.start == null) {
        this.start = n;
    } else {
        this.start.addNode(n);
    }
}
```
Or else it will be one of the following next node of the start.
```javascript
Node.prototype.addNode = function (n) {
    if (this.next == null) {
        this.next = n;
    } else {
        this.next.addNode(n);
    }
};
```
![List](https://github.com/ilavisharma/singlyLinkedList/blob/master/assets/images/list_insert.PNG)
### Deletion
In case of deletion two situations arise which are
1. If the node to be deleted is the start node or the **fisrt node**
   ```javascript
   LinkedList.prototype.delete = function (value) {
    if (this.start.data == value) {
        var tempNode = this.start;
        this.start = tempNode.next;
        }
    }
    ```
![List](https://github.com/ilavisharma/singlyLinkedList/blob/master/assets/images/list_delete_start.PNG)
2. If the node to be deleted is in between somewhere
   ```javascript
   LinkedList.prototype.delete = function (value) {
        if (this.start.data == value) {
            var tempNode = this.start;
            this.start = tempNode.next;
        } else {
            this.start.delete(value);
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
![List](https://github.com/ilavisharma/singlyLinkedList/blob/master/assets/images/list_delete.PNG)
