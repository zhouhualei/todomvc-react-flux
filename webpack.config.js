module.exports = {
    cache: true,
    entry: "./js/app.js",
    output: {
        path: __dirname + "/js",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader'}
        ]
    }
};
