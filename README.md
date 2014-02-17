# siteFavicon

[siteFavicon](http://AdirAmsalem.github.io/siteFavicon) is a simple AngularJS filter that let you easily get the favicon of any website.

## Download

You can download this by:

* Using bower: `bower install siteFavicon`
* Downloading the "siteFavicon.js" file and place it in your scripts folder.

## Usage

Add the "siteFavicon.js" script to your html file, then you could use this just as you would use any other filter out there.

#### In view templates: ([Example](http://AdirAmsalem.github.io/siteFavicon/examples/view-template.html))
````js
var myApp = angular.module("myApp", ["siteFavicon"]);
````
````html
<img ng-src="{{'github.com' | siteFavicon}}" alt="GitHub">
````

#### In controllers/services using "$filter": ([Example](http://AdirAmsalem.github.io/siteFavicon/examples/filter.html))
````js
var myApp = angular.module("myApp", ["siteFavicon"]);

myApp.controller("MainCtrl", ["$scope", "$filter", function($scope, $filter) {
	$scope.githubFavicon = $filter("siteFavicon")("github.com");
}]);
````
````html
<img ng-src="{{githubFavicon}}" alt="GitHub">
````

#### In controllers/services using "filterFactory": ([Example](http://AdirAmsalem.github.io/siteFavicon/examples/filter-factory.html))

````js
var myApp = angular.module("myApp", ["siteFavicon"]);

myApp.factory("myService", ["siteFaviconFilter", function(siteFaviconFilter) {
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