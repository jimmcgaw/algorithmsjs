import Vertex from './Vertex';

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

  addVertex(value, vertex_class=Vertex){
    var vertex = new vertex_class(value);
    this.vertices.push(vertex);
  }



}

export default Graph;
