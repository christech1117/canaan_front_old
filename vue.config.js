module.exports = {
  // 基本路徑
  baseUrl: './',
  outputDir: 'dist',
  configureWebpack: (config) => {
    config.entry = ['babel-polyfill', './src/main.js']
  }
};