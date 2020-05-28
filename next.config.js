const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    distDir: 'build',
    env: {
        // environment variables here
        customKey: 'my-value',
    },
    // Use the CDN in production and localhost for development.
    // assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
    exportTrailingSlash: true,
};
