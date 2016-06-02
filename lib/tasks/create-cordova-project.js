'use strict';

var runCommand = require('../utils/run-command');
var path       = require('path');

module.exports = function(project) {
  var config  = project.cordovaConfig;
  var platform = project.platform || 'ios';
  var command = 'cordova create ' + project.platform + ' ' + config.id + ' ' + config.name;

  return runCommand(command, 'Creating Cordova project', {
    cwd: project.root
  });
};
