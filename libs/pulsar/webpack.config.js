const { merge } = require('webpack-merge');
const CommonConfig = require('../../webpack.lib.config');
const { join } = require('path');

module.exports = merge(CommonConfig, {
  output: {
    path: join(__dirname, '../../dist/libs/pulsar'),
  },
});
