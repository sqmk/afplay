<p align="center">
  <img src="https://cdn.rawgit.com/sqmk/afplay/df76b14734220405722158231e4578c209bbab63/media/logo.svg" alt="Afplay" />
</p>

# Afplay - Apple Audio File Play wrapper for Node.js

[![NPM Version](https://img.shields.io/npm/v/afplay.svg?style=flat-square)](https://www.npmjs.com/package/afplay)
[![Build Status](https://img.shields.io/travis/sqmk/afplay/master.svg?style=flat-square)](https://travis-ci.org/sqmk/afplay)
[![Dependency Status](https://img.shields.io/david/sqmk/afplay.svg?style=flat-square)](https://david-dm.org/sqmk/afplay)

Afplay is a wrapper for Apple Audio File Play (afplay).

Use Afplay to play audio files on OS X via afplay. Afplay afplay!

## Installation

Afplay was written for **Node.js 4+**.

`npm install --save afplay`

## Usage

Afplay is super simple to use!

### Play a Local File

```js
let Afplay = require('afplay');

// Instantiate a new player
let player = new Afplay;

// Play a sound, handle result within a Promise
player.play('/tmp/my-file.mp3')
  .then(() => {
    console.log('Audio done playing');
  })
  .catch(error => {
    console.log('Error playing file');
  });
```

### Configure Volume & Play Time

It is possible to configure volume and play time (in seconds).

```js
player.play('/tmp/my-file.mp3', {volume: 100, time: 15})
  .then(() => {
    console.log('Loud, short duration audio done playing');
  })
  .catch(error => {
  	console.log('Error playing file');
  });
```

## Examples

View the [examples](examples) directory.

## Logo

Afplay's initial logo was designed by scorpion6 on Fiverr. Font used is Lato Black.

## License

This software is licensed under the MIT License. [View the license](LICENSE).

Copyright © 2015 [Michael K. Squires](http://sqmk.com)
