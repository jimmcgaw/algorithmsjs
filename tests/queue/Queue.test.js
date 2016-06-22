import {expect} from 'chai';

import Queue from '../../src/queue/Queue';

describe('Queue', function () {
  let queue;

  beforeEach(function () {
    queue = new Queue();
  });

  describe('#enqueue', function () {
    it('pushes an item onto the front of the queue', function () {
      queue.enqueue('A');
      queue.enqueue('B');
      expect(queue.count()).to.equal(2);
    });
  });

  describe('#dequeue', function () {
    it('retrieves the first item enqueued in the queue', function () {
      let items = ['A', 'B', 'C'];
      items.forEach((item) => {
        queue.enqueue(item);
      });
      expect(queue.dequeue()).to.equal(items[0]);
      expect(queue.count()).to.equal(items.length-1);
    });

    it('returns undefined if queue is empty', function () {
      expect(queue.isEmpty()).to.equal(true);
      expect(queue.dequeue()).to.equal(undefined);
    });
  });

  describe('#isEmpty', function () {
    it('returns true if queue is empty else false', function () {
      expect(queue.isEmpty()).to.equal(true);
      queue.enqueue('A');
      expect(queue.isEmpty()).to.equal(false);
    });
  });

  describe('#clear', function () {
    it('clears out all items in the Queue', function () {
      queue.enqueue('A');
      queue.enqueue('B');
      queue.clear();
      expect(queue.isEmpty()).to.equal(true);
    });
  });

  describe('#count', function () {
    it('returns the count of the number of items currently in the Queue', function () {
      let items = ['A', 'B', 'C'];
      items.forEach((item) => {
        queue.enqueue(item);
      });
      expect(queue.count()).to.equal(items.length);
    });
  })
})
