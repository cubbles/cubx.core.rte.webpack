const assert = require('assert');

module.exports = (webpackageName, elementName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    description: 'Utility to resize an iframe according to its content size.',
    resources: [
      `${elementName}.bundle.js`
    ]
  };
};
