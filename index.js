'use strict';

var soajs = require('soajs');
var config = require('./config.js');

var service = new soajs.server.service(config);

service.init(function(){

    service.get("/success", function(req, res) {
		req.soajs.log.info("Success api hit");
        return res.jsonp(req.soajs.buildResponse(null, true));
	});

    service.get("/fail", function(req, res) {
        //simulating service failure//////
        req.soajs.log.info("Failure api hit");
        req.soajs.log.info("Exiting ...");
        process.exit(1);
        //////////////////////////////////
	});

	service.start();
});
