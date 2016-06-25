'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * LinkedList: represents a (singly, non-circular) linked list.
 */

var LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = undefined;
  }

  /**
   * Return the head node of the linked list.
   * @return {Node} true if any vertex has this value else false
   */


  _createClass(LinkedList, [{
    key: 'getHead',
    value: function getHead() {
      return this.head;
    }

    /**
     * Sets the node at the head of the LinkedList to the node provided.
     * @param {Node} value to find in the graph.
     * @return {void}
     */

  }, {
    key: 'setHead',
    value: function setHead(node) {
      this.head = node;
    }

    /**
     * @param {element} creates a new Node with element as value and appends to end of LinkedList
     * @return {void}
     */

  }, {
    key: 'append',
    value: function append(element) {
      var node = new _Node2.default(element);
      if (!this.getHead()) {
        this.setHead(node);
      } else {
        var lastElement = this.getLastNode();
        lastElement.setNext(node);
      }
    }

    /**
     * Inserts a new Node with element value at specified position LinkedList. Index begins at 0.
     * @param index {Number} position in LinkedList at which to insert new element
     * @param {element} creates a new Node with element as value and appends to end of LinkedList
     * @return {void}
     */

  }, {
    key: 'insert',
    value: function insert(index, element) {
      var nodeToInsert = new _Node2.default(element);
      if (index === 0) {
        // we're inserting at the head of the list
        var currentHead = this.getHead();
        if (currentHead) {
          nodeToInsert.setNext(currentHead);
          this.setHead(nodeToInsert);
        }
      } else {
        var previousNode = this.getNodeAtIndex(index - 1);
        if (previousNode) {
          // get next node in the list if there is one
          var nodeAtIndex = previousNode.getNext();
          // set next node to our new node
          previousNode.setNext(nodeToInsert);
          if (nodeAtIndex) {
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

  }, {
    key: 'getNodeAtIndex',
    value: function getNodeAtIndex(index) {
      if (this.isEmpty()) {
        return undefined;
      }
      var currentIndex = void 0,
          currentNode = this.getHead();
      for (currentIndex = 1; currentIndex <= index; currentIndex++) {
        currentNode = currentNode.getNext();
        if (typeof currentNode === 'undefined') {
          break;
        }
      }
      return currentNode;
    }

    /**
     * Retrieves the final element in the list.
     * @return {Node}
     */

  }, {
    key: 'getLastNode',
    value: function getLastNode() {
      var lastNode = this.getHead();
      while (lastNode.hasNext()) {
        lastNode = lastNode.getNext();
      }
      return lastNode;
    }

    /**
     * Returns true if the list contains zero nodes.
     * @return {Boolean}
     */

  }, {
    key: 'isEmpty',
    value: function isEmpty(element) {
      if (!this.getHead()) {
        return true;
      }
      return false;
    }

    /**
     * Returns the count of the number of nodes in the list
     * @return {Number}
     */

  }, {
    key: 'count',
    value: function count() {
      if (this.isEmpty()) {
        return 0;
      } else {
        var lastIndex = 1;
        var lastNode = this.getHead();
        while (lastNode.hasNext()) {
          lastNode = lastNode.getNext();
          lastIndex++;
        }
        return lastIndex;
      }
    }
  }]);

  return LinkedList;
}();

exports.default = LinkedList;