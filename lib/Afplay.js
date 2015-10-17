'use strict';

let exec = require('child_process').exec;

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
    params = sanitizePlayParams(params);

    return new Promise(
      (resolve, reject) => {
        let cmd = this.buildCommand(file, params);

        let child = exec(cmd, (error, stdout, stderr) => {
          if (error !== null) {
            return reject(error);
          }

          return resolve(true);
        });
      }
    );
  }

  /**
   * Build command
   *
   * @param {string} file File
   * @param {Object} params Params
   *
   * return {string} Command
   */
  buildCommand(file, params) {
    let cmd = [
      this.options.path
    ];

    for (let key in params) {
      if (params[key] === null) {
        continue;
      }

      cmd.push(`--${key} ${params[key]}`);
    }

    cmd.push(file);

    return cmd.join(' ');
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
    sanitizedParams[key] = params[key] !== null ? parseInt(params[key]) : null;
  }

  return sanitizedParams;
}

module.exports = Afplay;
