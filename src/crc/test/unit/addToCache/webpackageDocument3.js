export default {
  name: 'package-3',
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
    compoundComponents: [
      {
        artifactId: 'my-component-3',
        resources: [
          'res3.js',
          'res3.css'
        ],
        dependencies: [
          {
            webpackageId: 'org.example.package-5@1.0.0',
            artifactId: 'my-component-5'
          }
        ]
      }
    ]
  }
};
