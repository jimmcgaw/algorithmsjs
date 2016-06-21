import Vertex from './Vertex';
import DuplicateVertexError from './DuplicateVertexError';

/**
 * Graph: represents a graph data structure.
 */
class Graph {
  constructor(){
    this._vertices = [];
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
   * @return {Graph} current instance of graph.
   */
  addVertex(value, vertex_class=Vertex){
    if (this.hasVertexWithValue(value)){
      throw new DuplicateVertexError("Cannot add duplicate value " + value.toString() + " to graph.");
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
  }



}

export default Graph;
