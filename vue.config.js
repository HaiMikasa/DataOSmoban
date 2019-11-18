const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    entry: './src/main.js'
  },
  baseUrl: '/appManager/',
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('css', resolve('src/assets/css'))
      .set('img', resolve('src/assets/images'))
      .set('js', resolve('src/assets/js'))
      .set('views', resolve('src/views'))
    config
      .module
      .rule('compile')
      .test(/\.js$/)
      .use('babel')
      .loader('babel-loader')
  },
  pluginOptions: {
    // ...
    pwa: {
      iconPaths: {
        favicon32: './favicon.ico',
        favicon16: './favicon.ico',
        appleTouchIcon: './favicon.ico',
        maskIcon: './favicon.ico',
        msTileImage: './favicon.ico'
      }
    }
  },
  devServer: { //开发配置
    open: true, // 时都自动打开项目
    host: 'localhost', // 指定域名
    port: 8080, // 端口号
    https: false,
    hotOnly: false,
  }
}
