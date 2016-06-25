"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Node: an element to append or insert into a LinkedList
 * Usage: let node = new Node('A');
 *        let nextNode = new Node('B');
 *        node.setNext(nextNode);
 */

var Node = function () {
  function Node(element) {
    _classCallCheck(this, Node);

    this.element = element;
    this.next = undefined;
    this.previous = undefined; // for doubly linked excitement!
  }

  /**
   * Set the next node of this node to the Node instance provided.
   * @param {Node} The node to set as the next.
   * @return {void}
   */


  _createClass(Node, [{
    key: "setNext",
    value: function setNext(node) {
      this.next = node;
    }

    /**
     * Get the next node of this node to the Node instance provided.
     * @return {Node} the next node, if present.
     */

  }, {
    key: "getNext",
    value: function getNext() {
      return this.next;
    }

    /**
     * Returns true if the node has a next node specified.
     * @return {Boolean}
     */

  }, {
    key: "hasNext",
    value: function hasNext() {
      return !!this.next;
    }
  }]);

  return Node;
}();

exports.default = Node;