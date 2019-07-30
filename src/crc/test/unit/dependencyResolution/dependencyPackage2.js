export default {
  artifacts: {
    utilities: [
      {
        artifactId: 'util2',
        description: 'This util demonstrates ...',
        resources: [
          'js/pack2.js'
        ],
        dependencies: [
          {
            artifactId: 'util3',
            webpackageId: 'package3@1.0.0'
          },
          {
            artifactId: 'util5',
            webpackageId: 'package5@1.0.0'
          }
        ]
      }
    ]
  }
};
