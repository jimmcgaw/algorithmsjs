class StackEmptyError extends Error {
  constructor(message){
    super(message);
    this.message = message;
    this.name = "StackEmptyError";
  }
}

export default StackEmptyError;
