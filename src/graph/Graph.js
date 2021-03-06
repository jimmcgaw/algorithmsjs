import Edge from './Edge';
import Vertex from './Vertex';
import DuplicateVertexError from './DuplicateVertexError';
import DuplicateEdgeError from './DuplicateEdgeError';

/**
 * Graph: represents a undirected graph data structure.
 * Usage: let graph = new Graph();
 *        graph.addVertex('A');
 *        graph.addVertex('B');
 *        graph.addEdge('A','B');
 */
class Graph {
  constructor(){
    this._vertices = [];
    this._edges = [];
  }

  /**
   * @return {Array} array of all Vertex instances in this graph.
   */
  getVertices(){
    return this._vertices;
  }

  /**
   * @param {value} value to find in the graph.
   * @return {Boolean} true if any vertex has this value else false
   */
  hasVertexWithValue(value){
    var vertexValues = this.getVertexValues();
    return !!~vertexValues.indexOf(value);
  }

  /**
   * @return {Array} array of values in all graph vertices.
   */
  getVertexValues(){
    return this._vertices.map((vertex) => {
      return vertex.getValue();
    });
  }

  /**
   * @param {value} value to set on the vertex
   * @throws {DuplicateVertexError} when adding vertex whose value exists in graph.
   * @return {Graph} current instance of graph.
   */
  addVertex(value, vertex_class=Vertex){
    if (this.hasVertexWithValue(value)){
      throw new DuplicateVertexError("Cannot add duplicate value '" + value.toString() + "' to graph.");
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
  addVerticies(values){
    values.forEach((value) => {
      this.addVertex(value);
    });
    return this;
  }

  /**
   * @param {value} value
   * @return {Vertex} instance of Vertex in graph with value, else undefined
   */
  getVertexByValue(value){
    var vertices = this.getVertices();
    var matching = vertices.filter((vertex) => {
      return vertex.value === value;
    });

    if (matching.length > 0){
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
   addEdge(startVertex, endVertex){
     if (!(startVertex instanceof Vertex)){
       startVertex = this.getVertexByValue(startVertex);
     }

     if (!(endVertex instanceof Vertex)){
       endVertex = this.getVertexByValue(endVertex);
     }

     if (this.hasEdge(startVertex.value, endVertex.value)){
       throw new DuplicateEdgeError("Cannot add duplicate edge between '" + startVertex.value + "' and '" + endVertex.value + "' to graph.");
     }

     var edge = new Edge(startVertex, endVertex);
     this._edges.push(edge);

     // since this undirected graph, edges must go both ways
     var reverseEdge = new Edge(endVertex, startVertex);
     this._edges.push(reverseEdge);

     return this;
   }

   /**
    * @return {Array} array of Edge instances present in Graph.
    */
   getEdges(){
     return this._edges;
   }

   /**
    * @param {startValue} start value of edge to locate
    * @param {endValue} end value of edge to locate
    * @return {Edge} returns Edge instance in Graph if exists, otherwise returns undefined
    */
   getEdgeByValues(startValue, endValue){
     let edges = this.getEdges();
     let matching = edges.filter((edge) => {
       return edge.startVertex.value === startValue && edge.endVertex.value === endValue;
     });

     if (matching.length > 0){
       return matching[0];
     }

     return undefined;
   }

   /**
    * @param {startVertex} start value of edge to locate
    * @param {endVertex} end value of edge to locate
    * @return {Boolean} true if any edge has these start and end values else false
    */
   hasEdge(startVertex, endVertex){
     return !!this.getEdgeByValues(startVertex, endVertex);
   }

   /**
    * @return {Array} array of arrays; each entry represents adjacency for row;
    *         each entry in each sub-array represents adjacency for column;
    *         if A[i][j] = 1, there is an edge from i to j.
    */
   getAdjacencyMatrix(){
     let matrix = [];
     let vertices = this.getVertices();
     // where N = number of vertices, initialize N X N zero matrix
     vertices.forEach((vertex) => {
      matrix.push(new Array(vertices.length).fill(0));
     });

     // if edge exists for A[i][j] (and A[j][i]) set cell to 1
     let edges = this.getEdges();
     let vertexValues = this.getVertexValues();
     edges.forEach((edge) => {
       let startValue = edge.startVertex.value;
       let endValue = edge.endVertex.value;
       let startIndex = vertexValues.indexOf(startValue);
       let endIndex = vertexValues.indexOf(endValue);
       matrix[startIndex][endIndex] = 1;
       matrix[endIndex][startIndex] = 1;
     });
     return matrix;
   }

   /**
    * @return {Array} given Vertex A, return all values from vertices connected to A by edges.
    */
   getEdgesByVertex(vertex){
     if (!(vertex instanceof Vertex)){
       vertex = this.getVertexByValue(vertex);
     }

     let edges = this.getEdges();
     let matching = edges.filter((edge) => {
       return edge.startVertex.value === vertex.value;
     });

     return matching.map( (edge) => {
       return edge.endVertex.value;
     });
   }

   /**
    * @return {Object} each Object key represents a vertex in graph;
    * value at each key is an array of vertex values found in edge destinations.
    */
    getAdjacencyList(){
      var list = {};
      let vertices = this.getVertices();
      vertices.forEach((vertex) => {
        list[vertex.value] = this.getEdgesByVertex(vertex);
      });
      return list;
    }
}

export default Graph;
