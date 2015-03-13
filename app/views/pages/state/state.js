require('views/pages/state/state.html');

module.exports = angular.module('webPack').
	controller('StateCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
		$scope.name = 'Paramanantham Harrison';
	}]);
