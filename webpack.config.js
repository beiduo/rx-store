const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './example/src/index.html'),
    filename: './index.html',
})

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './example/src/index.tsx'),
    output: {
        path: path.join(__dirname, 'example/dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'ts-loader',
            },
            {
                enforce: 'pre',
                test: /\.tsx?/,
                loader: 'source-map-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|mp4)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 20,
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },
    plugins: [htmlWebpackPlugin],
    devServer: {
        port: 3005,
    },
}