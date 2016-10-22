'use strict';

const chokidar = require('chokidar'),
      config = require('../config'),
      path = process.argv[2],
      watcher = chokidar.watch(path + '/events-*.json');

var ready = false;

watcher
  .on('ready', () => { ready = true; })
  .on('add', path => {
    if (!ready) {
      return;
    }

    console.log(`File ${path} has been added`)
  });
