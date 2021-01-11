const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './index.jsx',
    },
    context: path.resolve(__dirname, "static_src"),
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: 'app.js',
        publicPath: '/static/build/',
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "static_src"),
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/env', '@babel/react'],
                plugins: [
                    [
                        "@babel/plugin-proposal-class-properties",
                        {
                            "loose": true
                        }
                    ]
                ]

            }

        }, ],
    },
};

// const path = require("path");
// const webpack = require('webpack');

// module.exports = {
//     entry: {
//         app: './index.jsx',
//     },
//     context: path.resolve(__dirname, "static_src"),
//     //devtool: 'inline-source-map',
//     output: {
//         path: path.resolve(__dirname, "static", "build"),
//         filename: 'app.js',
//         publicPath: '/static/build/',
//     },

//     module: {
//         rules: [{
//             test: /\.(js|jsx)$/,
//             include: path.resolve(__dirname, "static_src"),
//             loader: 'babel-loader',
//             exclude: /node_modules/,
//             options: {
//                 presets: ['@babel/env', '@babel/react'],
//                 // plugins: [
//                 //     [
//                 //         "@babel/plugin-proposal-class-properties",
//                 //         {
//                 //             "loose": true
//                 //         }
//                 //     ]
//                 // ]
//             }
//         }, ],
//     },
// };

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = {
//     mode: 'development',
//     entry: {
//         index: './index.jsx'
//     },
//     context: path.resolve(__dirname, 'src'),
//     devtool: 'inline-source-map',
//     devServer: {
//         contentBase: './dist'
//     },
//     module: {
//         rules: [{
//             test: /\.jsx?$/,
//             include: path.resolve(__dirname, 'src'),
//             exclude: path.resolve(__dirname, 'node_modules'),
//             loader: 'babel-loader',
//             options: {
//                 presets: ['@babel/env', '@babel/react'],
//                 plugins: ['@babel/plugin-proposal-class-properties']
//             }
//         }]
//     },
//     plugins: [
//         new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
//         new HtmlWebpackPlugin({
//             template: 'index.html'
//         }),
//     ],
//     output: {
//         filename: '[name].bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     resolve: {
//         extensions: ['.js', '.jsx']
//     }
// };

// const path = require("path");
// const webpack = require('webpack');

// module.exports = {
//     entry: {
//         app: './index.jsx',
//     },
//     context: path.resolve(__dirname, "src"),
//     output: {
//         path: path.resolve(__dirname, "static", "build"),
//         filename: 'app.js',
//         //publicPath: '/static/build/',
//     },

//     module: {
//         rules: [{
//             test: /\.(js|jsx)$/,
//             include: path.resolve(__dirname, "src"),
//             loader: 'babel-loader',
//             exclude: /node_modules/,
//             options: {
//                 presets: ['@babel/env', '@babel/react'],
//             }
//         }, ],
//     },
// };