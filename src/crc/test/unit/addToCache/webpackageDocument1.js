export default {
  name: 'package-1',
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
        artifactId: 'my-component-1',
        resources: [
          'res1.js',
          'res1.css'
        ],
        dependencies: [
          {
            webpackageId: 'org.example.package-3@1.0.0',
            artifactId: 'my-component-3'
          },
          {
            webpackageId: 'org.example.package-4@1.0.0',
            artifactId: 'my-util-4'
          }
        ]
      }
    ]
  }
};
