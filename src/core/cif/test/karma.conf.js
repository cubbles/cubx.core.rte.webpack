// Karma configuration
// Generated on Fri Jun 20 2014 14:13:49 GMT+0800 (CST)

module.exports = function (config) {
  'use strict';
  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai', 'browserify'],

    // list of files / patterns to load in the browser
    files: [
      '../webcomponents/custom-elements-es5-adapter.js',
      '../webcomponents/webcomponents-lite.js',
      { pattern: 'test/mock/CRCMock.js', watched: false, served: true },
      { pattern: 'test/testSetup.js', watched: false, served: true },
      { pattern: 'test/helper.js', watched: false, served: true },
      { pattern: 'test/beforeTest.js', watched: false, served: true },
      { pattern: 'test/resources/*', watched: false, served: true },
      { pattern: 'test/**/*_test.js', watched: false, served: true }
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/testSetup.js': ['browserify'],
      'test/helper.js': ['browserify'],
      'classes/*.js': ['browserify'],
      'test/**/*_test.js': ['browserify']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: [ 'progress', 'html', 'mocha', 'coverage' ],
    reporters: ['progress', 'html', 'mocha'],

    htmlReporter: {
      outputFile: 'test-results/html/TEST-karma.html'
    },

    mochaReporter: {
      output: 'autowatch'
    },

    // coverageReporter: {
    //   type: 'html',
    //   dir: 'test-results/coverage/'
    // },
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO ||
    // config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'], //, 'Firefox', 'Chrome'
    // use just Chrome for debugging in Webstorm
    // browsers: [ 'Chrome' ],
    // browsers: [ 'Firefox' ],
    captureTimeout: 50000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // Browserify configuration
    browserify: {
      debug: true,
      transform: [
        [
          'babelify',
          {
            presets: [
              ['@babel/preset-env', { exclude: ['transform-function-name'] }] // To avoid wrong transpilling of anonymous functions in 'ConnectionManager' Test 'both parameter are from type function'
            ]
          }
        ]
      ]
    }
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci', 'Firefox'];
  }

  config.set(configuration);
};
