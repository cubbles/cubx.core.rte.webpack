export default {
  name: 'package-6',
  groupId: 'org.example',
  version: '1.0.0',
  modelVersion: '10.0.0',
  docType: 'webpackage',
  author: {
    name: 'John Doe',
    email: 'john.doe@example.org'
  },
  license: 'MIT',
  runnables: [],
  artifacts: {
    utilities: [
      {
        artifactId: 'my-util-6',
        resources: [
          'res6.js'
        ]
      }
    ]
  }
};
