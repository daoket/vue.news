const path = require('path');
const env = process.env.NODE_ENV === 'development'

function resolve(dir = '') {
  return path.join(__dirname, './src', dir);
}

module.exports = {
  publicPath: './',
  productionSourceMap: env ? true : false,
  // devServer: {
  //   port: 8080,
  //   host: ip,
  //   proxy: {
  //     '/': {
  //       target: 'http://127.0.0.1:9527',
  //       ws: false,
  //       changeOrigin: true, //允许跨域
  //       pathRewrite: {
  //         '^/': '/'
  //       }
  //     }
  //   }
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('components'),
      }
    }
  }
}