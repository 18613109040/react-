const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/', //填写服务器绝对路径
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js'
    },
    // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ],
        alias: {

        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader'
        },  {
            test: /\.html$/,
            use: 'html-loader?attrs=img:src img:data-src'
        }, {
            test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
            use: ['file-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]']
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),

        new HtmlWebpackPlugin({
            filename: './index.html',
            template: '../views/tpl/index.tpl.html',
            hash: true,
            chunks: ['vendor', 'app'],
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        })
    ]
}