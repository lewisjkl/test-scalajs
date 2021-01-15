var webpack = require('webpack');

module.exports = require('./scalajs.webpack.config');

const Path = require('path');
const rootDir = Path.resolve(__dirname, '../../../..');
module.exports.module.rules = ([{
    test: /\.css$/,
    use: [
      'style-loader', 
      { loader: "css-loader", options: { importLoaders: 1 } },
      'postcss-loader'
    ]
}]).concat(module.exports.module.rules || []);
module.exports.entry = (module.exports.entry || {});
module.exports.entry['test-css'] = Path.resolve(rootDir, './assets/main.css');

module.exports.devServer = {
    contentBase: [
           Path.resolve(__dirname, 'dev'), // fastOptJS output
           Path.resolve(rootDir, 'assets') // project root containing index.html
    ],
    watchContentBase: true,
    hot: false,
    hotOnly: false, // only reload when build is successful
    inline: true // live reloading
};
