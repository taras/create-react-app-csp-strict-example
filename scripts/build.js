const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

// TODO: if this does not work then try https://github.com/styled-components/styled-components/issues/887#issuecomment-376479268
config.plugins.push(new ScriptExtHtmlWebpackPlugin({
  custom: {
    test: /\.js$/,
    attribute: "nonce",
    value: "*CSP_NONCE*"
  }
}))

config.target = 'web';