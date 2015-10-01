var demoApp = angular.module('demo', []);
demoApp.controller('MainController', ['$scope', 'todoWebService', function ($scope, todoWebService) {
	
	// setup a view model 
	var vm = {};
	
	vm.list = [];
		
	todoWebService.getItems().then(function (response) {
		vm.list = response.data.items;
	});
	
	vm.addItem = function () {
		var item = {
			details: vm.newItemDetails	
		};
		
		vm.newItemDetails = '';
		
		// Send the request to the server and add the item once done
		todoWebService.addItem(item).then(function (response) {
			vm.list.push({
				_id: response.data.itemId,
				details: item.details
			});
		});
	};
	
	vm.removeItem = function (itemToRemove) {
		vm.list = vm.list.filter(function (item) { return item._id !== itemToRemove._id });
		todoWebService.removeItem(itemToRemove);
	};
	
	vm.newItemDetails = '';
	
	$scope.vm = vm;
	
}]);

demoApp.service('todoWebService', ['$http', function ($http) {
	var root = '/todo';
	return {
		getItems: function () {
			return $http.get(root);
		},
		addItem : function (item) {
			return $http.post(root, item);
		},
		removeItem: function(item) {
			return $http.delete(root + '/' +item._id);
		}
	}
}])