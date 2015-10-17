'use strict';

const DEFAULT_OPTIONS = {
  path: '/usr/bin/afplay'
};

class Afplay {
  constructor(options) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
  }
}

module.exports = Afplay;
