const assert = require('assert');

module.exports = (webpackageName, elementName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    resources: [
      `${elementName}.bundle.js`
    ],
    dependencies: [
      {
        webpackageId: 'lodash-4.17.14@1.0.0',
        artifactId: 'lodash'
      },
      {
        artifactId: 'cubx-component-mixin'
      },
      {
        artifactId: 'dynamic-connection-utils'
      },
      {
        artifactId: 'template-utils'
      }
    ]
  };
};
