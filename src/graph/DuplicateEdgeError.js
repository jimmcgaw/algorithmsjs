/**
 * DuplicateEdgeError: error raised when adding duplicate Vertex value to Graph.
 */
class DuplicateEdgeError extends Error {
  constructor(message){
    super(message);

    this.message = message;
    this.name = "DuplicateEdgeError";
  }
}

export default DuplicateEdgeError;
