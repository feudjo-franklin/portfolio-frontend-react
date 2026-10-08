const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    const target = process.env.REACT_APP_BACKEND_PROXY || 'http://localhost:8080';

    console.log('[setupProxy] Proxy /api → ' + target);

    app.use(
        '/api',
        createProxyMiddleware({
            target,
            changeOrigin: true,
        })
    );
};