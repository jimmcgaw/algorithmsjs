/**
 * Node: an element to append or insert into a LinkedList
 * Usage: let node = new Node('A');
 *        let nextNode = new Node('B');
 *        node.setNext(nextNode);
 */
class Node {
  constructor(element){
    this.element = element;
    this.next = undefined;
    this.previous = undefined; // for doubly linked excitement!
  }

  /**
   * Set the next node of this node to the Node instance provided.
   * @param {Node} The node to set as the next.
   * @return {void}
   */
  setNext(node){
    this.next = node;
  }

  /**
   * Get the next node of this node to the Node instance provided.
   * @return {Node} the next node, if present.
   */
  getNext(){
    return this.next;
  }

  /**
   * Returns true if the node has a next node specified.
   * @return {Boolean}
   */
  hasNext(){
    return !!this.next;
  }
}

export default Node;
