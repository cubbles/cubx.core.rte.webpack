export default {
  name: 'my-webpackage',
  groupId: 'org.example',
  version: '0.2.0',
  modelVersion: '8.0.0',
  docType: 'webpackage',
  author: {
    name: 'John Doe',
    email: 'john.doe@example.org'
  },
  license: 'MIT',
  homepage: 'http://project.home.com',
  keywords: [
    'cubx',
    'template'
  ],
  man: [
    'http://project.com/man',
    'http://project.com/man2'
  ],
  entrypoints: {
    doc: '_doc/readme.html'
  },
  artifacts: {
    apps: [
      {
        artifactId: 'my-app',
        description: 'This app demonstrates ...',
        endpoints: [
          {
            endpointId: 'main',
            resources: ['index.html'],
            dependencies: [
              {
                webpackage: 'd3-charts-lib@1.0',
                artifactsWithEndpoint: ['bar-chart/main'],
                description: 'This provides the best charts ever seen ...'
              },
              {
                webpackage: 'com.hm.demos.aviator@1.0',
                artifactsWithEndpoint: [
                  'component1/htmlimport',
                  'component2/htmlimport'
                ]
              }
            ]
          }
        ]
      }
    ],
    compoundComponents: [
      {
        artifactId: 'my-compound',
        description: 'This compound demonstrates ...',
        endpoints: [
          {
            endpointId: 'main',
            description: 'Use this endpoint to include ...',
            resources: ['import.html'],
            dependencies: [
              {
                webpackage: 'this',
                artifactsWithEndpoint: ['bar-chart/main'],
                description: 'This provides the best charts ever seen ...'
              },
              {
                webpackage: 'com.hm.demos.aviator@1.0',
                artifactsWithEndpoint: [
                  'component1/htmlimport',
                  'component2/htmlimport'
                ]
              }
            ]
          }
        ],
        slots: [
          {
            slotId: 'slot1',
            type: 'number',
            direction: ['input'],
            description: 'This slot ...'
          },
          {
            slotId: 'slot2',
            type: 'number',
            direction: [
              'input',
              'output'
            ]
          },
          {
            slotId: 'slot3',
            type: 'function',
            value: 'function(x, y) {return x + y}'
          }
        ],
        members: [
          {
            memberId: 'vehiclesPerChargingstationCorrelator',
            componentId: 'com.incowia.emob.generic-correlator@1.0.0-SNAPSHOT/generic/main',
            displayName: 'Korrelation - Fahrzeuge pro Ladestation',
            description: 'This member is used ...'
          },
          {
            memberId: 'vehiclePerSharingstationCorrelator',
            componentId: 'com.incowia.emob.generic-correlator@1.0.0-SNAPSHOT/generic/main',
            displayName: 'Korrelation - Fahrzeuge pro Carsharing-Station'
          },
          {
            memberId: 'stationView',
            componentId: 'com.incowia.emob.view@1.0.0-SNAPSHOT/station-view/main',
            displayName: 'Korrelation - Fahrzeuge pro Carsharing-Station'
          }
        ],
        connections: [
          {
            connectionId: 'chargeStationCorrelator-out1',
            source: {
              memberIdRef: 'vehiclesPerChargingstationCorrelator',
              slot: 'correlationValueOut'
            },
            destination: {
              memberIdRef: 'stationView',
              slot: 'correlationValuesIn'
            },
            description: 'charging station correlator view adapter'
          },
          {
            connectionId: 'shareStationCorrelator-out1',
            source: {
              memberIdRef: 'vehiclePerSharingstationCorrelator',
              slot: 'correlationValueOut'
            },
            destination: {
              memberIdRef: 'stationView',
              slot: 'correlationValuesIn'
            },
            description: 'sharing station correlator view adapter'
          }
        ],
        inits: [
          {
            memberIdRef: 'vehiclesPerChargingstationCorrelator',
            slot: 'correlationValueIn',
            value: '12'
          },
          {
            memberIdRef: 'vehiclesPerChargingstationCorrelator',
            slot: 'unit',
            value: 'sq km'
          }
        ]
      }
    ],
    elementaryComponents: [
      {
        artifactId: 'my-elementary',
        description: 'This elementary demonstrates ...',
        slots: [
          {
            slotId: 'slot1',
            type: 'number',
            direction: ['input']
          },
          {
            slotId: 'slot2',
            type: 'number',
            direction: [
              'input',
              'output'
            ]
          },
          {
            slotId: 'slot13',
            type: 'function',
            value: 'function(x, y) {return x + y}'
          }
        ],
        endpoints: [
          {
            endpointId: 'main',
            resources: ['import.html'],
            dependencies: [
              {
                webpackage: 'd3-charts-lib@1.0',
                artifactsWithEndpoint: ['bar-chart/main'],
                description: 'This provides the best charts ever seen ...'
              },
              {
                webpackage: 'com.hm.demos.aviator@1.0',
                artifactsWithEndpoint: [
                  'component1/htmlimport',
                  'component2/htmlimport'
                ]
              }
            ]
          }
        ]
      }
    ],
    utilities: [
      {
        artifactId: 'my-util1',
        description: 'This util demonstrates ...',
        endpoints: [
          {
            endpointId: 'main',
            resources: ['import.html'],
            dependencies: [
              {
                webpackage: 'd3-charts-lib@1.0',
                artifactsWithEndpoint: ['bar-chart/main'],
                description: 'This provides the best charts ever seen ...'
              }
            ]
          }
        ]
      },
      {
        artifactId: 'my-util2',
        description: 'This util demonstrates ...',
        endpoints: [
          {
            endpointId: 'main',
            resources: ['import.html'],
            dependencies: [
              {
                webpackage: 'd3-charts-lib@1.0',
                artifactsWithEndpoint: ['bar-chart/main'],
                description: 'This provides the best charts ever seen ...'
              }
            ]
          },
          {
            endpointId: 'min-1',
            resources: ['import.min.html'],
            dependencies: [
              {
                webpackage: 'd3-charts-lib@1.0',
                artifactsWithEndpoint: ['bar-chart/main'],
                description: 'This provides the best charts ever seen ...'
              }
            ]
          }
        ]
      }
    ]
  }
};
