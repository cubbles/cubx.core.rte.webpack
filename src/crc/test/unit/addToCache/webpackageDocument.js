export default {
  name: 'my-webpackage',
  groupId: 'org.example',
  version: '0.2.0',
  modelVersion: '10.0.0',
  docType: 'webpackage',
  author: {
    name: 'John Doe',
    email: 'john.doe@example.org'
  },
  license: 'MIT',
  runnables: [],
  artifacts: {
    apps: [
      {
        artifactId: 'my-app',
        description: 'This app demonstrates ...',
        resources: [
          'test.js'
        ],
        dependencies: [
          {
            webpackageId: 'org.example.package-1@1.0.0',
            artifactId: 'my-component-1'
          },
          {
            webpackageId: 'org.example.package-2@1.0.0',
            artifactId: 'my-component-2'
          },
          {
            webpackageId: 'org.example.package-7@1.0.0',
            artifactId: 'my-component-7'
          },
          {
            webpackageId: 'org.example.package-7@1.0.0',
            artifactId: 'my-component-8'
          }
        ]
      }
    ]
  }
};
