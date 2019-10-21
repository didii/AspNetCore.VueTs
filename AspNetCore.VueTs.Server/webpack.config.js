const path = require('path');
const webpack = require('webpack');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const bundleOutputDir = './wwwroot/dist';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    const devMode = isDevBuild ? 'development' : 'production';

    return [{
        mode: devMode,
        devtool: devMode ? 'eval-source-map' : undefined,
        stats: { modules: false },
        context: __dirname,
        resolve: {
            extensions: ['.js', '.ts', '.vue'],
            plugins: [new TsConfigPathsPlugin()]
        },
        entry: { 'main': './ClientApp/boot.ts' },
        module: {
            rules: [
                { test: /\.vue$/, include: /ClientApp/, loader: 'vue-loader' },
                { test: /\.tsx?$/, include: /ClientApp/, loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] } },
                { test: /\.css$/, use: isDevBuild ? ['vue-style-loader', 'css-loader'] : ExtractTextPlugin.extract({ use: 'css-loader?minimize' }) },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
            ]
        },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: 'dist/',
            devtoolModuleFilenameTemplate: info => {
                var $filename = 'sources://' + info.resourcePath;
                if (info.resourcePath.match(/\.vue$/) && !info.query.match(/type=script/)) {
                    $filename = 'webpack-generated:///' + info.resourcePath + '?' + info.hash;
                }
                return $filename;
            },
            devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]',
        },
        plugins: [
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(isDevBuild ? 'development' : 'production')
                }
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new UglifyJsPlugin(),
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin('site.css')
        ])
    }];
};