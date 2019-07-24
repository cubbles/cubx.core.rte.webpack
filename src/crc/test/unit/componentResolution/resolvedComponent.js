export default {
  'artifactId': 'compound-A',
  'webpackageId': 'test.compound-A@1.0.0',
  'artifactType': 'compoundComponent',
  'modelVersion': '9.1.0',
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
      'webpackageId': 'test.compound-B@1.0.0',
      'artifactType': 'compoundComponent',
      'modelVersion': '9.1.0',
      'memberId': '1',
      'displayName': 'Compound Component B',
      'slots': [
        {
          'slotId': 'outputB',
          'type': 'number'
        }
      ],
      'resources': [
        'res1.html'
      ],
      'dependencies': [
        {
          'webpackageId': 'test.elementary-D@1.0.0',
          'artifactId': 'elementary-D'
        },
        {
          'webpackageId': 'test.elementary-E@1.0.0',
          'artifactId': 'elementary-E'
        }
      ],
      'members': [
        {
          'webpackageId': 'test.elementary-D@1.0.0',
          'artifactId': 'elementary-D',
          'artifactType': 'elementaryComponent',
          'memberId': '1',
          'resources': [
            'res1.html'
          ],
          'modelVersion': '9.1.0',
          'displayName': 'Elementary Component D',
          'slots': [
            {
              'slotId': 'outputD',
              'type': 'number',
              'direction': [
                'output'
              ]
            }
          ]
        },
        {
          'webpackageId': 'test.elementary-E@1.0.0',
          'artifactId': 'elementary-E',
          'artifactType': 'elementaryComponent',
          'modelVersion': '9.1.0',
          'resources': [
            'res1.html'
          ],
          'memberId': '2',
          'displayName': 'Elementary Component E',
          'slots': [
            {
              'slotId': 'inputE',
              'type': 'string',
              'direction': [
                'input'
              ]
            },
            {
              'slotId': 'outputE',
              'type': 'string',
              'direction': [
                'output'
              ]
            }
          ]
        }
      ],
      'connections': [
        {
          'connectionId': '1',
          'source': {
            'memberIdRef': '1',
            'slot': 'outputD'
          },
          'destination': {
            'memberIdRef': '2',
            'slot': 'inputE'
          }
        },
        {
          'connectionId': '2',
          'source': {
            'memberIdRef': '2',
            'slot': 'outputE'
          },
          'destination': {
            'slot': 'outputB'
          }
        },
        {
          'connectionId': '3',
          'source': {
            'slot': 'inputB'
          },
          'destination': {
            'memberIdRef': '1',
            'slot': 'inputD'
          }
        }
      ],
      'inits': [
        {
          'memberIdRef': '2',
          'slot': 'inputE',
          'value': 'hallo inputE'
        },
        {
          'slot': 'inputB',
          'value': 'hallo inputB'
        }
      ]
    },
    {
      'webpackageId': 'test.elementary-C@1.0.0',
      'artifactId': 'elementary-C',
      'artifactType': 'elementaryComponent',
      'modelVersion': '9.1.0',
      'memberId': '2',
      'resources': [
        'res1.html'
      ],
      'displayName': 'Elementary Component C',
      'slots': [
        {
          'slotId': 'inputC',
          'type': 'number',
          'direction': [
            'input'
          ]
        }
      ]
    },
    {
      'webpackageId': 'test.elementary-C@1.0.0',
      'artifactId': 'elementary-C',
      'artifactType': 'elementaryComponent',
      'modelVersion': '9.1.0',
      'memberId': '3',
      'resources': [
        'res1.html'
      ],
      'displayName': 'Elementary Component C',
      'slots': [
        {
          'slotId': 'inputC',
          'type': 'number',
          'direction': [
            'input'
          ]
        }
      ]
    },
    {
      'webpackageId': 'test.compound-A@1.0.0',
      'artifactId': 'elementary-F',
      'artifactType': 'elementaryComponent',
      'modelVersion': '9.1.0',
      'resources': [
        'component/elementary-F.html'
      ],
      'dependencies': [],
      'description': '',
      'memberId': '4',
      'displayName': 'Elementary Component F',
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
};
