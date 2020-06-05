const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // dev环境配置
const WebpackBar = require('webpackbar')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: './src/main.js'
  },
  // 配置出口
  output: {
    filename: 'js/[name].[hash]-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/react", "@babel/preset-env"],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  absoluteRuntime: false,
                  corejs: 2,
                  helpers: true,
                  regenerator: true,
                  useESModules: false
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react", "@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              // 改成正确的名字
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: 'sass-resources-loader',
            options: {
              // Provide path to the file with resources
              // Or array of paths
              resources: [path.resolve(__dirname, 'src/static/common.scss')]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],//这几个后缀名的文件后缀可以省略不写
    alias: {
      '@': path.join(__dirname, './src')//这样 @就表示根目录src这个路径
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new HtmlWebpackPlugin({
      title: '个人博客',
      filename: 'index.html',
      template: 'src/public/index.html',
      hash: true,
      minify: { collapseWhitespace: true }
    }),
    new CleanWebpackPlugin({ dry: true }),
    new WebpackBar(),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    overlay: true
  }
}
