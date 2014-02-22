# angular-favicon

[angular-favicon](http://AdirAmsalem.github.io/angular-favicon) is an AngularJS module that let you easily get and display the favicon of any website.

## Download

You can download this by:

* Using bower: `bower install angular-favicon`
* Download the "angular-favicon.js" file and place it in your scripts folder.

## Usage

Add the "angular-favicon.js" script to your html file, then you could use this just as you would use any other filter out there.

#### In view templates using a filter: ([Example](http://AdirAmsalem.github.io/angular-favicon/examples/view-template-filter.html))
````js
var myApp = angular.module("myApp", ["favicon"]);

myApp.controller("MainCtrl", ["$scope", function($scope) {
	$scope.githubUrl = "http://github.com";
}]);
````
````html
<img ng-src="{{githubUrl | favicon}}" alt="GitHub">
<img ng-src="{{'http://github.com' | favicon}}" alt="GitHub">
````

#### In view templates using a directive: ([Example](http://AdirAmsalem.github.io/angular-favicon/examples/view-template-directive.html))
````js
var myApp = angular.module("myApp", ["favicon"]);

myApp.controller("MainCtrl", ["$scope", function($scope) {
	$scope.github = {
		name: "GitHub",
		url: "http://github.com"
	};
}]);
````
````html
<favicon url="github.url" description="github.name"></favicon>
<favicon url="'http://github.com'" description="'GitHub'"></favicon>

<img favicon url="github.url" description="github.name">
<img favicon url="'http://github.com'" description="'GitHub'">
````

#### In controllers/services using "$filter": ([Example](http://AdirAmsalem.github.io/angular-favicon/examples/filter.html))
````js
var myApp = angular.module("myApp", ["favicon"]);

myApp.controller("MainCtrl", ["$scope", "$filter", function($scope, $filter) {
	$scope.githubFaviconUrl = $filter("favicon")("http://github.com");
}]);
````
````html
<img ng-src="{{githubFaviconUrl}}" alt="GitHub">
````

#### In controllers/services using "filterFactory": ([Example](http://AdirAmsalem.github.io/angular-favicon/examples/filter-factory.html))

````js
var myApp = angular.module("myApp", ["favicon"]);

myApp.factory("myService", ["faviconFilter", function(faviconFilter) {
	// code...

	return {
		// code...
		getFavicon: function(url) {
			return faviconFilter(url);
		}
	}
}]);

myApp.controller("MainCtrl", ["$scope", "myService", function($scope, myService) {
	$scope.githubFaviconUrl = myService.getFavicon("http://github.com");
}]);
````
````html
<img ng-src="{{githubFaviconUrl}}" alt="GitHub">
````

### Enjoy!