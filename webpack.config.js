// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: {
      common: [
        './static/assets/css/icons.css',
        './static/assets/css/main.css',
        './static/assets/css/navbar.css',
        './static/assets/js/navbar.js'
      ],
      homepage: [
        './static/assets/css/about.css',
        './static/assets/css/achievements.css',
        './static/assets/css/experiences.css',
        './static/assets/css/home.css',
        './static/assets/css/projects.css',
        './static/assets/css/recent-posts.css',
        './static/assets/css/skills.css',
        './static/assets/js/home.js',
      ],
      blog: [
        './static/assets/css/list.css',
        './static/assets/js/list.js'
      ],
      post: [
        "./static/assets/css/single.css",
        "./static/assets/js/single.js"
      ],
      404: [
        "./static/assets/css/404.css"
      ]
    },
    output: {
      path: path.resolve('./static/assets/dist'),
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        }
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css'
      })
    ],
  };