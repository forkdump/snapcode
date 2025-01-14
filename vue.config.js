const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/snapcode/'
    : '/',
  devServer: {
    host: 'localhost',
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src/'),
        vue$: path.resolve('./node_modules/vue/dist/vue.runtime.esm-bundler'),
      },
    },
  },
};
