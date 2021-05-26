const { resolve } = require('path'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    index: './view/index.js',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)/,
        use: [
          {
            loader: 'index',
            options: {
              limit: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  resolveLoader: {
    // 告诉 webpack 该去那个目录下找 loader 模块
    modules: ['node_modules', resolve(__dirname, 'src')],
  },
};
