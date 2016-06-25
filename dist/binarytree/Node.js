"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
  function Node(value) {
    var isRootNode = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    _classCallCheck(this, Node);

    this._value = value;
    this._leftChild = undefined;
    this._rightChild = undefined;
  }

  _createClass(Node, [{
    key: "getValue",
    value: function getValue() {
      return this._value;
    }
  }, {
    key: "setLeftChild",
    value: function setLeftChild(node) {
      this._leftChild = node;
    }
  }, {
    key: "getLeftChild",
    value: function getLeftChild() {
      return this._leftChild;
    }
  }, {
    key: "hasLeftChild",
    value: function hasLeftChild() {
      return !!this._leftChild;
    }
  }, {
    key: "setRightChild",
    value: function setRightChild(node) {
      this._rightChild = node;
    }
  }, {
    key: "getRightChild",
    value: function getRightChild() {
      return this._rightChild;
    }
  }, {
    key: "hasRightChild",
    value: function hasRightChild() {
      return !!this._rightChild;
    }
  }]);

  return Node;
}();

exports.default = Node;