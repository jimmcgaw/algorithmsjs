/**
 * Vertex: represents a vertex that can be added to a Graph instance.
 */
class Vertex {
  constructor(value){
    this.value = value;
  }

  getValue(){
    return this.value;
  }
}

export default Vertex;
