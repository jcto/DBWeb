angular.module('starter.controllers', [])
	.controller("myController", function() {})
	.controller("indexController", function($scope, $location, $http) {
		//		alert("er");
	})
	.controller("infiniteScrollController", function($scope, Friends) {
		var checked=true;
		$scope.check=function(){
			return checked;
		};
		$scope.togg=function(){
			checked=!checked;
		};
		var currentStart = 0;
		var hasMore = true;
		//		var items=['name1','name1','name1','name1','name1','name1','name1','name1','name1','name1']
		var items = Friends.all()
		$scope.items = [];
		$scope.loadMore = function(name) {
			console.log(name);
			for (var i = currentStart; i < currentStart + 10; i++) {
				$scope.items.push(items[i]);
			}
			currentStart += 10;
			if (currentStart < 40) {
				if (currentStart > 10) {

					for (var x = 0; x < 10000; x++) {
						console.log("fe");
					}
				}
				$scope.$broadcast('scroll.infiniteScrollComplete');
			} else {
				hasMore = false;
			}

		}
		$scope.moreDataCanBeLoaded = function() {
				return hasMore;
		}
			//		$scope.$on('$stateChangeSuccess', function() {
			//			$scope.loadMore();
			//		});
	})
	.controller("cssComponentsController",function($scope){
		
	});