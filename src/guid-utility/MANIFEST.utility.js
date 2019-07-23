const assert = require('assert');

module.exports = (webpackageName, elementName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    description: 'GUID generator.',
    resources: [
      `${elementName}.bundle.js`
    ]
  };
};
