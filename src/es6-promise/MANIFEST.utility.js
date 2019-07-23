const assert = require('assert');

module.exports = (webpackageName, elementName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    description: 'es6-pomise library version 3.2.1',
    resources: [
      `${elementName}.bundle.js`
    ],
    dependencies: []
  };
};
