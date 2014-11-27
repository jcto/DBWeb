angular.module('starter.services', []).factory('Friends', function() {
			// Might use a resource here that returns a JSON array
			// Some fake testing data
			var friends = [{
				id: 0,
				src:"img/blue-album.jpg",
				name: 'Scruff McGruff'
			}, {
				id: 1,
				src:"img/blue-album.jpg",
				name: 'G.I. Joe'
			}, {
				id: 2,
				src:"img/blue-album.jpg",
				name: 'Miss Frizzle'
			}, {
				id: 3,
				src:"img/blue-album.jpg",
				name: 'Ash Ketchum'
			}, {
				id: 4,
				src:"img/blue-album.jpg",
				name: 'Scruff McGruff'
			}, {
				id: 5,
				src:"img/blue-album.jpg",
				name: 'G.I. Joe'
			}, {
				id: 6,
				src:"img/blue-album.jpg",
				name: 'Miss Frizzle'
			}, {
				id: 7,src:"img/blue-album.jpg",
				name: 'Ash Ketchum'
			}, {
				id: 8,src:"img/blue-album.jpg",
				name: 'Scruff McGruff'
			}, {
				id: 9,src:"img/blue-album.jpg",
				name: 'G.I. Joe'
			}, {
				id: 10,src:"img/blue-album.jpg",
				name: 'Miss Frizzle'
			}, {
				id: 11,src:"img/blue-album.jpg",
				name: 'Ash Ketchum'
			}, {
				id: 0,src:"img/blue-album.jpg",
				name: 'Scruff McGruff'
			}, {
				id: 12,src:"img/blue-album.jpg",
				name: 'G.I. Joe'
			}, {
				id: 13,src:"img/blue-album.jpg",
				name: 'Miss Frizzle'
			}, {
				id: 14,src:"img/blue-album.jpg",
				name: 'Ash Ketchum'
			}, {
				id: 15,src:"img/blue-album.jpg",
				name: 'Scruff McGruff'
			}, {
				id: 16,src:"img/blue-album.jpg",
				name: 'G.I. Joe'
			}, {
				id: 17,src:"img/blue-album.jpg",
				name: 'Miss Frizzle'
			}, {
				id: 18,src:"img/blue-album.jpg",
				name: 'Ash Ketchum'
			}, {
				id: 19,src:"img/blue-album.jpg",
				name: 'Scruff McGruff'
			}, {src:"img/blue-album.jpg",
				id: 20,
				name: 'G.I. Joe'
			}, {
				id: 21,src:"img/blue-album.jpg",
				name: 'Miss Frizzle'
			}, {
				id: 22,src:"img/blue-album.jpg",
				name: 'Ash Ketchum'
			}, {
				id: 23,src:"img/blue-album.jpg",
				name: 'Scruff McGruff'
			}, {
				id: 24,src:"img/blue-album.jpg",
				name: 'G.I. Joe'
			}, {
				id: 25,src:"img/blue-album.jpg",
				name: 'Miss Frizzle'
			}, {
				id: 26,src:"img/blue-album.jpg",
				name: 'Ash Ketchum'
			}, {
				id: 27,src:"img/blue-album.jpg",
				name: 'Scruff McGruff'
			}, {
				id: 28,src:"img/blue-album.jpg",
				name: 'G.I. Joe'
			}, {
				id: 29,src:"img/blue-album.jpg",
				name: 'Miss Frizzle'
			}, {
				id: 30,src:"img/blue-album.jpg",
				name: 'Ash Ketchum'
			}, {
				id: 31,src:"img/blue-album.jpg",
				name: 'Scruff McGruff'
			}, {
				id: 32,src:"img/blue-album.jpg",
				name: 'G.I. Joe'
			}, {
				id: 33,src:"img/blue-album.jpg",
				name: 'Miss Frizzle'
			}, {
				id: 34,src:"img/blue-album.jpg",
				name: 'Ash Ketchum'
			}, {
				id: 35,src:"img/blue-album.jpg",
				name: 'Scruff McGruff'
			}, {
				id: 36,src:"img/blue-album.jpg",
				name: 'G.I. Joe'
			}, {
				id: 37,src:"img/blue-album.jpg",
				name: 'Miss Frizzle'
			}, {
				id: 38,src:"img/blue-album.jpg",
				name: 'Ash Ketchum'
			}, {
				id: 39,src:"img/blue-album.jpg",
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