require('@babel/core');
require('@babel/polyfill')
require('@babel/register')({
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-optional-chaining", "@babel/plugin-syntax-dynamic-import","@babel/plugin-proposal-object-rest-spread"]
});
require('dotenv').config()
require('./main')