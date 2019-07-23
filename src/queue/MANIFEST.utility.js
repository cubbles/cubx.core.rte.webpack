const assert = require('assert');

module.exports = (webpackageName, elementName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    description: 'A queue implementation by Stephen Morley',
    resources: [
      `${elementName}.bundle.js`
    ]
  };
};
