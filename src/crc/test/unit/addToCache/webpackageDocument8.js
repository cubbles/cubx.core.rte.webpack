export default {
  name: 'package-8',
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
        artifactId: 'my-component-11',
        resources: [
          'res1.js',
          'res2.css'
        ],
        dependencies: [
          {
            artifactId: 'my-component-12'
          },
          {
            webpackageId: 'org.example.package-9@1.0.0',
            artifactId: 'my-component'
          }
        ]
      }
    ]
  }
};
