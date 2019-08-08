export default {
  artifacts: {
    utilities: [
      {
        artifactId: 'util5',
        description: 'This util demonstrates ...',
        resources: [
          'js/pack5.js',
          'css/pack5.css'
        ],
        dependencies: [
          {
            artifactId: 'util6',
            webpackageId: 'package6@1.0.0'
          }
        ]
      }
    ]
  }
};
