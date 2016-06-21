import Vertex from './Vertex';

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
    var vertex = new vertex_class(value);
    this._vertices.push(vertex);
    return this;
  }



}

export default Graph;
