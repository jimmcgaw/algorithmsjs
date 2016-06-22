import Node from './Node';

class BinaryTree {
  contructor(){
    this._rootNode = undefined;
  }

  hasRootNode(){
    return !!this._rootNode;
  }

  getRootNode(){
    return this._rootNode;
  }

  insert(value){
    var node = new Node(value);
    if (!this.hasRootNode()){
      this._rootNode = node;
    } else {
      this._addChildNode(value, this._rootNode);
    }
  }

  _addChildNode(value, parentNode){
    if (value < parentNode.getValue()){
      if (parentNode.hasLeftChild()){
        this._addChildNode(value, parentNode.getLeftChild());
      } else {
        let node = new Node(value);
        parentNode.setLeftChild(node);
      }
    } else {
      if (parentNode.hasRightChild()){
        this._addChildNode(value, parentNode.getRightChild());
      } else {
        let node = new Node(value);
        parentNode.setRightChild(node);
      }
    }
  }


}

export default BinaryTree;
