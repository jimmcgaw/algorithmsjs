class DuplicateVertexError extends Error {
  constructor(message){
    super(message);

    this.message = message;
    this.name = "DuplicateVertexError";
  }
}

export default DuplicateVertexError;
