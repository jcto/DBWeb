angular.module('starter.services', []).factory('Friends', function() {
			// Might use a resource here that returns a JSON array
			// Some fake testing data
			var friends = [{
				id: 0,
				name: 'Scruff McGruff'
			}, {
				id: 1,
				name: 'G.I. Joe'
			}, {
				id: 2,
				name: 'Miss Frizzle'
			}, {
				id: 3,
				name: 'Ash Ketchum'
			}, {
				id: 4,
				name: 'Scruff McGruff'
			}, {
				id: 5,
				name: 'G.I. Joe'
			}, {
				id: 6,
				name: 'Miss Frizzle'
			}, {
				id: 7,
				name: 'Ash Ketchum'
			}, {
				id: 8,
				name: 'Scruff McGruff'
			}, {
				id: 9,
				name: 'G.I. Joe'
			}, {
				id: 10,
				name: 'Miss Frizzle'
			}, {
				id: 11,
				name: 'Ash Ketchum'
			}, {
				id: 0,
				name: 'Scruff McGruff'
			}, {
				id: 12,
				name: 'G.I. Joe'
			}, {
				id: 13,
				name: 'Miss Frizzle'
			}, {
				id: 14,
				name: 'Ash Ketchum'
			}, {
				id: 15,
				name: 'Scruff McGruff'
			}, {
				id: 16,
				name: 'G.I. Joe'
			}, {
				id: 17,
				name: 'Miss Frizzle'
			}, {
				id: 18,
				name: 'Ash Ketchum'
			}, {
				id: 19,
				name: 'Scruff McGruff'
			}, {
				id: 20,
				name: 'G.I. Joe'
			}, {
				id: 21,
				name: 'Miss Frizzle'
			}, {
				id: 22,
				name: 'Ash Ketchum'
			}, {
				id: 23,
				name: 'Scruff McGruff'
			}, {
				id: 24,
				name: 'G.I. Joe'
			}, {
				id: 25,
				name: 'Miss Frizzle'
			}, {
				id: 26,
				name: 'Ash Ketchum'
			}, {
				id: 27,
				name: 'Scruff McGruff'
			}, {
				id: 28,
				name: 'G.I. Joe'
			}, {
				id: 29,
				name: 'Miss Frizzle'
			}, {
				id: 30,
				name: 'Ash Ketchum'
			}, {
				id: 31,
				name: 'Scruff McGruff'
			}, {
				id: 32,
				name: 'G.I. Joe'
			}, {
				id: 33,
				name: 'Miss Frizzle'
			}, {
				id: 34,
				name: 'Ash Ketchum'
			}, {
				id: 35,
				name: 'Scruff McGruff'
			}, {
				id: 36,
				name: 'G.I. Joe'
			}, {
				id: 37,
				name: 'Miss Frizzle'
			}, {
				id: 38,
				name: 'Ash Ketchum'
			}, {
				id: 39,
				name: 'Scruff McGruff'
			}];

		return {
			all: function() {
				return friends;
			},
			get: function(friendId) {
				// Simple index lookup
				return friends[friendId];
			}
		}
		})
		.directive("myDirective", function() {

		});