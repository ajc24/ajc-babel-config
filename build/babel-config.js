"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Configures Babel with all relevant settings for:
 *  - Transpiling React components
 * @param {any} api
 * @returns {{presets: Array.<JSON>, plugins: Array.<string>}}
 */
const configureBabel = function (api) {
  api.cache(true);
  const presets = [['@babel/preset-env', {
    targets: {
      node: '10'
    }
  }], '@babel/preset-react'];
  const plugins = ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-arrow-functions'];
  return {
    presets,
    plugins
  };
};

var _default = configureBabel;
exports.default = _default;