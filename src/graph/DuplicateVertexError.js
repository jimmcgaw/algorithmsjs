/**
 * DuplicateVertexError: error raised when adding duplicate Vertex value to Graph.
 */
class DuplicateVertexError extends Error {
  constructor(message){
    super(message);

    this.message = message;
    this.name = "DuplicateVertexError";
  }
}

export default DuplicateVertexError;
