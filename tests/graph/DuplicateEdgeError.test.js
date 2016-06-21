import { expect } from 'chai';

import DuplicateEdgeError from '../../src/graph/DuplicateEdgeError';

describe('DuplicateEdgeError', function () {
  let error;

  beforeEach(function () {
    error = new DuplicateEdgeError("Cannot add duplicate edge to graph");
  });

  it('has the correct error message', function () {
    expect(error.message).to.equal("Cannot add duplicate edge to graph");
    expect(error.name).to.equal("DuplicateEdgeError");
  });
})
