'use strict';

let expect = require('chai').expect;
let Afplay = require('../lib/Afplay');

describe('Afplay', () => {
  beforeEach(() => {
    this.afplay = new Afplay;
  });

  describe('constructor', () => {
    it('should set options', () => {
      expect(this.afplay).to.have.property('options');
    });

    it('should set default path in options', () => {
      expect(this.afplay.options).to.have.property('path');
    });

    it('should set custom path in options', () => {
      let customPath = '/tmp/afplay';

      this.afplay = new Afplay({path: customPath});

      expect(this.afplay.options.path).to.equal(customPath);
    });
  });
});
