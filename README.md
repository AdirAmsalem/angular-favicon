# siteFavicon

siteFavicon is a simple AngularJS filter that let you easily get the favicon of any website.

## Download

You can download this by:

* Using bower: `bower install sitefavicon`
* Downloading the file "siteFavicon.js" and place it in your scripts folder.

## Usage

You can use it just as you would use any other filter out there.

#### In view templates:

````js
var myApp = angular.module("myApp", ["siteFavicon"]);
````
````html
<img ng-src="{{'github.com' | siteFavicon}}" alt="GitHub">
````

#### In controllers/services using "$filter":

````js
var myApp = angular.module("myApp", ["siteFavicon"]);

myApp.factory("MainCtrl", ["$scope", "$filter", function($scope, $filter) {
	$scope.githubFavicon = $filter("siteFavicon")("github.com");
}]);
````
````html
<img ng-src="{{githubFavicon}}" alt="GitHub">
````

#### In controllers/services using "filterFactory":

````js
var myApp = angular.module("myApp", ["siteFavicon"]);

myApp.service("myService", ["siteFaviconFilter", function(siteFaviconFilter) {
	// code...

	return {
		// code...
		getSiteFavicon: function(url) {
			return siteFaviconFilter(url);
		}
	}
}]);

myApp.controller("MainCtrl", ["$scope", "myService", function($scope, myService) {
	$scope.githubFavicon = myService.getSiteFavicon("github.com");
}]);
````
````html
<img ng-src="{{githubFavicon}}" alt="GitHub">
````

### Enjoy!