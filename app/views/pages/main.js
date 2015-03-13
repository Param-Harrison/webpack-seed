require('views/pages/main.html');

module.exports = angular.module('webPack').
	controller('MainCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
		$scope.tabs = [
			{ heading: 'First', route: 'main.state', active: true },
			{ heading: 'Second', route: 'main.nostate', active: false }
		];

		$scope.go = function(route) {
			$state.go(route);
		};

		$scope.active = function(route) {
			return $state.is(route);
		};

		$scope.$on("$stateChangeSuccess", function() {
			$scope.tabs.forEach(function(tab) {
				tab.active = $scope.active(tab.route);
			});
		});
	}]);

require('views/pages/state/state.js');
