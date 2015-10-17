#!/usr/bin/env node

'use strict';

let Afplay = require('../lib/Afplay');

let player = new Afplay;

player.play('/tmp/demo.mp3')
  .then(() => {
    console.log('Afplay done playing sound.');
  })
  .catch(error => {
    console.log(error.stack);
  });
