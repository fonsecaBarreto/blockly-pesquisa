const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    target: 'web',
    mode: 'development',
    entry: {
        main: './src/views/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [

        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),

        new webpack.optimize.ModuleConcatenationPlugin(),
            new CopyPlugin({
            patterns: [
              { from:  path.resolve(__dirname, './node_modules/blockly/media'), to: path.resolve(__dirname, 'dist/media') },
              { from: path.resolve(__dirname, "src/**/*.css"), 
                to({ context, absoluteFilename }) {
                    return path.resolve(__dirname, 'dist/static',"[name].css");
                },
            }
            ],
        }),

        new HandlebarsPlugin({
            entry: path.join(process.cwd(), "src", "views", "*.hbs"),
            output: path.join(process.cwd(), "dist", "[name].html"),
            //data: require("./app/data/project.json"),//data: path.join(__dirname, "app/data/project.json"),
            partials: [ path.join(process.cwd(), "src", "components", "*", "*.hbs") ],
            helpers: {
                nameOfHbsHelper: Function.prototype,
                projectHelpers: path.join(process.cwd(), "helpers", "*.helper.js")
            },
            onBeforeSetup: function (Handlebars) {},
            onBeforeAddPartials: function (Handlebars, partialsMap) {},
            onBeforeCompile: function (Handlebars, templateContent) {},
            onBeforeRender: function (Handlebars, data, filename) {},
            onBeforeSave: function (Handlebars, resultHtml, filename) {},
            onDone: function (Handlebars, filename) {}
        })
    ],
    /* module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
                ]
            }
        ]
    }, */
    devServer: {
        port: 3000,
        compress: true, port: 3000, hot: true, open: true, 
        historyApiFallback:{
            disableDotRule: false,
            rewrites: [ 
                { from: "^/", to: "/index.html"},
            ]
        }
    }
};
