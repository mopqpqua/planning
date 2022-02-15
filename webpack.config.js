const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.vue', '.js'],
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@atoms': path.resolve(__dirname, 'src/components/atoms'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
            {
                test: [/\.(png|jpg)$/],
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name][ext]',
                },
            },
            {
                test: [/\.svg$/],
                type: 'asset/inline',
            },
            {
                test: [/\.(woff|woff2|ttf)$/],
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new CleanWebpackPlugin,
        new VueLoaderPlugin()
    ],
};
