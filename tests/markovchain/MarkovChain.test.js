import { expect } from 'chai';

import MarkovChain from '../../src/markovchain/MarkovChain';

describe('MarkovChain', function() {
  describe('constructor', function() {
    it('generates a markov chain', function () {
      let sentence = 'a man a plan a canal panama'.split(' ');
      let chain = new MarkovChain(sentence);
      expect(Object.keys(chain._chain).length).to.equal(4);
      expect(chain._chain['a']).to.include.members(['man', 'plan', 'canal']);
      expect(chain._chain['plan']).to.include.members(['a']);
      expect(chain._chain['man']).to.include.members(['a']);
      expect(chain._chain['canal']).to.include.members(['panama']);
    });

    it('generates a nonsense sentence given a chain', function () {
      // some random text to generate some
      let fragments = ["I am not a number! I am a free man!",
        "I am smelling like a rose! I am not eating thorns!"
      ];

      let chain = new MarkovChain([]);
      fragments.forEach( (fragment) => {
        fragment = fragment.split(' ');
        chain.appendItems(fragment);
      });

      // not good test here, just verifying length since this is
      // stochastic generative process.
      expect(chain.generate(10).length).to.equal(10);
    });
  });
});
