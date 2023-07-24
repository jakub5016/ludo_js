// class Node {
//     constructor(data, isLast) {
//         this.head = data;
//         this.data = data;
//         this.next = null;
//         this.tail = data
//     }
//     insertAtEnd(newData){
//         this.next = Node(newData)
//     }
// }

// let one = new Node(3);
// let two = new Node(5);
// let three = new Node(9);

// // Connect nodes
// one.next = two;
// two.next = three;
// three.next = one;


// const red_movment_table= [{left:4, top:1}, {left:0, top:1}, {left:0, top:1}]

// console.log(red_movment_table[0]['left'])

/**
 *
 */
class circularLinkedList{
    constructor(data){
        this.data = data
    }

    getData(index){
        while (true) {
            if (index < (this.data.length)){
                return this.data[index]
            }
            else{
                index = index - this.data.length
            }
        }
    }

}


myArray = [3,4,5]
linkedList = new circularLinkedList(myArray)
console.log(linkedList.getData(6))
