import { expect } from 'chai';

import DuplicateVertexError from '../../src/graph/DuplicateVertexError';

describe('DuplicateVertexError', function () {
  let error;

  beforeEach(function () {
    error = new DuplicateVertexError("Cannot add duplicate to graph");
  });

  it('has the correct error message', function () {
    expect(error.message).to.equal("Cannot add duplicate to graph");
    expect(error.name).to.equal("DuplicateVertexError");
  });
})
