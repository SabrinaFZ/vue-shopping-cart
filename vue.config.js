const webpack = require('webpack');

const apiURL = 'http://localhost:3000';

module.exports = {
  publicPath: '/',
  assetsDir: 'assets',

  devServer: {
    proxy: {
      '^/api': {
        target: apiURL,
        changeOrigin: true
      }
    },
    open: true,
    hot: true,
    host: 'localhost',
    port: 8000
  },

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          API_URL: JSON.stringify(process.env.VUE_APP_API_URL)
        }
      })
    ]
  },

  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/styles/styles.scss";`
      }
    }
  },
};
