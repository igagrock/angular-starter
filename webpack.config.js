// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    vendor : ["jquery","lodash" , "angular"],
    app : './app/app.js' 
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-bundle.js', //will later become component etc,
   // publicPath: 'localhost:3000'
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: path.join(__dirname, "/dist/"),
   // hot : true , 
    port : 4000
  },
  module: {
    rules: [
      {
        test : /\.html$/,
        exclude : /node_modules/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /src.*\.js$/,
        include: path.resolve(__dirname, 'src/app'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
       },
      {
        //similarly for css without sass loader
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/app'),
        use: ExtractTextPlugin.extract({
          fallback :'style-loader',
           use : [
             {loader:"css-loader",options:{sourceMap: true}},
             {loader:"postcss-loader",options:{sourceMap: true}},
             {loader:"sass-loader",options:{sourceMap: true}}
           ]
        })
      },
      {  
        test: /\.css$/,
        include: path.resolve(__dirname, 'node_modules/bootstrap-css/lib/'),
        use: ExtractTextPlugin.extract({
          fallback :'style-loader',
           use : [
             {loader:"css-loader",options:{sourceMap: true}},
             {loader:"postcss-loader",options:{sourceMap: true}}
           ]
        })
      },
      {
        test: /\.(jp(e*)g|svg)$/, 
        include: path.resolve(__dirname, 'src/app/images'),
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: 'images/'
          }
        }]
      },
      {
        test: /\.png$/, 
        include: path.resolve(__dirname, 'src/app/images'),
        use: [{
          loader: 'url-loader',
          options: { 
            limit: 100000 ,
            name: '[name]-[hash].[ext]',
            outputPath : 'images/'
          } // Convert images < 100k to base64 strings
          
        }]
      }
  ]
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('styles/app.css'),
    new HtmlWebpackPlugin({
      title : 'Webpack2 +angular',
      template :'./app/app.html',
      chunks : 'app',
      cache : true
    }),
    new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor' , // Specify the common bundle's name.
          filename : 'js/vendor-[hash].js',
         // minChunks : Infinity,
          //minSize : 1000,
          //children : true
          minChunks(module , count){
            var context =  module.context;
            return context && context.indexOf('node_modules') >= 0;
          }
    }),
   new UglifyJSPlugin({ test: /\.js($|\?)/i }),
  //  new webpack.optimize.AggressiveSplittingPlugin({
  //       minSize: 30000, //Byte, split point. Default: 30720
  //       maxSize: 50000, //Byte, maxsize of per file. Default: 51200
  //      // chunkOverhead: 0, //Default: 0
  //      // entryChunkMultiplicator: 1, //Default: 1
  //     }),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 1800,
        proxy: 'http://localhost:4000/'
      },
      {
        reload: false
      }
    )
  ]
};


module.exports = config