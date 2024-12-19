
class Node {
    constructor(value) {
        this.value = value; 
        this.next = null;    
    }
}

// Define LinkedList class
class LinkedList {
    constructor() {
        this.head = null;  
        this.size = 0;     
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode; 
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode; 
        }
        this.size++;
    }

    
    remove(value) {
        if (this.head === null) return false; 

        if (this.head.value === value) { 
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        if (current.next === null) return false; 

        current.next = current.next.next;
        this.size--;
        return true;
    }

    
    find(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    
    print() {
        let current = this.head;
        console.log("Linked List:");
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }


    getSize() {
        console.log(`Size of the Linked List: ${this.size}`);
    }
}


const list = new LinkedList();
list.append("Data Structures – Array");
list.append("Variable Type – Integer");
list.append("Sorting Algorithm – Bubble Sort");

list.print();
list.getSize();

console.log("\nFinding a node:");
console.log(list.find("Variable Type – Integer"));
console.log("\nRemoving a node:");
list.remove("Variable Type – Integer"); 
list.print(); 
list.getSize();