export default {
  name: 'compound-B',
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
    compoundComponents: [
      {
        artifactId: 'compound-B',
        resources: [
          'res1.html'
        ],
        dependencies: [
          {
            webpackageId: 'test.elementary-D@1.0.0',
            artifactId: 'elementary-D'
          },
          {
            webpackageId: 'test.elementary-E@1.0.0',
            artifactId: 'elementary-E'
          }
        ],
        slots: [
          {
            slotId: 'outputB',
            type: 'number'
          }
        ],
        members: [
          {
            artifactId: 'elementary-D',
            memberId: '1',
            displayName: 'Elementary Component D'
          },
          {
            artifactId: 'elementary-E',
            memberId: '2',
            displayName: 'Elementary Component E'
          }
        ],
        connections: [
          {
            connectionId: '1',
            source: {
              memberIdRef: '1',
              slot: 'outputD'
            },
            destination: {
              memberIdRef: '2',
              slot: 'inputE'
            }
          },
          {
            connectionId: '2',
            source: {
              memberIdRef: '2',
              slot: 'outputE'
            },
            destination: {
              slot: 'outputB'
            }
          },
          {
            connectionId: '3',
            source: {
              slot: 'inputB'
            },
            destination: {
              memberIdRef: '1',
              slot: 'inputD'
            }
          }
        ],
        inits: [
          {
            memberIdRef: '2',
            slot: 'inputE',
            value: 'hallo inputE'
          },
          {
            slot: 'inputB',
            value: 'hallo inputB'
          }
        ]
      }
    ]
  }
};
