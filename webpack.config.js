const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const postcssCalc = require("postcss-calc");
const postcssColorFunction = require("postcss-color-function");
const postcssImport = require("postcss-import");

const NODE_ENV = process.env.NODE_ENV || 'development';
const __DEV__ = NODE_ENV === 'development';
const __PROD__ = NODE_ENV === 'production';
const __TEST__ = NODE_ENV === 'test';

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname,
    filename: '/app.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.ts', '.tsx', '.js', '.json'],
  },
  module: {
    preLoaders: [
      {test: /\.tsx?$/, loader: 'tslint'},
    ],
    loaders: [
      {test: /\.tsx?$/, loader: 'ts'},
      {test: /\.css$/, loader: "style!css!postcss"}
    ]
  },
  plugins: getPlugins(),
  devtool: __DEV__ ? '#eval-source-map' : null,
  devServer: {
    port: 8080,
    contentBase: './',
    historyApiFallback: true,
  },
  tslint: {
    emitErrors: false,
    failOnHint: false,
    formatter: 'verbose',
  },
  postcss: function (wp) {
    return [
      postcssImport({addDependencyTo: wp}),
      autoprefixer,
      precss,
      postcssCalc,
      postcssColorFunction,
    ];
  }
};

// Build plugins list imperatively because null values throw errors.
function getPlugins() {
  const plugins = [
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify(NODE_ENV)},
      __DEV__,
      __PROD__,
      __TEST__,
    }),
  ];

  if (__PROD__) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        sourceMap: false,
      })
    );
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin(true));
  }

  return plugins;
}