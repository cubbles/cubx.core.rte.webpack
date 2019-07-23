const assert = require('assert');

module.exports = (webpackageName, elementName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.')
  return {
    description: 'Dom tree utilities',
    resources: [
      `${elementName}.bundle.js`
    ]
  };
};
