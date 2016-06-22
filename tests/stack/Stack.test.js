import { expect } from 'chai';

import Stack from '../../src/stack/Stack';
import StackEmptyError from '../../src/stack/StackEmptyError';

describe('Stack', function () {
  let stack;

  beforeEach(function () {
    stack = new Stack();
  });

  it('initializes an empty stack', function () {
    expect(stack).to.be.an.instanceof(Stack);
  });

  describe('#count', function () {
    it('returns the count of items on the stack', function () {
      let items = ['A', 'B', 'C'];
      items.forEach((item) => {
        stack.push(item);
      });

      expect(stack.count()).to.equal(items.length);
    });
  })

  describe('#push', function () {
    it('pushes an item onto the Stack', function () {
      stack.push('A');
      expect(stack.count()).to.equal(1);
    });
  });

  describe('#pop', function () {
    it('returns the last item pushed onto the Stack', function () {
      let items = ['A', 'B', 'C'];
      items.forEach((item) => {
        stack.push(item);
      });

      var popped = stack.pop();
      expect(popped).to.equal(items[items.length-1]);
      expect(stack.count()).to.equal(items.length-1)
    });

    it('raises StackEmptyError error if stack is popped while empty', function () {
      expect(() => {
        stack.pop();
      }).to.throw(/Cannot pop from empty stack/);
    });
  });

  describe('#clear', function () {
    it('clears out all items in the Stack', function () {
      stack.push('A');
      stack.clear();
      expect(stack.isEmpty()).to.equal(true);
    });
  })

  describe('#isEmpty', function () {
    it('returns true for an empty Stack', function () {
      expect(stack.isEmpty()).to.equal(true);
    });

    it('returns false for a Stack with at least one item', function () {
      stack.push('A');
      expect(stack.isEmpty()).to.equal(false);
    });
  });


  describe('#print', function () {
    it('prints out the stack items', function () {
      stack.push('A');
      stack.push('B');
      expect(stack.print()).to.equal("Stack: A,B");
    });
  })
})
