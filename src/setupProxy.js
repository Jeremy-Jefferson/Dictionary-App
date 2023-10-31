const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.pexels.com',
      changeOrigin: true,
      headers: {
        Authorization: 'CDTpYe8FTwfnFVEaOBifyCVBW12tFtTvaeiyT1aYepGnaKv2cmMjiox7',
      },
    })
  );
};