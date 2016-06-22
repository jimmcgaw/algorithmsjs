import {expect} from 'chai';

import LinkedList from '../../src/linkedlist/LinkedList';
import Node from '../../src/linkedlist/Node';

describe('LinkedList', function () {
  let linkedList;

  beforeEach(function () {
    linkedList = new LinkedList();
  });

  describe('#constructor', function () {
    it('initializes the state of the linked list', function () {
      expect(linkedList.head).to.equal(undefined);
    });
  });

  describe('#append', function () {
    it('appends the first element to the head of an empty LinkedList', function () {
      expect(linkedList.isEmpty()).to.equal(true);
      linkedList.append('A');
      expect(linkedList.head.element).to.equal('A');
      expect(linkedList.isEmpty()).to.equal(false);
    });

    it('appends a new element to the end of the LinkedList', function () {
      let items = ['A', 'B', 'C', 'D'];
      items.forEach((item) => {
        linkedList.append(item);
      });

      expect(linkedList.head.element).to.equal(items[0]);
      expect(linkedList.getLastNode().element).to.equal(items[items.length-1]);
    });
  });

  describe('#insert', function () {
    it('inserts node at a specified index in the linked list', function () {
      let items = ['A', 'B', 'D', 'E'];
      items.forEach((item) => {
        linkedList.append(item);
      });

      linkedList.insert(2, 'C');
      let nodeAtIndex = linkedList.getNodeAtIndex(2);
      expect(nodeAtIndex.element).to.equal('C');
      expect(nodeAtIndex.getNext().element).to.equal('D');
    });

    it('inserts node at a specified index in the linked list', function () {
      let items = ['A', 'C', 'D', 'E'];
      items.forEach((item) => {
        linkedList.append(item);
      });

      linkedList.insert(1, 'B');
      let nodeAtIndex = linkedList.getNodeAtIndex(1);
      expect(nodeAtIndex.element).to.equal('B');
      expect(nodeAtIndex.getNext().element).to.equal('C');
    });

    it('inserts an item at the head of the list if index is 0', function () {
      let items = ['B', 'C', 'D'];
      items.forEach((item) => {
        linkedList.append(item);
      });

      linkedList.insert(0, 'A');
      expect(linkedList.getHead().element).to.equal('A');
      let nodeAtIndex = linkedList.getNodeAtIndex(1);
      expect(nodeAtIndex.element).to.equal(items[0]);
    });

    it('inserts node at end of list', function () {
      let items = ['A', 'B', 'C', 'D'];
      items.forEach((item) => {
        linkedList.append(item);
      });

      linkedList.insert(4, 'E');
      let nodeAtIndex = linkedList.getNodeAtIndex(4);
      expect(nodeAtIndex.element).to.equal('E');
      expect(nodeAtIndex.getNext()).to.equal(undefined);
    });
  })

  describe('#getLastNode', function () {
    it('returns the last node in the LinkedList', function () {
      let items = ['A', 'B', 'C', 'D'];
      items.forEach((item) => {
        linkedList.append(item);
      });
      expect(linkedList.getLastNode().element).to.equal(items[items.length-1]);
      expect(linkedList.getLastNode().getNext()).to.equal(undefined);
    });
  });

  describe('#getNodeAtIndex', function () {
    it('returns the node at the given index', function () {
      let items = ['A', 'B', 'C', 'D'];
      items.forEach((item) => {
        linkedList.append(item);
      });

      let node = linkedList.getNodeAtIndex(3);
      expect(node.element).to.equal(items[items.length-1]);
    });

    it('returns the node the head given zero index', function () {
      let items = ['A', 'B', 'C', 'D'];
      items.forEach((item) => {
        linkedList.append(item);
      });

      let node = linkedList.getNodeAtIndex(0);
      expect(node.element).to.equal(linkedList.getHead().element);
    });

    it('returns undefined for an index that is out of range', function () {
      let items = ['A', 'B', 'C', 'D'];
      items.forEach((item) => {
        linkedList.append(item);
      });

      let node = linkedList.getNodeAtIndex(5);
      expect(node).to.equal(undefined);
    });
  })

  describe('#isEmpty', function () {
    it('returns true if the LinkedList is empty', function () {
      expect(linkedList.isEmpty()).to.equal(true);
    });

    it('returns false if we append to the linkedList', function () {
      linkedList.append('A');
      expect(linkedList.isEmpty()).to.equal(false);
    });
  })
})
