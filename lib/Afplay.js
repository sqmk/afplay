'use strict';

const execFile = require('child_process').execFile;
const fs = require('fs');

const DEFAULT_OPTIONS = {
  path: '/usr/bin/afplay'
};

const DEFAULT_PLAY_PARAMS = {
  volume: null,
  time:   null
};

/**
 * Afplay
 */
class Afplay {
  /**
   * Constructor
   *
   * @param {Object} options Optional configuration
   */
  constructor(options) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
  }

  /**
   * Play sound
   *
   * @param {string} file   File path
   * @param {Object} params Optional params
   *
   * @return {Promise} Promise for chaining
   */
  play(file, params) {
    if (!fs.existsSync(file)) {
      throw new Error(`File ${file} not found`);
    }

    params = sanitizePlayParams(params);

    return new Promise(
      (resolve, reject) => {
        const child = execFile(this.options.path, this.buildArgs(file, params), {}, (error, stdout, stderr) => {
          if (error !== null) {
            return reject(error);
          }

          return resolve(true);
        });
      }
    );
  }

  /**
   * Build args
   *
   * @param {string} file   File
   * @param {Object} params Params
   *
   * return {string[]} Args
   */
  buildArgs(file, params) {
    let args = [];

    for (let key in params) {
      if (params[key] === null) {
        continue;
      }

      args.push(`--${key}`);
      args.push(`${params[key]}`);
    }

    args.push(file);

    return args;
  }
}

/**
 * Sanitize play params
 *
 * @param {Object} params Params
 *
 * @return {Object} Params
 */
function sanitizePlayParams(params) {
  params = Object.assign({}, DEFAULT_PLAY_PARAMS, params);
  let sanitizedParams = [];

  for (let key of ['volume', 'time']) {
    sanitizedParams[key] = params[key] !== null ? parseFloat(params[key]) : null;
  }

  return sanitizedParams;
}

module.exports = Afplay;
