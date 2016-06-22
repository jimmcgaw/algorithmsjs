import StackEmptyError from './StackEmptyError';

/**
 * Stack: LIFO data structure
 * Usage: let stack = new Stack();
 *        stack.push('A');
 *        stack.push('B');
 *        stack.pop();  => B'
 */
class Stack {
  constructor(){
    this._items = [];
  }

  /**
   * @param {value} pushes value onto the top of the Stack
   * @return {void}
   */
  push(item){
    this._items.push(item);
  }

  /**
   * @param {value} returns last value pushed onto Stack; modifies Stack items in-place
   * @throws {StackEmptyError} if stack is empty.
   * @return {<Item>} last value pushed onto Stack.
   */
  pop(){
    if (this.isEmpty()){
      throw new StackEmptyError("Cannot pop from empty stack");
    }
    return this._items.splice(this._items.length-1)[0];
  }

  /**
   * @return {Number} number of items currently on the stack
   */
  count(){
    return this._items.length;
  }

  /**
   * Clears out all items from the Stack.
   * @return {void}
   */
  clear(){
    this._items.length = 0;
  }

  /**
   * @return {Boolean} true if Stack is empty, otherwise false.
   */
  isEmpty(){
    return this._items.length === 0;
  }

  /**
   * @return {String} string representation of the Stack structure
   */
  print(){
    return "Stack: " + this._items.toString();
  }
}

export default Stack;
