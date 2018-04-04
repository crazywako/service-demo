const htmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')
module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        publicPath: config.publicPath || '/'
    },
    module: {
        rules: [
            {
                test: /\.[s]?css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties','@babel/plugin-proposal-optional-chaining','@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: {
            index: config.publicPath || '/'
        },
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8756',
                //pathRewrite: {'^/api' : ''}
            }
        },
        contentBase: './src'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}