export default {
  name: 'elementary-D',
  groupId: 'test',
  version: '1.0.0',
  modelVersion: '9.1.0',
  docType: 'webpackage',
  author: {
    name: 'John Doe',
    email: 'john.doe@example.org'
  },
  license: 'MIT',
  runnables: [
    {
      name: 'readme',
      description: 'read me...',
      path: '_doc/readme.html'
    }
  ],
  artifacts: {
    elementaryComponents: [
      {
        artifactId: 'elementary-D',
        resources: [
          'res1.html'
        ],
        slots: [
          {
            slotId: 'outputD',
            type: 'number',
            direction: ['output']
          }
        ]
      }
    ]
  }
};
