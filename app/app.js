'use strict';

var ngModule = require('vendor/utils').ngModule;
var angular = require('vendor/angular');

// Declare app level module
var app = angular.module('webPack', [
	ngModule('ui.router'),
	ngModule('ngAria'),
	ngModule('ngAnimate'),
	ngModule('ui.bootstrap'),
	ngModule('ngResource')
]);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/main/state-with-controller');

	$stateProvider.state('main', {
		abstract: true,
		url: '/main',
		templateUrl: 'views/pages/main.html',
		controller: 'MainCtrl'
	}).
		state('main.state', {
			url: '/state-with-controller',
			views: {
				'main': {
					templateUrl: 'views/pages/state/state.html',
					controller: 'StateCtrl'
				}
			}
		}).
		state('main.nostate', {
			url: '/state-without-controller',
			views: {
				'main': {
					templateUrl: 'views/pages/templates/state.html'
				}
			}
		});;
});

// Import the top level requires
require('styles/app.scss');

// Controllers to handle additional views
require('views/pages/main.js');

// Expose the app
module.exports = app;
