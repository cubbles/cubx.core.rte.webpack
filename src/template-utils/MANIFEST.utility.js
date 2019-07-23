const assert = require('assert');

module.exports = (webpackageName, elementName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    description: 'Utility functions for find, import and integrate templates.',
    resources: [
      `${elementName}.bundle.js`
    ]
  };
};
