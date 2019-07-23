const assert = require('assert');

module.exports = (webpackageName, elementName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.')
  return {
    description: 'Utility Functions for handling with dynamic connections.',
    resources: [
      `${elementName}.bundle.js`
    ]
  };
};
