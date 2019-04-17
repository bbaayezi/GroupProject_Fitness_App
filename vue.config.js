const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/public/token'
        }
      }
    }
  },
  chainWebpack: (config)=>{
    config.resolve.alias
        .set('@$', resolve('src/libs/vue-material-dashboard'))
  }
}