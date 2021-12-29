const { name } = require('./package.json');

module.exports = {
  publicPath: './',
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    }
  },
  devServer: {
    port: 7002,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}