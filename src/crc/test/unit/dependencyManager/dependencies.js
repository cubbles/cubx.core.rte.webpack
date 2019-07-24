export default [
  {
    'artifactId': 'util1',
    'webpackageId': 'cubx.core.test.crc-loader-test'
  },
  {
    'artifactId': 'util2',
    'webpackageId': 'cubx.core.test.crc-loader-test'
  },
  {
    'artifactId': 'util3',
    'webpackageId': 'cubx.core.test.crc-loader-test',
    'dependencyExcludes': [
      {
        'webpackageId': 'excludedPackage',
        'artifactId': 'excludedArtifact'
      },
      {
        'webpackageId': 'anotherExcludedPackage',
        'artifactId': 'anotherExcludedArtifact'
      }
    ]
  }
];
