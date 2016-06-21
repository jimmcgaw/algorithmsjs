import Vertex from './Vertex';

/**
 * Graph: represents a graph data structure.
 */
class Graph {
  constructor(){
    this.vertices = [];
  }

  getVertices(){
    return this.vertices;
  }

  getVertexValues(){
    return this.vertices.map((vertex) => {
      return vertex.getValue();
    });
  }

  /**
   * @param {value} value to set on the vertex
   * @return {void} this is return.
   */
  addVertex(value, vertex_class=Vertex){
    var vertex = new vertex_class(value);
    this.vertices.push(vertex);
  }



}

export default Graph;
