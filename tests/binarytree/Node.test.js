import {expect} from 'chai';

import Node from '../../src/binarytree/Node';

describe('Node', function () {
  let node,
      rootValue = 10;

  beforeEach(function () {
    node = new Node(rootValue);
  });

  describe('left child', function () {
    it('sets the value of the left child to node with provided value', function () {
      var child = new Node(8);
      node.setLeftChild(child);
      expect(node.getLeftChild().getValue()).to.equal(child.getValue());
      expect(node.hasLeftChild()).to.equal(true);
    });
  });

  describe('right child', function () {
    it('sets the value of the right child to node with provided value', function () {
      var child = new Node(13);
      node.setRightChild(child);
      expect(node.getRightChild().getValue()).to.equal(child.getValue());
      expect(node.hasRightChild()).to.equal(true);
    });
  });


})
