module.exports = {
    cache: true,
    entry: "./app/js/app.js",
    output: {
        path: __dirname + "/app",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader'}
        ]
    }
};
