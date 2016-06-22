class Node {
  constructor(value, isRootNode=false){
    this._value = value;
    this._leftChild = undefined;
    this._rightChild = undefined;
  }

  getValue(){
    return this._value;
  }

  setLeftChild(node){
    this._leftChild = node;
  }

  getLeftChild(){
    return this._leftChild;
  }

  hasLeftChild(){
    return !!this._leftChild;
  }

  setRightChild(node){
    this._rightChild = node;
  }

  getRightChild(){
    return this._rightChild;
  }

  hasRightChild(){
    return !!this._rightChild;
  }
}

export default Node;
