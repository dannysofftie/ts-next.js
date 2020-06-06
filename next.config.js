const { withPlugins, optional } = require('next-compose-plugins');
const withSvgr = require('next-svgr');
const withCss = require('@zeit/next-css');

const isProd = process.env.NODE_ENV === 'production';

const nextConfigs = {
    distDir: '_next', // changes from .next to _next to enable serving static assets with nginx's minimal configuration
    env: {
        // environment variables here
        customKey: 'my-value',
    },
    // Use the CDN in production and localhost for development.
    // assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
    exportTrailingSlash: false,
};

module.exports = withPlugins([withSvgr, withCss], nextConfigs);
