export default {
  'artifacts': {
    'utilities': [
      {
        'artifactId': 'util1',
        'description': 'This util demonstrates ...',
        'resources': [
          'js/pack1.js',
          'css/pack1.css'
        ],
        'dependencies': [
          {
            'artifactId': 'util3',
            'webpackageId': 'package3@1.0.0'
          },
          {
            'artifactId': 'util4',
            'webpackageId': 'package4@1.0.0'
          }
        ]
      }
    ]
  }
};
