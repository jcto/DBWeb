angular.module('starter.controllers', [])
	.controller("myController", function() {})
	.controller("indexController", function($scope, $location, $http) {
		//		alert("er");
	})
	.controller("infiniteScrollController", function($scope, Friends) {
		var checked = true;
		$scope.check = function() {
			return checked;
		};
		$scope.togg = function() {
			checked = !checked;
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
	.controller("cssComponentsController", function($scope) {

	})
	.controller("buttonsController", function() {

	})
	.controller("listController", function() {

	})
	.controller("actionSheetController", function($scope, $ionicActionSheet, $timeout) {
		// Triggered on a button click, or some other target
		$scope.show = function() {
			// Show the action sheet
			var hideSheet = $ionicActionSheet.show({
				buttons: [{
					text: '<b>Share</b> This'
				}, {
					text: 'Move'
				}],
				destructiveText: 'you del',
				titleText: '这里是title名字Modify your album',
				cancelText: 'Cancel me',
				cancel: function() {
					// add cancel code..
					console.log("点击了cancle");
				},
				buttonClicked: function(index) {
					console.log(index);
					return true;
				},
				destructiveButtonClicked: function() {
					console.log("destructiveButtonClicked");
				},
				cancelOnStateChange: function() {
						console.log("cancelOnStateChange");
					}
					/**
				 * {string=} destructiveText The text for a 'danger' on the action sheet.
{function=} cancel Called if the cancel button is pressed, the backdrop is tapped or the hardware back button is pressed.
{function=} buttonClicked Called when one of the non-destructive buttons is clicked, with the index of the button that was clicked and the button object. Return true to close the action sheet, or false to keep it opened.
{function=} destructiveButtonClicked Called when the destructive button is clicked. Return true to close the action sheet, or false to keep it opened.
{boolean=} cancelOnStateChange Whether to cancel the actionSheet when navigating to a new state. Default true.
				 */
			});
			// For example's sake, hide the sheet after two seconds
			$timeout(function() {
				//				hideSheet();
			}, 2000);
		};
	})
	.controller("backDropController", function($scope, $ionicBackdrop, $timeout) {
		$scope.action = function() {
			$ionicBackdrop.retain();
			$timeout(function() {
				$ionicBackdrop.release();
			}, 1000);
		};
	})
	.controller("formIputsController", function($scope, $timeout) {
		$scope.hand = function(isChecked) {
			console.log(isChecked);
		}
	})
	.controller("loadingContrl", function($scope, $ionicLoading) {
		//		$scope.items=Friends.all();
		$scope.show = function() {
			$ionicLoading.show({
				template: '<button ng-click="hide()">Loading...</button>'
			});
		};
		$scope.hide = function() {
			$ionicLoading.hide();
		};

	})
	.controller("listsContrl", function($scope, Friends) {
		$scope.items = Friends.all();

	})
	.controller("popoverController", function($scope, $ionicPopover, $ionicPopup, $timeout) {
		$ionicPopover.fromTemplateUrl('my-popover.html', {
			scope: $scope,
		}).then(function(popover) {
			$scope.popover = popover;
		});
		$scope.openPopover = function($event) {
			$scope.popover.show($event);
		};
		$scope.closePopover = function() {
			$scope.popover.hide();
		};
		//Cleanup the popover when we're done with it!
		$scope.$on('$destroy', function() {
			console.log("正在移除");
			$scope.popover.remove();
		});
		// Execute action on hide popover
		$scope.$on('popover.hidden', function() {
			// Execute action
			console.log("已经隐藏");
		});
		// Execute action on remove popover
		$scope.$on('popover.removed', function() {
			console.log("已经移除");
			// Execute action
		});

		/*
		 * 下面是popUp的
		 */
		// Triggered on a button click, or some other target
		$scope.showPopup = function() {
			$scope.data = {}

			// An elaborate, custom popup
			var myPopup = $ionicPopup.show({
				template: '<input type="password" ng-model="data.wifi">',
				title: 'Enter Wi-Fi Password',
				subTitle: 'Please use normal things',
				scope: $scope,
				buttons: [{
					text: 'Cancel'
				}, {
					text: '<b>Save</b>',
					type: 'button-positive',
					onTap: function(e) {
						if (!$scope.data.wifi) {
							//don't allow the user to close unless he enters wifi password
							e.preventDefault();
						} else {
							return $scope.data.wifi;
						}
					}
				}, ]
			});
			myPopup.then(function(res) {
				console.log('Tapped!', res);
			});
			$timeout(function() {
				myPopup.close(); //close the popup after 3 seconds for some reason
			}, 3000);
		};
		// A confirm dialog
		$scope.showConfirm = function() {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Consume Ice Cream',
				template: 'Are you sure you want to eat this ice cream?'
			});
			confirmPopup.then(function(res) {
				if (res) {
					console.log('You are sure');
				} else {
					console.log('You are not sure');
				}
			});
		};

		// An alert dialog
		$scope.showAlert = function() {
			var alertPopup = $ionicPopup.alert({
				title: 'Don\'t eat that!',
				template: 'It might taste good'
			});
			alertPopup.then(function(res) {
				console.log('Thank you for not eating my delicious ice cream cone');
			});
		};
	})
	.controller("gestureController", function($scope, $ionicGesture, $window, $interval) {
		/**
		 * hold, tap, doubletap, drag, dragstart, dragend, dragup, dragdown,
		 *dragleft, dragright, swipe, swipeup, swipedown, swipeleft, swiperight,
		 *transform, transformstart, transformend, rotate, pinch, pinchin, pinchout,
		 *touch, release
		 */
		$scope.lastEventCalled = 'Try to Drag the content up, down, left or rigth';
		var element = angular.element(document.querySelector('#eventPlaceholder'));
		var events = [{
			event: 'dragup',
			text: 'You dragged me UP!'
		}, {
			event: 'dragdown',
			text: 'You dragged me Down!'
		}, {
			event: 'dragleft',
			text: 'You dragged me Left!'
		}, {
			event: 'dragright',
			text: 'You dragged me Right!'
		}];

		angular.forEach(events, function(obj) {
			$ionicGesture.on(obj.event, function(event) {
				$scope.$apply(function() {
					$scope.lastEventCalled = obj.text;
				});
			}, element);
		});
	})
	.controller("eventsController", function($scope, $ionicBackdrop, $timeout) {
		$scope.onHold = function() {
			alert("onHold");
		}
	})

;

/*
                   _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\  =  /O
               ____/`---'\____
             .'  \\|     |//  `.
            /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
           \  .-\__  `-`  ___/-. /
         ___`. .'  /--.--\  `. . __
      ."" '<  `.___\_<|>_/___.'  >'"".
     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
     \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
         佛祖保佑       永无BUG
*/