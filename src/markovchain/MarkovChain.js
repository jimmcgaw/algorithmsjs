class MarkovChain {
  constructor(list){
    this._chain = {};

    this.lastItem = undefined;
    this._build(list);
  }

  _build(list){
    list.forEach( (item, index) => {
      if (index === 0 && typeof this.lastItem !== 'undefined'){
        this._appendItem(this.lastItem, item);
      }

      if (index !== list.length-1){
        let nextItem = list[index+1];
        this._appendItem(item, nextItem);
      } else {
        this.lastItem = list[index];
      }
    });
  }

  _appendItem(item, nextItem){
    if (!(item in this._chain)){
      this._chain[item] = [nextItem];
    } else {
      this._chain[item].push(nextItem);
    }
  }

  _clearChain(){
    this._chain = {};
  }

  appendItems(list){
    this._build(list);
  }

  _getStartingItem(){
    let allObjects = Object.keys(this._chain);
    return allObjects[Math.floor(Math.random() * allObjects.length)];
  }

  _getRandomItem(item){
    let successiveItems = this._chain[item];
    if (successiveItems.length > 0){
      return successiveItems[Math.floor(Math.random() * successiveItems.length)];
    }
    return this._getStartingItem();
  }

  generate(sequenceLength){
    let startingWord = this._getStartingItem();
    let items = [startingWord];
    let index = 1;

    while (items.length < sequenceLength){
      let lastItem = items[items.length-1];
      items.push(this._getRandomItem(lastItem));
    }

    return items;
  }

}

export default MarkovChain;
