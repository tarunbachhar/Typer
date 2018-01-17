const webpack =require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const config = {
  entry:'./src/index.js',
  devtool:'source-map',
  devServer:{
    contentBase:'./dist'
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      inject:'body'
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify('production')
    })
  ],
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/(node_module)/,
        loader:'babel-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|gif|svg|jpg)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  }
}

module.exports = config
