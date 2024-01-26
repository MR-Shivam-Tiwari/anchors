const proxy = require('http-proxy-middleware');

module.exports = function(app) {
 try{
    app.use(
        '/api',
        proxy({
          target: 'http://localhost:3002',
          changeOrigin: true
        })
      )
 }
 catch(err){
    console.log(err.message);
 }
}