const assert = require('assert');

module.exports = (webpackageName, elementName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.')
  return {
    description: 'Mutation Summary is a JavaScript library that makes observing changes to the DOM fast, easy and safe.',
    resources: [
      `${elementName}.bundle.js`
    ]
  };
};
