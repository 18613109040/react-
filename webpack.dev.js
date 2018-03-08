const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const cssnano = require('cssnano');
const postcssOpts = {
    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    plugins: () => [
        autoprefixer({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
        }),
        pxtorem({rootValue: 100, propWhiteList: []})
    ],
    cssnano
};
module.exports = merge(common, {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'react-hot-loader/patch',  //不刷新界面更新
            `webpack-dev-server/client?http://localhost:3001`,
            'webpack/hot/only-dev-server',
            './index.js'
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [{
            test: /\.(less|css)$/,
            use: ['style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: postcssOpts
                },
                {
                    loader: 'less-loader',
                    options: {modifyVars: {"@hd": "2px", "@brand-primary": "#FAC34C"}}
                }
            ]
        }]
    }
})
