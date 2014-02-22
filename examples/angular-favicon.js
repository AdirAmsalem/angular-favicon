angular.module("favicon", [])
.filter("favicon", function() {
	var provider = "https://www.google.com/s2/favicons?domain=%s";

	return function(url) {
		return provider.replace(/%s/g, url);
	}
})
.directive("favicon", ["faviconFilter", function(faviconFilter) {
	return {
		restrict: "EA",
		replace: true,
		template: '<img ng-src="{{faviconUrl}}" alt="{{description}}">',
		scope: {
			url: "=",
			description: "="
		},
		link: function($scope, element, attrs) {
			$scope.$watch("url", function(value) {
				$scope.faviconUrl = faviconFilter(value);
			});
		}
	}
}]);