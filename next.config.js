const { withPlugins } = require('next-compose-plugins');
const withSvgr = require('next-svgr');
const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, 'public/styles/custom.less'), 'utf-8'));

const nextConfigs = {
    distDir: '_next', // changes from .next to _next to enable serving static assets with nginx's minimal configuration
    env: {
        // environment variables here
        customKey: 'my-value',
    },
    exportTrailingSlash: false,
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            const antStyles = /antd\/.*?\/style.*?/;
            const origExternals = [...config.externals];
            config.externals = [
                (context, request, callback) => {
                    if (request.match(antStyles)) return callback();
                    if (typeof origExternals[0] === 'function') {
                        origExternals[0](context, request, callback);
                    } else {
                        callback();
                    }
                },
                ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ];

            config.module.rules.unshift({
                test: antStyles,
                use: 'null-loader',
                // include: /node_modules/,
            });
        }
        config.plugins.push(
            new FilterWarningsPlugin({
                exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
            })
        );

        return config;
    },
};

module.exports = withPlugins([withBundleAnalyzer, withSvgr, withLess, withCss], nextConfigs);
