export default {
  'name': 'compound-A',
  'groupId': 'test',
  'version': '1.0.0',
  'modelVersion': '9.1.0',
  'docType': 'webpackage',
  'author': {
    'name': 'John Doe',
    'email': 'john.doe@example.org'
  },
  'license': 'MIT',
  'runnables': [
    {
      'name': 'readme',
      'description': 'read me...',
      'path': '_doc/readme.html'
    }
  ],
  'artifacts': {
    'compoundComponents': [
      {
        'artifactId': 'compound-A',
        'resources': [
          'res1.html'
        ],
        'dependencies': [
          {
            'webpackageId': 'test.compound-B@1.0.0',
            'artifactId': 'compound-B'
          },
          {
            'webpackageId': 'test.compound-C@1.0.0',
            'artifactId': 'compound-C'
          },
          {
            'artifactId': 'elementary-F'
          }
        ],
        'members': [
          {
            'artifactId': 'compound-B',
            'memberId': '1',
            'displayName': 'Compound Component B'
          },
          {
            'artifactId': 'elementary-C',
            'memberId': '2',
            'displayName': 'Elementary Component C'
          },
          {
            'artifactId': 'elementary-C',
            'memberId': '3',
            'displayName': 'Elementary Component C'
          },
          {
            'artifactId': 'elementary-F',
            'memberId': '4',
            'displayName': 'Elementary Component F'
          }
        ],
        'connections': [
          {
            'connectionId': '1',
            'source': {
              'memberIdRef': '1',
              'slot': 'outputB'
            },
            'destination': {
              'memberIdRef': '2',
              'slot': 'inputC'
            }
          },
          {
            'connectionId': '2',
            'source': {
              'memberIdRef': '1',
              'slot': 'outputB'
            },
            'destination': {
              'memberIdRef': '3',
              'slot': 'inputC'
            }
          },
          {
            'connectionId': '3',
            'source': {
              'memberIdRef': '2',
              'slot': 'outputC'
            },
            'destination': {
              'memberIdRef': '1',
              'slot': 'inputB'
            }
          },
          {
            'connectionId': '4',
            'source': {
              'memberIdRef': '2',
              'slot': 'outputC'
            },
            'destination': {
              'memberIdRef': '4',
              'slot': 'inputField'
            }
          }
        ],
        'inits': [
          {
            'memberIdRef': '2',
            'slot': 'inputC',
            'value': 'hallo inputC'
          },
          {
            'memberIdRef': '1',
            'slot': 'inputB',
            'value': 'hallo inputB'
          }
        ]
      }
    ],
    'elementaryComponents': [
      {
        'artifactId': 'elementary-F',
        'description': '',
        'resources': [
          'component/elementary-F.html'
        ],
        'dependencies': [],
        'slots': [
          {
            'slotId': 'inputField',
            'type': 'string',
            'direction': [
              'input'
            ]
          }
        ]
      }
    ]
  }
};
