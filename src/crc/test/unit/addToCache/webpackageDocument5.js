
export default {
  'name': 'package-5',
  'groupId': 'org.example',
  'version': '1.0.0',
  'modelVersion': '10.0.0',
  'docType': 'webpackage',
  'author': {
    'name': 'John Doe',
    'email': 'john.doe@example.org'
  },
  'license': 'MIT',
  'runnables': [],
  'artifacts': {
    'elementaryComponents': [
      {
        'artifactId': 'my-component-5',
        'resources': [
          'res5.html'
        ],
        'dependencies': [
          {
            'webpackageId': 'org.example.package-6@1.0.0',
            'artifactId': 'my-util-6'
          }
        ]
      }
    ]
  }
};
