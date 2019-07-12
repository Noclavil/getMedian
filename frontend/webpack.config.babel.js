import path from 'path';
export default {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    externals:{
        fs:    "commonjs fs",
        path:  "commonjs path"
    },
    node: {
        fs: "empty"
    },
    target: 'node'
};