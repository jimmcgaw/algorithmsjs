"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StackEmptyError = require("./StackEmptyError");

var _StackEmptyError2 = _interopRequireDefault(_StackEmptyError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Stack: LIFO data structure
 * Usage: let stack = new Stack();
 *        stack.push('A');
 *        stack.push('B');
 *        stack.pop();  => B'
 */

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this._items = [];
  }

  /**
   * Appends an item to the top of the Stack.
   * @param {item} value to push onto the top of the Stack
   * @return {void}
   */


  _createClass(Stack, [{
    key: "push",
    value: function push(item) {
      this._items.push(item);
    }

    /**
     * returns last value pushed onto Stack; modifies Stack items in-place
     * @throws {StackEmptyError} if stack is empty.
     * @return {<Item>} last value pushed onto Stack.
     */

  }, {
    key: "pop",
    value: function pop() {
      if (this.isEmpty()) {
        throw new _StackEmptyError2.default("Cannot pop from empty stack");
      }
      return this._items.splice(this._items.length - 1)[0];
    }

    /**
     * Gets number of items currently on the stack.
     * @return {Number}
     */

  }, {
    key: "count",
    value: function count() {
      return this._items.length;
    }

    /**
     * Clears out all items from the Stack.
     * @return {void}
     */

  }, {
    key: "clear",
    value: function clear() {
      this._items.length = 0;
    }

    /**
     * Returns boolean value based on contents of stack.
     * @return {Boolean} true if Stack is empty, otherwise false.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.count() === 0;
    }

    /**
     * @return {String} string representation of the Stack structure
     */

  }, {
    key: "print",
    value: function print() {
      return "Stack: " + this._items.toString();
    }
  }]);

  return Stack;
}();

exports.default = Stack;