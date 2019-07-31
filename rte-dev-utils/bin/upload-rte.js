#!/usr/bin/env node
/* eslint-env node */
'use strict';
const Uploader = require('@cubbles/webpackage-uploader');
const inquirer = require('inquirer');
const exec = require('child_process').exec;
const packageJSON = require(`${process.env.INIT_CWD}/package.json`);
const wpkgUtils = require('../lib/wpkg-utils');

var argv = require('yargs')
  .usage('Usage: [-p for production mode]')
  .locale('en')
  .argv;

function uploadWebpackage () {
  const mode = argv.p ? 'prod' : 'dev';
  let config;
  const webpackageName = wpkgUtils.getWebpackageName;
  try {
    config = packageJSON.cubbles['coder-toolset']['cubx-webpackage-uploader'][mode];
  } catch (e) {
    console.error('\x1b[31m', `The cubbles['coder-toolset']['cubx-webpackage-uploader']['${mode}'] property is not defined in package.json file`);
    console.log('\x1b[0m');
    throw Error('Config not defined');
  }
  console.log('\x1b[36m', `Uploading the ${webpackageName} webpackage...`);
  (new Uploader(webpackageName)).uploadSingleWebpackage(config, function (err, success) {
    if (err) {
      console.error('\x1b[31m', 'There was an error building the webpackage.',
        'Thus, the validation will not be performed');
      console.error('\x1b[0m', err);
      throw Error('Upload failed');
    } else {
      console.log(success);
      console.log('\x1b[32m', 'Webpackage uploaded successfully');
    }
  });
};

const question = [{
  name: 'buildProject',
  type: 'confirm',
  message: 'Do you want to build the webpackage before continuing?',
  default: true
}];

inquirer.prompt(question).then(function (answer) {
  if (answer.buildProject) {
    console.log('\x1b[36m', 'Building the webpackage...');
    var command = 'npm run build';
    if (argv.p) {
      command += ':prod';
    }
    exec(command, function (error, stdout, stderr) {
      if (error) {
        console.error('\x1b[31m', 'There was an error building the webpackage.',
          'Thus, the validation will not be performed', stderr);
        throw error;
      } else {
        console.log('\x1b[0m', stdout);
        console.log('\x1b[32m', 'Webpackage built successfully');
        uploadWebpackage();
      }
    });
  } else {
    uploadWebpackage();
  }
});
