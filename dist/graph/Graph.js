'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Edge = require('./Edge');

var _Edge2 = _interopRequireDefault(_Edge);

var _Vertex = require('./Vertex');

var _Vertex2 = _interopRequireDefault(_Vertex);

var _DuplicateVertexError = require('./DuplicateVertexError');

var _DuplicateVertexError2 = _interopRequireDefault(_DuplicateVertexError);

var _DuplicateEdgeError = require('./DuplicateEdgeError');

var _DuplicateEdgeError2 = _interopRequireDefault(_DuplicateEdgeError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Graph: represents a undirected graph data structure.
 * Usage: let graph = new Graph();
 *        graph.addVertex('A');
 *        graph.addVertex('B');
 *        graph.addEdge('A','B');
 */

var Graph = function () {
  function Graph() {
    _classCallCheck(this, Graph);

    this._vertices = [];
    this._edges = [];
  }

  /**
   * @return {Array} array of all Vertex instances in this graph.
   */


  _createClass(Graph, [{
    key: 'getVertices',
    value: function getVertices() {
      return this._vertices;
    }

    /**
     * @param {value} value to find in the graph.
     * @return {Boolean} true if any vertex has this value else false
     */

  }, {
    key: 'hasVertexWithValue',
    value: function hasVertexWithValue(value) {
      var vertexValues = this.getVertexValues();
      return !!~vertexValues.indexOf(value);
    }

    /**
     * @return {Array} array of values in all graph vertices.
     */

  }, {
    key: 'getVertexValues',
    value: function getVertexValues() {
      return this._vertices.map(function (vertex) {
        return vertex.getValue();
      });
    }

    /**
     * @param {value} value to set on the vertex
     * @throws {DuplicateVertexError} when adding vertex whose value exists in graph.
     * @return {Graph} current instance of graph.
     */

  }, {
    key: 'addVertex',
    value: function addVertex(value) {
      var vertex_class = arguments.length <= 1 || arguments[1] === undefined ? _Vertex2.default : arguments[1];

      if (this.hasVertexWithValue(value)) {
        throw new _DuplicateVertexError2.default("Cannot add duplicate value '" + value.toString() + "' to graph.");
      } else {
        var vertex = new vertex_class(value);
        this._vertices.push(vertex);
      }
      return this;
    }

    /**
     * @param {values} array of values to add to the graph
     * @return {Graph} current instance of graph.
     */

  }, {
    key: 'addVerticies',
    value: function addVerticies(values) {
      var _this = this;

      values.forEach(function (value) {
        _this.addVertex(value);
      });
      return this;
    }

    /**
     * @param {value} value
     * @return {Vertex} instance of Vertex in graph with value, else undefined
     */

  }, {
    key: 'getVertexByValue',
    value: function getVertexByValue(value) {
      var vertices = this.getVertices();
      var matching = vertices.filter(function (vertex) {
        return vertex.value === value;
      });

      if (matching.length > 0) {
        return matching[0];
      }

      return undefined;
    }

    /**
     * @param {startVertex} Vertex (or value of Vertex) in graph to start
     * @param {endVertex} Vertex (or value of Vertex) in graph to end
     * @throws {DuplicateEdgeError} when adding edge whose value exists in graph.
     * @return {Graph} current instance of graph.
     */

  }, {
    key: 'addEdge',
    value: function addEdge(startVertex, endVertex) {
      if (!(startVertex instanceof _Vertex2.default)) {
        startVertex = this.getVertexByValue(startVertex);
      }

      if (!(endVertex instanceof _Vertex2.default)) {
        endVertex = this.getVertexByValue(endVertex);
      }

      if (this.hasEdge(startVertex.value, endVertex.value)) {
        throw new _DuplicateEdgeError2.default("Cannot add duplicate edge between '" + startVertex.value + "' and '" + endVertex.value + "' to graph.");
      }

      var edge = new _Edge2.default(startVertex, endVertex);
      this._edges.push(edge);

      // since this undirected graph, edges must go both ways
      var reverseEdge = new _Edge2.default(endVertex, startVertex);
      this._edges.push(reverseEdge);

      return this;
    }

    /**
     * @return {Array} array of Edge instances present in Graph.
     */

  }, {
    key: 'getEdges',
    value: function getEdges() {
      return this._edges;
    }

    /**
     * @param {startValue} start value of edge to locate
     * @param {endValue} end value of edge to locate
     * @return {Edge} returns Edge instance in Graph if exists, otherwise returns undefined
     */

  }, {
    key: 'getEdgeByValues',
    value: function getEdgeByValues(startValue, endValue) {
      var edges = this.getEdges();
      var matching = edges.filter(function (edge) {
        return edge.startVertex.value === startValue && edge.endVertex.value === endValue;
      });

      if (matching.length > 0) {
        return matching[0];
      }

      return undefined;
    }

    /**
     * @param {startVertex} start value of edge to locate
     * @param {endVertex} end value of edge to locate
     * @return {Boolean} true if any edge has these start and end values else false
     */

  }, {
    key: 'hasEdge',
    value: function hasEdge(startVertex, endVertex) {
      return !!this.getEdgeByValues(startVertex, endVertex);
    }

    /**
     * @return {Array} array of arrays; each entry represents adjacency for row;
     *         each entry in each sub-array represents adjacency for column;
     *         if A[i][j] = 1, there is an edge from i to j.
     */

  }, {
    key: 'getAdjacencyMatrix',
    value: function getAdjacencyMatrix() {
      var matrix = [];
      var vertices = this.getVertices();
      // where N = number of vertices, initialize N X N zero matrix
      vertices.forEach(function (vertex) {
        matrix.push(new Array(vertices.length).fill(0));
      });

      // if edge exists for A[i][j] (and A[j][i]) set cell to 1
      var edges = this.getEdges();
      var vertexValues = this.getVertexValues();
      edges.forEach(function (edge) {
        var startValue = edge.startVertex.value;
        var endValue = edge.endVertex.value;
        var startIndex = vertexValues.indexOf(startValue);
        var endIndex = vertexValues.indexOf(endValue);
        matrix[startIndex][endIndex] = 1;
        matrix[endIndex][startIndex] = 1;
      });
      return matrix;
    }

    /**
     * @return {Array} given Vertex A, return all values from vertices connected to A by edges.
     */

  }, {
    key: 'getEdgesByVertex',
    value: function getEdgesByVertex(vertex) {
      if (!(vertex instanceof _Vertex2.default)) {
        vertex = this.getVertexByValue(vertex);
      }

      var edges = this.getEdges();
      var matching = edges.filter(function (edge) {
        return edge.startVertex.value === vertex.value;
      });

      return matching.map(function (edge) {
        return edge.endVertex.value;
      });
    }

    /**
     * @return {Object} each Object key represents a vertex in graph;
     * value at each key is an array of vertex values found in edge destinations.
     */

  }, {
    key: 'getAdjacencyList',
    value: function getAdjacencyList() {
      var _this2 = this;

      var list = {};
      var vertices = this.getVertices();
      vertices.forEach(function (vertex) {
        list[vertex.value] = _this2.getEdgesByVertex(vertex);
      });
      return list;
    }
  }]);

  return Graph;
}();

exports.default = Graph;