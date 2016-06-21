import { expect } from 'chai';

import Graph from '../src/Graph';
import Vertex from '../src/Vertex';

describe('Graph', () => {
  let graph;
  beforeEach(function () {
    graph = new Graph();
  });
  it('initializes an empty graph with no vertices or edges', function () {
    var vertices = graph.getVertices();
    expect(vertices).to.be.an.instanceof(Array);
    expect(vertices.length).to.equal(0);
  });

  describe('#addVertex', () => {
    it('adds a vertex to the graph', function () {
      graph.addVertex('A');
      expect(graph.getVertices().length).to.equal(1);
      graph.addVertex('B');
      expect(graph.getVertices().length).to.equal(2);
    });
  });

  describe('#getVertexValues', function () {
    it('returns the values of the vertices added', function () {
      graph.addVertex('A');
      graph.addVertex('B');
      expect(graph.getVertexValues()).to.include.members(['A', 'B']);
    });
  });

  describe('#getVertices', function () {
    it('returns the vertices of the graph as Vertex instances', function () {
      graph.addVertex('A');
      graph.addVertex('B');
      expect(graph.getVertices()).to.deep.include.members([new Vertex('A'), new Vertex('B')]);
    });
  });
});
