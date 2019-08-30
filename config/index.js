const path = require('path')

module.exports = {
  dev: {
    port: '8024',
    // 是否自动打开浏览器
    autoOpenBrowser: true,
    proxy: {
      '/api': {
        target: '/',
        pathRewrite: {
          '/api': '/'
        }
      }
    }
  },
  prod: {
    publicPath: '/components-inline-demo/',
    // 打包文件根路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 是否打开模块分析器
    bundleAnalyzerReport: false
  }
}
