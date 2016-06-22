/**
 * Stack: FIFO data structure
 * Usage: let queue = new Queue();
 *        queue.enqueue('A');
 *        queue.enqueue('B');
 *        queue.dequeue();  => A'
 */
class Queue {
  constructor(){
    this._items = [];
  }

  /**
   * Enqueues an item to the front of the Queue.
   * @param {item} item to set on the vertex
   * @return {Queue} current instance of graph.
   */
  enqueue(item){
    this._items.push(item);
    return this;
  }

  /**
   * Dequeues the oldest item enqueued into the queue.
   * @return {<Item>}
   */
  dequeue(){
    if (this.isEmpty()){
      return undefined;
    }
    return this._items.splice(0, 1)[0];
  }

  /**
   * Returns true if the Queue contains no items, otherwise false.
   * @return {Boolean}
   */
  isEmpty(){
    return this.count() === 0;
  }

  /**
   * Returns the current count of the items in the Queue.
   * @return {Number}
   */
  count(){
    return this._items.length;
  }

  /**
   * Clears all items currently in the queue
   * @return {void}
   */
   clear(){
     this._items.length = 0;
   }
}

export default Queue;
