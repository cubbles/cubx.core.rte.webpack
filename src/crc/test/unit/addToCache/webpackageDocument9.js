export default {
  name: 'package-9',
  groupId: '',
  version: '1.0.0',
  modelVersion: '10.0.0',
  docType: 'webpackage',
  author: {
    name: 'Judit Ross',
    email: 'judit.ross@incowia.com'
  },
  homepage: 'https://lodash.com/',
  license: 'MIT',
  keywords: ['library', '3rd-party'],
  man: [],
  runnables: [],
  artifacts: {
    utilities: [
      {
        artifactId: 'my-utility',
        resources: [
          {
            dev: 'my-utility.js',
            prod: 'my-utility.min.js'
          }
        ]
      },
      {
        artifactId: 'my-utility-2',
        description:
          'Javascript libraries will be included by html import. (Usage by polymer components.) ',
        resources: ['my-utility-2.html']
      }
    ]
  }
};
