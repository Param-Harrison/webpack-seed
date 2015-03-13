'use strict';

function ngModule(componentName) {
	var c = require('vendor/' + componentName);
	return c.name;
}

module.exports = {
	ngModule: ngModule
};