const assert = require('assert');

module.exports = (webpackageName, elementName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.')
  return {
    description: 'Basic (access) methods for cubbles components',
    resources: [
      `${elementName}.bundle.js`
    ],
    dependencies: [
      {
        webpackageId: 'lodash-4.17.14@1.0.0',
        artifactId: 'lodash'
      }
    ]
  };
};
