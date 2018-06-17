module.exports = {
    entry: './js/main.js',
    output: {
        filename: "boundle.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100,
    },
    devtool: "source-map"
};