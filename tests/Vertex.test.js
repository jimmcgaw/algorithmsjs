import { expect } from 'chai';

import Vertex from '../src/Vertex';

describe('Vertex', () => {
  let vertex, defaultValue = 'ABC';

  beforeEach(function () {
    vertex = new Vertex(defaultValue);
  });

  it('sets the vertex with the value provided', function () {
    expect(vertex.getValue()).to.equal(defaultValue);
  });
});
