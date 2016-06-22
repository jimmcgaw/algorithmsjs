import {expect} from 'chai';

import Node from '../../src/linkedlist/Node';

describe('Node', function () {
  let node, defaultElement = 'A';

  beforeEach(function () {
    node = new Node(defaultElement);
  });

  describe('#constructor', function () {
    it('sets the value of the new Node', function () {
      expect(node.element).to.equal(defaultElement);
      expect(node.next).to.equal(undefined);
      expect(node.previous).to.equal(undefined);
    });
  });

  describe('#hasNext', function () {
    it('returns true if node has a next element set', function () {
      let nextNode = new Node('B');
      expect(node.hasNext()).to.equal(false);
      node.setNext(nextNode);
      expect(node.hasNext()).to.equal(true);
    });
  });

  describe('#getNext', function () {
    it('returns the next node of the element if there is one', function () {
      expect(node.getNext()).to.equal(undefined);
      let nextNode = new Node('B');
      node.setNext(nextNode);
      expect(node.getNext().element).to.equal(nextNode.element);
    });
  });

  describe('#setNext', function () {
    it('sets the next node of the element', function () {
      let nextNode = new Node('B');
      node.setNext(nextNode);
      expect(node.getNext().element).to.equal(nextNode.element);
    });
  })


})
