const paths = require('./paths')
const { appIndexJs, appBuild } = paths
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = ({ analysis }) => {
    return {
        entry: {
            index: appIndexJs
        },

        output: {
            path: appBuild,
            filename: '[name].[chunkhash].js',
            libraryTarget: 'umd'
        },

        plugins: [...(analysis ? [new BundleAnalyzerPlugin()] : [])],
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            // get the name. E.g. node_modules/packageName/not/this/part.js
                            // or node_modules/packageName
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

                            // npm package names are URL-safe, but some servers don't like @ symbols
                            return `npm.${packageName.replace('@', '')}`
                        }
                    }
                }
            }
        }
    }
}
