'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BinaryTree = function () {
  function BinaryTree() {
    _classCallCheck(this, BinaryTree);
  }

  _createClass(BinaryTree, [{
    key: 'contructor',
    value: function contructor() {
      this._rootNode = undefined;
    }
  }, {
    key: 'hasRootNode',
    value: function hasRootNode() {
      return !!this._rootNode;
    }
  }, {
    key: 'getRootNode',
    value: function getRootNode() {
      return this._rootNode;
    }
  }, {
    key: 'insert',
    value: function insert(value) {
      var node = new _Node2.default(value);
      if (!this.hasRootNode()) {
        this._rootNode = node;
      } else {
        this._addChildNode(value, this._rootNode);
      }
    }
  }, {
    key: '_addChildNode',
    value: function _addChildNode(value, parentNode) {
      if (value < parentNode.getValue()) {
        if (parentNode.hasLeftChild()) {
          this._addChildNode(value, parentNode.getLeftChild());
        } else {
          var node = new _Node2.default(value);
          parentNode.setLeftChild(node);
        }
      } else {
        if (parentNode.hasRightChild()) {
          this._addChildNode(value, parentNode.getRightChild());
        } else {
          var _node = new _Node2.default(value);
          parentNode.setRightChild(_node);
        }
      }
    }
  }]);

  return BinaryTree;
}();

exports.default = BinaryTree;