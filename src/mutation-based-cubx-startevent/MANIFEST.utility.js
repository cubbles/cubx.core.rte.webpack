const assert = require('assert');

module.exports = (webpackageName, elementName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.')
  return {
    description: 'Utility to enable the configuration of startEvent using mutations ',
    resources: [
      `${elementName}.bundle.js`
    ]
  };
};
