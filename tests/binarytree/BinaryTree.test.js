import {expect} from 'chai';

import BinaryTree from '../../src/binarytree/BinaryTree';

describe('BinaryTree', function () {
  let binaryTree;

  beforeEach(function () {
    binaryTree = new BinaryTree();
  });

  describe('#hasRootNode', function () {
    it('returns true if at least one node has been added to the tree', function () {
      binaryTree.insert(10);
      binaryTree.insert(8);
      binaryTree.insert(13);
      expect(binaryTree.hasRootNode()).to.equal(true);
    });
  })


  describe('#insert', function () {
    it('adds the root node', function () {
      binaryTree.insert(10);
      expect(binaryTree.getRootNode().getValue()).to.equal(10);
    });

    it('adds several nodes to the tree', function () {
      binaryTree.insert(10);
      binaryTree.insert(5);
      binaryTree.insert(15);
      binaryTree.insert(3);
      binaryTree.insert(7);
      binaryTree.insert(2);
      let rootNode = binaryTree.getRootNode();
      expect(rootNode.getValue()).to.equal(10);
      expect(rootNode.getLeftChild().getValue()).to.equal(5);
      expect(rootNode.getRightChild().getValue()).to.equal(15);
      expect(rootNode.getLeftChild().getLeftChild().getValue()).to.equal(3);
      expect(rootNode.getLeftChild().getLeftChild().getLeftChild().getValue()).to.equal(2);
      expect(rootNode.getLeftChild().getRightChild().getValue()).to.equal(7);
    });
  })
})
