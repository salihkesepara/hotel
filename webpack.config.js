const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

var prod = "production ";
// var dev = "development ";
var env = process.env.NODE_ENV;

var config = {
  devtool: false,
  entry: ["babel-polyfill", "./src/index.js", "react-hot-loader/patch"],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, "dist"),
    filename: env == prod ? "js/[name].[hash].min.js" : "js/[name].[hash].js"
  },
  performance: {
    hints: false
    // maxEntrypointSize: 500000,
    // maxAssetSize: 500000
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  resolve: {
    alias: { "react-dom": "@hot-loader/react-dom" }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html"
    }),
    // new CopyPlugin([{ from: "./src/assets/images", to: "./assets/images" }])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {}
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "assets/fonts"
            }
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.json$/,
        use: ["json-loader"]
      },
      // {
      //   test: /\.(svg|png|jpg|gif)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[name].[hash].[ext]",
      //       outputPath: "assets/images"
      //     }
      //   }
      // }
    ]
  }
};

module.exports = config;
