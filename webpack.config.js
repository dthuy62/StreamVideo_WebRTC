const path = require('path');
const webpack = require('webpack')
module.exports = {
    entry : './public/javascripts/common.js',
    output : {
        filename : 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
        plugins: [
            // fix "process is not defined" error:
            // (do "npm install process" before running the build)
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
        ]
};
