import Node from './Node';

/**
 * LinkedList: represents a (singly, non-circular) linked list.
 */
class LinkedList {
  constructor(){
    this.head = undefined;
  }

  /**
   * Return the head node of the linked list.
   * @return {Node} true if any vertex has this value else false
   */
  getHead(){
    return this.head;
  }

  /**
   * Sets the node at the head of the LinkedList to the node provided.
   * @param {Node} value to find in the graph.
   * @return {void}
   */
  setHead(node){
    this.head = node;
  }

  /**
   * @param {element} creates a new Node with element as value and appends to end of LinkedList
   * @return {void}
   */
  append(element){
    let node = new Node(element);
    if (!this.getHead()){
      this.setHead(node);
    } else {
      let lastElement = this.getLastNode();
      lastElement.setNext(node);
    }
  }

  /**
   * Inserts a new Node with element value at specified position LinkedList. Index begins at 0.
   * @param index {Number} position in LinkedList at which to insert new element
   * @param {element} creates a new Node with element as value and appends to end of LinkedList
   * @return {void}
   */
  insert(index, element){
    let nodeToInsert = new Node(element);
    if (index === 0){
      // we're inserting at the head of the list
      let currentHead = this.getHead();
      if (currentHead){
        nodeToInsert.setNext(currentHead);
        this.setHead(nodeToInsert);
      }
    } else {
      let previousNode = this.getNodeAtIndex(index-1);
      if (previousNode){
        // get next node in the list if there is one
        let nodeAtIndex = previousNode.getNext();
        // set next node to our new node
        previousNode.setNext(nodeToInsert);
        if (nodeAtIndex){
          // break the chain and insert
          nodeToInsert.setNext(nodeAtIndex);
        }
      }
    }
  }

  /**
   * Retrieves the node found at the provided index. If index is out of range or list is empty, returns undefined.
   * @param index {Number} position in LinkedList at which to retrieve the node.
   * @return {Node}
   */
  getNodeAtIndex(index){
    if (this.isEmpty()){
      return undefined;
    }
    let currentIndex,
        currentNode = this.getHead();
    for (currentIndex = 1; currentIndex <= index; currentIndex++){
      currentNode = currentNode.getNext();
      if (typeof currentNode === 'undefined'){
        break;
      }
    }
    return currentNode;
  }

  /**
   * Retrieves the final element in the list.
   * @return {Node}
   */
  getLastNode(){
    let lastNode = this.getHead();
    while (lastNode.hasNext()){
      lastNode = lastNode.getNext();
    }
    return lastNode;
  }

  /**
   * Returns true if the list contains zero nodes.
   * @return {Boolean}
   */
  isEmpty(element){
    if (!this.getHead()){
      return true;
    }
    return false;
  }
}

export default LinkedList;
