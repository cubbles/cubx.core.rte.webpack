const assert = require('assert');

module.exports = (webpackageName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    description: 'The origin polyfill library version 1.1.0.',
    resources: []
  };
};
