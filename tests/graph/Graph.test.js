import { expect } from 'chai';

import Graph from '../../src/graph/Graph';
import Edge from '../../src/graph/Edge';
import Vertex from '../../src/graph/Vertex';
import DuplicateVertexError from '../../src/graph/DuplicateVertexError';

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

  describe('#hasVertexWithValue', () => {
    it('returns false if graph does not have Vertex with supplied value', function () {
      graph.addVertex('B');
      expect(graph.hasVertexWithValue('C')).to.equal(false);
    });

    it('returns true if graph has Vertex with supplied value', function () {
      graph.addVertex('B');
      expect(graph.hasVertexWithValue('B')).to.equal(true);
    });
  })

  describe('#addVertex', () => {
    it('adds a vertex to the graph', function () {
      graph.addVertex('A');
      expect(graph.getVertices().length).to.equal(1);
      graph.addVertex('B');
      expect(graph.getVertices().length).to.equal(2);
    });

    it('prevents adding duplicates', function () {
      graph.addVertex('A');
      expect(() => {
        graph.addVertex('A');
      }).to.throw(/Cannot add duplicate value 'A' to graph/);

    });
  });

  describe('#addVerticies', function () {
    it('adds an array of values to the graph', function () {
      var values = ['A', 'B', 'C', 'D'];
      graph.addVerticies(values);
      expect(graph.getVertices().length).to.equal(values.length);
    });
  })

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

  describe('#getVertexByValue', function () {
    it('fetches a Vertex instance by its value', function () {
      graph.addVerticies(['A', 'B', 'C', 'D']);
      var vertex = graph.getVertexByValue('A');
      expect(vertex).to.be.an.instanceof(Vertex);
    });

    it('returns undefined if vertex with value is not in graph', function () {
      graph.addVerticies(['A', 'B', 'C', 'D']);
      var vertex = graph.getVertexByValue('E');
      expect(vertex).to.equal(undefined);
    });
  })

  describe('#addEdge', function () {
    it('adds an edge between the two vertices provided', function () {
      graph.addVertex('A');
      graph.addVertex('B');

      graph.addEdge('A', 'B');
      let edges = graph.getEdges();

      expect(edges.length).to.equal(2);
    });

    it('throws an Error if we are trying to add a duplicate edge', function () {
      graph.addVertex('A');
      graph.addVertex('B');

      graph.addEdge('A', 'B');

      expect(() => {
        graph.addEdge('A', 'B');
      }).to.throw(/Cannot add duplicate edge between/);
      // added edges are symmetrical
      expect(() => {
        graph.addEdge('B', 'A');
      }).to.throw(/Cannot add duplicate edge between/);
    });
  });

  describe('#getEdgeByValues', function () {
    it('returns the edge from the graph if present', function () {
      graph.addVertex('A');
      graph.addVertex('B');

      expect(graph.getEdgeByValues('A', 'B')).to.equal(undefined);

      graph.addEdge('A', 'B');

      let edge = graph.getEdgeByValues('A', 'B');
      expect(edge).to.be.an.instanceof(Edge);
    });
  })

  describe('#hasEdge', function () {
    it('returns true if the edge queried has been added to graph', function () {
      graph.addVertex('A');
      graph.addVertex('B');

      expect(graph.hasEdge('A', 'B')).to.equal(false);

      graph.addEdge('A', 'B');

      expect(graph.hasEdge('A', 'B')).to.equal(true);
      // undirected graph, so opposite relationship must also exist
      expect(graph.hasEdge('B', 'A')).to.equal(true);
    });
  })
});
