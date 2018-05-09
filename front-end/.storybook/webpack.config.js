const baseWebpackConfig = require('../webpack/webpack.dev');

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: baseWebpackConfig.plugins.filter(plugin => ![
    'HtmlWebpackPlugin',
    'DefinePlugin',
    'BundleAnalyzerPlugin'
  ].includes(plugin.constructor.name)),
  module: {
    rules: baseWebpackConfig.module.rules
  },
};
