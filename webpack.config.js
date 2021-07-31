const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const orgName = 'platform';

  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: 'root-config',
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true
  });

  return merge(defaultConfig, {
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: 'src/index.ejs',
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName
        }
      })
    ],

    devServer: {
      port: webpackConfigEnv.PORT,
      host: '0.0.0.0' // To accept connections from outside container
    },

    watchOptions: {
      aggregateTimeout: 500, // Delay before reloading
      poll: 1000 // Enable polling since fsevents are not supported in docker
    }
  });
};
