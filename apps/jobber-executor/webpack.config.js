const { merge } = require('webpack-merge');
const CommonConfig = require('../../webpack.app.config');
const { join } = require('path');

module.exports = merge(CommonConfig, {
  output: {
    path: join(__dirname, '../../dist/apps/jobber-executor'),
  },
});
