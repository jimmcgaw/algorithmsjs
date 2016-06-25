"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Stack: FIFO data structure
 * Usage: let queue = new Queue();
 *        queue.enqueue('A');
 *        queue.enqueue('B');
 *        queue.dequeue();  => A'
 */

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this._items = [];
  }

  /**
   * Enqueues an item to the front of the Queue.
   * @param {item} item to set on the vertex
   * @return {Queue} current instance of graph.
   */


  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(item) {
      this._items.push(item);
      return this;
    }

    /**
     * Dequeues the oldest item enqueued into the queue.
     * @return {<Item>}
     */

  }, {
    key: "dequeue",
    value: function dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this._items.splice(0, 1)[0];
    }

    /**
     * Returns true if the Queue contains no items, otherwise false.
     * @return {Boolean}
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.count() === 0;
    }

    /**
     * Returns the current count of the items in the Queue.
     * @return {Number}
     */

  }, {
    key: "count",
    value: function count() {
      return this._items.length;
    }

    /**
     * Clears all items currently in the queue
     * @return {void}
     */

  }, {
    key: "clear",
    value: function clear() {
      this._items.length = 0;
    }
  }]);

  return Queue;
}();

exports.default = Queue;