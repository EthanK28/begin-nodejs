var connect = require('connect')
    , http = require('http');
// Create a connect dispatcher
var app = connect();
http.createServer(app)  // Register with http 
    .listen(3000);
console.log('server running on port 3000');