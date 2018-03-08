const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//这里我们使用webpack-bundle-analyzer来分析 Webpack 生成的包体组成并且以可视化的方式反馈给开发者
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const cssnano = require('cssnano');
const argv = require('yargs').argv
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
let plugins =  [
    new ExtractTextPlugin({
        filename: 'styles/[name].css'
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true, //加载器是否要切换到优化模式
        debug: false //加载器是否为 debug 模式
    }),
    new UglifyJSPlugin()
]
if (!!argv.json) {
    plugins.push(
        new BundleAnalyzerPlugin({
            generateStatsFile: true
        })
    )
}

module.exports = merge(common, {
    devtool: 'source-map',
    entry: {
        app: ['./index']
    },
    plugins,
    //如果你想要preact，可以取消注释
    //resolve: {
    //    alias: {
    //        'react':'preact-compat/dist/preact-compat',
    //        'react-dom': 'preact-compat/dist/preact-compat',
    //        'create-react-class': 'preact-compat/lib/create-react-class'
    //    }
    //},
    module: {
        rules: [{
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: postcssOpts
                    },
                    {
                        loader: 'less-loader', options: {modifyVars: {"@hd": "2px", "@brand-primary": "#FAC34C"}}
                    }]
            })
        }]
    }
})
