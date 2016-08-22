"use strict";

module.exports = {
	type: 'service',
	prerequisites: {
		cpu: '',
		memory: ''
	},
	"serviceVersion": 1,
	"serviceName": "myTestService",
	"serviceGroup": "SOAJS Test Services",
	"servicePort": 4120,
	"requestTimeout": 30,
	"requestTimeoutRenewal": 5,

	"errors": {},
	"schema": {
		"/success" : {
			"_apiInfo": {
				"l": "Success API",
				"group": "Service APIs",
			}
		},
        "/fail" : {
			"_apiInfo": {
				"l": "Failure API",
				"group": "Service APIs",
			}
		}
	}
};
