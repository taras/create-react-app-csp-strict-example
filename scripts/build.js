const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');

console.log('we are building');

config.devtool = false;

config.target = 'web';