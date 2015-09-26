var express = require('express'), http = require('http');

// Create an express application 
var app = express()
			.use(function (req, res, next) {
				res.end('Hello Express!');
			});
			
http.createServer(app).listen(3000);