class MarkovChain {
  constructor(text){
    this.text = text;
    this._chain = {};

    this._build();
  }

  _build(){
    this._clearChain();
    let words = this.text.split(' ');
    words.forEach( (word, index) => {
      if (index !== words.length-1){
        let nextWord = words[index+1];
        if (!(word in this._chain)){
          this._chain[word] = [nextWord];
        } else {
          this._chain[word].push(nextWord);
        }
      }
    });
  }

  _clearChain(){
    this.chain = {};
  }

  appendText(text){
    this.text += text;
    this._build();
  }

  _getRandomWord(word){
    if (typeof word !== 'undefined' && word in Object.keys(this._chain)){
      let successiveWords = this._chain[word];
      return successiveWords[Math.floor(Math.random() * successiveWords.length)];
    } else {
      let allWords = Object.keys(this._chain);
      return allWords[Math.floor(Math.random()*allWords.length)];
    }
  }

  generate(sequenceLength){
    let startingWord = this._getRandomWord();
    let words = [startingWord];
    let index = 1;

    while (words.length < sequenceLength){
      let lastWord = words[words.length-1];
      words.push(this._getRandomWord(lastWord));
    }

    return words.join(' ');
  }

}

export default MarkovChain;
